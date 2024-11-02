## 0 Getting started - prerequisites
# 0.1 Access to OMDB API
In order to send requests to the OMDB API, you need to fetch an API-key. Go to the [OMDB API website](https://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFggCAQ8QDxYCHgdDaGVja2VkZ2RkZGQCAw8QDxYCHwBoZGRkZAIFDxYCHgdWaXNpYmxlZ2QCBw8WAh8BaGQCAg8WAh8BaGQCAw8WAh8BaGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgMFC3BhdHJlb25BY2N0BQhmcmVlQWNjdAUIZnJlZUFjY3TuO0RQYnwPluQ%2Bi0YJHNTcgo%2BfiAFuPZl7i5U8dCGtzA%3D%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAV39P5KqwNGJgd%2F4UbyWCx3mSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulNNHYC5f864PBfygTYVt5wnDXNKUzugcOMyH4eryeeGG&at=freeAcct&Email=) 
and generate a FREE API key.

When you have received the API key via e-mail, you can try using it in your terminal by fetching the titanic movie.

```bash
curl "http://www.omdbapi.com/?t=titanic&apikey=<API-KEY>"
```
This should return a Movie object representing the movie Titanic.

# 0.2 Existing Database tables
We will all use the same database for this workshop. The database is set up in Google Cloud with existing tables. 
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
```markdown
Favorites(id, user_id, movie_id)
```
Where `Users` is a prepped table containing all of us. The id for each user is `<firstname>.<lastname>`. This is
the table that will be used when you log in with your name in the frontend. 
`Movies` will contain all movies marked as favorites, and `Favorites` is a table that connects users with their favorite movies.

Below is a UML diagram of the tables.

![Alt text](resources/db-tables.drawio.png "Optional Title")

## 1.0 Configure your personal OMDB API key
Set the omdb url and your personal api key from 0.1 in the [.env](../../../.env) file.
```markdown
OMDB_API_KEY=7c90e613 #Set your own API key <your_personal_api_key>
OMDB_BASE_URL=http://www.omdbapi.com/
```

## 1.1 Configure database connection
For the database connection to work, you will need to set your username and password in the [.env](../../../.env) file.
Your username is your full name separated by a dot, e.g. `johanna.doe`. Your password will be given to you 
during the workshop.

```markdown
# DB CONNECTION
DB_HOST=34.38.7.50
DB_USER=<firstname.lastname>
DB_PASSWORD=<your-password> # Set your own password <your-password>
DB_NAME=tech-bootcamp-ws-db
```

##
