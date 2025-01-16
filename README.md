# MovieVerse

Welcome to the MovieVerse! This project is a comprehensive web application, designed for movie enthusiasts, providing a seamless way to explore, search, and learn about movies. Whether you're looking for the latest releases, top-rated classics, or detailed information about a specific film, this website has you covered.

## Table of Contents

1. [Technologies](#technologies)
2. [Installation](#installation)

## Technologies

The technologies used on this projects:

- React 18
- React Router
- CSS Modules
- GSAP

## Installation

To setup and run this project locally follow the below steps:

1. Click on **'Code'** button on top right corner of your screen and clone the repo, running on a terminal:

```bash
git clone https://github.com/gneo0/Movie--Verse.git
cd Movie--Verse
```

2. Install dependencies:

```bash
npm install # or npm i for shorthand
```

3. A **TMDB API** key is necessary, in order to fetch the related movies. Navigate to [TMDB](https://developer.themoviedb.org/reference/intro/getting-started) and create an account.

4. Then, on the root folder of the project create a _.env_ file and paste your API key:

```bash
VITE_TMDB_API_KEY = <your-api-key>
```

5. To run development server, type:
```bash
npm run dev
```

6. Finally, open your browser and navigate to [localhost:5173](http://localhost:5173/)