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

The technologies that we will be using in this project is TypeScript for both backend and frontend, [React.js](https://react.dev/) for the frontend, and [Next.js](https://nextjs.org/docs) which is a React framework where you can create Server Side Rendered (SSR) application and Backend-For-Frontends (BFFs) smoothly.

### 0.3 Download the repo and start the application

If you haven't already, please download the repo from [TODO INSERT LINK]

To start the application you need to run:

- `npm install` - installing everything that is needed
- `npm run dev` - starts the application

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Frontend Path

0. Vilka branches som finns
   .- Att styling är fully optional men KUL

## 1. Present movie

First task for us is to show a single movie. To do this, we will use a [React Component](TODO: add link).

> TODO: Information about react components

In `app/components/Movie.tsx` we have the component to use, which takes a `title` and `background` as props.

(Prepp) - En baskomponent med Syntax, som tar in en Movie.

- Return - är html-templaten som visas upp
- Visa hur man invokear variaber i Html-templaten
- Länka till tailwind eller css generellt beroende på vad vi väljer.

- Movie type.
- Ett exempelmovie som finns redan hårdkodad

### 1.1 Create your own MovieCard

Time to be playful! Now is the time to create (and style) your own MovieCard. Let the creativity flow, but don't put too long time on it :)

- Vad är en react component? Vilka element?
- CSS vs script vs HTML
- Ta in props
- Task: Visa upp Namn + bild + kanske rating?

## 2. Search for movie

... but wouldn't it be more fun if it was YOUR favorite movies that were shown here? Next part will allow us to search, and find, your faviourite movies!

### 2.1 Add UI components

To be able to search, we need an input field and a button. This correspond to the html elements `input` and `button`

Task: create a new component `InputFieldRow`, that contains an input field and a button. Style them as you wish.

### 2.2 Search logic

- Använda state i en komponent, spara inputvärdet i den.
- Klicka på knappen, kalla på metoden "fetchMovies" // TODO: PREPPA!!!

### 2.3 Use BFF

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

- Img of how Fe now calls BE and that is what we did :D

### 3. Add to favorites

- Knapp för att lägga till favoriter (IKON??)
- Skicka till favoriter til BE

### 4. Show favorites

- Ny route? /my-favorites
- Hämta alla favoriter med get
- Visa upp dem + hur många favoritmarkeringar de har?
- Länka dit

### 4. Responsivenes

- lite info om hur man kan göra saker responsivt, och låt dem gå lösa.

### 5. Accessibility (A11y)

- Lite info om a11y och varför det är viktigt, och låt den gå lösa.

### 5. Fördjupande länkar

- Next.js, Styled components, etc.

## Backend Path

## Learn More

Did you like the tools we used in the workshop?

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
