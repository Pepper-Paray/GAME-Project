# GAME-Project
GameTracker is a simple little React app I built for my final project. The idea is pretty straightforward: I wanted a place to keep track of my favorite video games, add new ones, and delete them when I change my mind. The app uses Supabase as the backend and React Router for navigation.

It’s not meant to be fancy — just clean, functional, and easy to run.

🚀 Features
View a list of all games stored in Supabase

Add a new game with a title, genre, and rating

Delete a game from the list

Navigation between pages using React Router

All API calls handled through a service file

Environment variables stored safely in .env

🛠️ Tech Used
React

Vite

React Router DOM

Supabase (REST API)

Fetch API

src/
  pages/
    HomePage.jsx
    AddGamePage.jsx
  components/
    Navbar.jsx
    GameCard.jsx
    GameForm.jsx
  services/
    gamesService.js
  App.jsx
  main.jsx
.env

🔧 Setup Instructions
If you want to run this locally, here’s how to get it going:

1.git clone <your-repo-url>
cd gametracker

2.npm install

3.VITE_SUPABASE_URL=your-url-here
VITE_SUPABASE_KEY=your-key-here

4.npm run dev

🗄️ Supabase Setup
You’ll need a table called games with these columns:

Column	Type	Notes
id	int8	Primary key, auto‑increment
title	text	Game name
genre	text	Game genre
rating	int4	1–5 rating
created_at	timestamptz	Default: now()

Make sure RLS is enabled and you add policies that allow:

read

insert

delete

for all users.

🌐 Deployment
I deployed mine on Netlify.
If you do the same, don’t forget to add your environment variables in the Netlify dashboard.