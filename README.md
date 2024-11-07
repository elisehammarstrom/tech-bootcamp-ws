## 0 Getting started

- Information about how to read the readme, tools using

### 0.1 **How to read this README**

---

To easily follow this Workshop and README file, the README is structured according to a few conventions.

- Code and file names are written like `CodeExample`.
- Larger code parts are written as below, with the name of the vialbe file is included at the top after two `//`

```
// File Name

Newly added code together with some older code to understand where the new code should be put in
```

- If there are previous written code in the same file as the new code, this is implied by

```
/* ... */ (Previous code written)
```

- When Next.js concepts or other important words are mentioned, they are written in bold, as **Next.js Concept**

- If there are some deeper explainations to either concepts or why, these are written as the citation shown below. These can be skipped depending on how much in detail you want to go.
  > Example explaination of a concept

---

### 0.2 Technologies used

The technologies that we will be using in this project is TypeScript for both backend and frontend, [React.js](https://react.dev/) for the frontend, and [Next.js](https://nextjs.org/docs) which is a React framework where you can create Server Side Rendered (SSR) application and Backend-For-Frontends (BFFs) smoothly. For styling in the frontend we will use a utility based css library [Tailwindcss](https://tailwindcss.com/)

### 0.3 Download the repo and start the application

If you haven't already, please download the repo from [TODO INSERT LINK]

To start the application you need to run:

- `npm install` - installing everything that is needed
- `npm run dev` - starts the application

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 0.4 Problems running the application?

Make sure you have a node version >=18.18.0

# Frontend Path

This is the path for you who wants to dig deeper into the frontend world! To get started:

Some tips to get maximal value out of the workshop:

- Styling is FUN to add, but fully optional and up to you! However, we recommend to not put too much time on the styling to begin with.
- `enhancements` sections are smaller detailes that should be skipped to begin with, but can return to if there is time at the end.

## 0. Getting stared Frontend path

1. Check out the `frontend` branch - this has already implemented all API endpoints, but lack the frontend components.
2. Fill in the .env file
   // TODO: Fill in how they should use the env. file.

## 1. Present movie

First task for us is to show a single movie. To do this, we will create a React component.

> A [React Component](https://react.dev/learn/your-first-component#components-ui-building-blocks) is a UI building block, that can contain markup + logic and be reused in the application. The component can contain other components, _child components_, and will then consequently become a _parent component_. It is often (and in our case) written using [tsx](https://react.dev/learn/writing-markup-with-jsx#jsx-putting-markup-into-javascript) files, which lets you embed markup inside javascript.

In `app/components/Movie.tsx` we have the component to use, which takes a `title` and `background` as props. Let's dig in how it works!

```
type MovieProps = {
  title: string;
  backgroundImg: string;
};
```

- This is the props you will be able to send to the component, defined by a name - `title` and `img`, and their corresponding type - both are of type `string`.

> A [prop](https://react.dev/learn/passing-props-to-a-component) is how a parent component can pass information to a child component.

```
export const Movie = ({ title, backgroundImg }: MovieProps) => {
  /*  */
};
```

- This is the name of the React Component, and specifying that it takes props as type `MovieProps`.

```
  return <></>;
```

- As return value, we have the markup for the component. Here you can specify all normal html tags that you know of, such as `p` and `h1`.

(Prepp) - En baskomponent med Syntax, som tar in en Movie.

- Return - är html-templaten som visas upp
- Visa hur man invokear variaber i Html-templaten
- Länka till tailwind eller css generellt beroende på vad vi väljer.

- Movie type.
- Ett exempelmovie som finns redan hårdkodad

### 1.1 Create your own MovieCard

Time to be playful!

**Task**: Display the movie title and the img in the react component.

To invoke javascript into the markup, you need to contain the variable in curly brackets, as:

```
  return (
    <>
      {myVariable}
    </>
  );
```

As told earlier, we are using Tailwind CSS for our styling (CSS).

> [Tailwind CSS](https://tailwindcss.com/) is a utility based CSS framework, where you build up your stylings by adding multiple CSS classes to your markup, where each class only sets one thing, such as `m-8` sets a margin of `8px`.

When styling html tags in React, we are using `className` instead of `class`. Example:

```
  return (
    <div className="my-tailwind-class">
      {myVariable}
    </div>
  );
```

Let the creativity flow with the styling, but don't put too much time on it :)

### 1.2 (Enhancements)

**Task**: Extend the props and MovieCard to also show a description and other attributes available in the `Movie` type.

## 2. Search for movie

... but wouldn't it be more fun if it was YOUR favorite movies that were shown here? Next part will allow us to search, and find, your faviourite movies!

But first, let us understand the index page. In next, the file `app/page.tsx` is what is shown when you enter the `localhost:3000`

```
{movies.map((movie) => (
  <MovieCard
    title={movie.title}
    backgroundImg={movie.img}
    key={movie.imdbId}
    isFavorite={movie.isFavorite}
  />
))}
```

- This part maps each example movie (of type `Movie`) to your own `MovieCard`.

### 2.1 Add UI components

To be able to search, we need an input field and a button. This correspond to the html elements `input` and `button`

**Task:** Add an input field + button to `page.tsx`. Style them as you wish.

TODO INA - ska detta vara en egen komponent med props? Kanske?

### 2.2 Search logic

So how do we act based on what the user searches for?

In React, when we want to share and maintain a value used between components close to each other, we can use the React built-in hook `useState`.

> A [React hook](https://react.dev/learn#using-hooks) is like a tool that lets you add special features (like state and side effects) to your React components.

The `useState` hook returns two variables - one that contains the value, and one that is a function that updates the state. It can be used like:

```
  const [myState, setMyState] = useState(0); // 0 is the initial value in the state
  setMyState(2) /7 this sets 2 as the new value

  return <div>{myState}</div> // Will display "2", and update once the state updates.
```

_note_: hooks needs to be called at the top of the React Component, like

```
export const MyComponent = () => {
  const [myState, setMyState] = useState();
  /* ... */
  return <></>;
}
```

**Task:** When the user writes in the input field, save the value in a state.

To perform an action in code when the user performs an action, we can use the `onClick` attribute to buttons. `onClick` takes in a function, that is performed when the button is clicked, like:

```
  /* ... */
  return <>
    <button
      type="button"
      onClick={() => console.log('you are awesome!!')}
      >
      Click me
    </button>
  </>;

```

**Task:** When the user clicks on the search button, call the method `fetchMovies` with the input value. This is where we in the next step will fetch the movies!

### 2.3 Use BFF

Time to get some real data in your application!
// TODO INA: write how to fetch from api + add endpoints

**Task:** Update the `fetchMovies` function so that it calls our api backend.

**Task:** The return value you get from `fetchMovies` and update the `movies` variable in `page.tsx`

// TODO Ina: remove once 2.3 is done

- Connect towards our api (remind where it was located)
- Connect using "fetch"
- Put the response into our movies

### 2.4 (Enhancements)

a) Initial view

- Do not want to show mock-movies from start, Instead please show text "search for your favourite movie"

b) Loading state

- Takes time loading, we want a loading state.

### 2.5 Celebration!

Congrats for completing the first two steps and connecting frontend to the backend.

// TODO:

- Img of how Fe now calls BE and that is what we did :D

## 3. Add to favorites

Next step is to add the possibility to select favorite movies!

### 3.1 Favorite Icon

- Knapp för att lägga till favoriter (IKON??)
- extend movie type with isFavorite, and send that to card and display something depending on if favorite or not
- HOW to use local assets

### 3.2 Toggle favorite on change

- add icon in button
- onClick, send to new endpoint. Id is the payload.
  [TODO: Fundera över hur du vill göra med state här - kanske belysa att det är problematiskt? Use streaming????]

## 4. Show favorites

Lastly, we want to be able to show our own favouries!

### 4.1 Add new route

Firstly, we want to create a new page where we display our favorites.

- Ny route? /my-favorites
- Link to route from home page. `<a>` link.
- Title "My favorites"

### 4.2 Fetch and show your favorites

- Hämta alla favoriter med getFavourites, och visa upp dem i ditt MovieGrid
- Utöka movieGrid item med information om hur många favoritmarkeringar de har.

### 4.3 (Enhancements)

- Loading symbol

### 4.4 Celebration!

Now you have completed the "main" part of this workshop - congratulations! Either go back and do the extension, or challenge yourself with improving the responsiveness or A11y which you can read about in the steps below!

### 5. Responsivenes

- lite info om hur man kan göra saker responsivt, och låt dem gå lösa.

### 6. Accessibility (A11y)

- Lite info om a11y och varför det är viktigt, och låt den gå lösa.

### 7. Fördjupande länkar

- Next.js, Styled components, etc.

## Backend Path

## Learn More

Did you like the tools we used in the workshop?

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
