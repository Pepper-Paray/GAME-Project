import { useState } from "react";

function GameForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const game = {
      title: title.trim(),
      genre: genre.trim(),
      rating: Number(rating),
    };

    if (!game.title || !game.genre || !game.rating) return;

    onSubmit(game);

    setTitle("");
    setGenre("");
    setRating(1);
  };

  const styles = {
    form: {
      maxWidth: "400px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    label: {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
      fontWeight: "bold",
    },
    input: {
      padding: "0.5rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      marginTop: "0.5rem",
      padding: "0.5rem",
      borderRadius: "4px",
      border: "none",
      backgroundColor: "#27ae60",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Title
        <input
          style={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label style={styles.label}>
        Genre
        <input
          style={styles.input}
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </label>

      <label style={styles.label}>
        Rating (1–5)
        <input
          style={styles.input}
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </label>

      <button style={styles.button} type="submit">
        Save Game
      </button>
    </form>
  );
}

export default GameForm;
