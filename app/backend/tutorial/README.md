## 0 Getting started - prerequisites
# 0.1 Access to OMDB API
In order to send requests to the OMDB API, you need to fetch an API-key. Go to the [OMDB API website](https://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFggCAQ8QDxYCHgdDaGVja2VkZ2RkZGQCAw8QDxYCHwBoZGRkZAIFDxYCHgdWaXNpYmxlZ2QCBw8WAh8BaGQCAg8WAh8BaGQCAw8WAh8BaGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgMFC3BhdHJlb25BY2N0BQhmcmVlQWNjdAUIZnJlZUFjY3TuO0RQYnwPluQ%2Bi0YJHNTcgo%2BfiAFuPZl7i5U8dCGtzA%3D%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAV39P5KqwNGJgd%2F4UbyWCx3mSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulNNHYC5f864PBfygTYVt5wnDXNKUzugcOMyH4eryeeGG&at=freeAcct&Email=) 
and generate a FREE API key.

When you have received the API key via e-mail, you can try using it in your terminal by fetching the titanic movie.

```bash
curl "http://www.omdbapi.com/?t=titanic&apikey=<API-KEY>"
```
This should return a Movie object representing the movie Titanic.

# 0.2 Existing Database tables in Google Cloud SQL 
We will all use the same database for this workshop running in Google Cloud. The database is set up in Google Cloud with existing tables. 
The tables are:
```
TABLE users (
    id VARCHAR(50) PRIMARY KEY
);
TABLE movies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    img TEXT NOT NULL,
    imdb_id VARCHAR(50) NOT NULL UNIQUE
);
TABLE favorites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id VARCHAR(50) NOT NULL,
    movie_id UUID NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);
```
Where `Users` is a prepped table containing all of us. The id for each user is `<firstname>.<lastname>`. This is
the table that will be used when you log in with your name in the frontend.
`Movies` will contain all movies marked as favorites, and `Favorites` is a table that connects users with their favorite movies.

Below is a UML diagram of the tables.

![Database Tables](resources/db-tables.drawio.png "Database Tables")

# 0.3 Prisma
The framework we will use to interact with the database is called Prisma. Prisma is a modern database toolkit that makes 
database access easy with type-safe queries. A representation of the database tables can be viewed in 
[prisma/schema.prisma](prisma/schema.prisma), and the client we will use to interact with the database is 
setup in [prisma/prismaClient.ts](prisma/prismaClient.ts).

# 1 Configurations
## 1.0 Configure your personal OMDB API key
Set the omdb url and your personal api key from 0.1 in the [.env](.env) file.
```markdown
OMDB_API_KEY=7c90e613 #Set your own API key <your_personal_api_key>
OMDB_BASE_URL=http://www.omdbapi.com/
```

## 1.1 Configure database connection
For the database connection to work, you will need to set your username and password in the [.env](.env) file.
Your username is your full name separated by a dot, e.g. `johanna.doe`. Your password will be given to you 
during the workshop.

```markdown
# DB CONNECTION
DATABASE_URL=postgresql://<firstname>.<lastname>:<password>@34.38.7.50:5432/postgres
```
To test your database connection, you can run Visma Studio with the command:
```bash
npx prisma studio
```
This will open a browser window visualizing the database tables where you can click around and see the current data.
You are able to add, delete, and update data in the tables, but please be careful not to delete any data that
someone else might have added since it can ruin the exercise for others.
![Prisma Studio](resources/prisma-studio.png "Prisma Studio")

# 2 Running the application
## 2.1 Starting the application
To run the application, you need to install the dependencies and start the server. 
Run
```bash
npm install
```
and then start the server with
```bash
npm run dev
```
The server will start on `http://localhost:3000` and the frontend will be available on `http://localhost:3000`.

## 2.2 Calling an endpoint
There is already one endpoint setup for you in the backend for fetching a user by id. It looks like this:
```bash
GET api/users/{id}
```
Open a new terminal and try curling the endpoint with your own id:
```bash
curl -X GET http://localhost:3000/api/users/<your-firstname>.<your-lastname>
```
This should return a user object with your name
```bash
{"user":{"id":<your-firstname>.<your-lastname>}}
```
Now everything seems to work and we are ready to start coding! 🚀

# 3. Searching for movie titles
We want to be able to search for movie titles in the frontend and display the search results.
## 3.1 What is a RESTful search endpoint
A RESTful search endpoint is designed to allow clients to search or filter resources based on query parameters, 
typically using the `GET` HTTP method. Our resource in this case, is movies, and we want to search using partial
movies titles. The endpoint will look as follows:
```bash
GET /api/movies?title=<partial-title>
```
So that when we call for example
```bash
GET /api/movies?title=star
```
and the request would return movies whose titles contain the word "star" (e.g. "Star Wars", "A Star is Born", 
"Star Trek").
In this example, the title that we send along to the endpoint is called a query parameter.

## 3.2 Create the API route
In next.js, we can create an API route by placing a file `route.ts` in the `app/api` directory. Since we also want
movies included in the path of our endpoint, we add our `route.ts` file in the
`app/api/movies` directory. 

## 3.3 Create the GET endpoint 
Let's first create a GET-endpoint that extracts the title from the request URL and returns it
as a response:
```typescript
import {NextResponse} from "next/server";

export async function GET(request: Request): Promise<NextResponse> {
    const url = new URL(request.url);
    const partialTitle = url.searchParams.get('title');
    return NextResponse.json({ partialTitle });
}
```
## 3.2 Verify the endpoint repsponse
To verify that the endpoint works, we can `curl` it in the terminal. Make sure you still have your 
server running, and call the endpoint using
```bash
curl -X GET http://localhost:3000/api/movies?title=star
```
this should return a response
``` bash 
{"partialTitle":"star"}
```

## 3.3 Browse the OMDB API
Since we will get the movies from the OMDB API, we need to search for movies in their API. 
We can look at their API at [omdbapi.com](http://www.omdbapi.com/). Scroll down to "Examples" and 
browse to see if you find something useful for us. 
You may see that they already have a search endpoint that we can use. Typing in "star" in the title 
search field and clicking Search will give you a list of movies with the word "star" in the title.
![OMDB API](resources/omdb-search.png "OMDB API")
Here we see what their endpoint looks like, and what response we should expect.

## 3.4 OMDB Client 
Now when we know what endpoint we should call, we create a client in our backend that fetches 
movie titles from the OMDB API. Create a file `omdbClient.ts` in the `movies` directory.



