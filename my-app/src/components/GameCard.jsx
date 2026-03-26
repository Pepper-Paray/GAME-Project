function GameCard({ game, onDelete }) {
  const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      marginBottom: "0.75rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    info: {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
    },
    title: {
      fontWeight: "bold",
      fontSize: "1.1rem",
    },
    button: {
      backgroundColor: "#c0392b",
      color: "#fff",
      border: "none",
      padding: "0.5rem 0.75rem",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.info}>
        <span style={styles.title}>{game.title}</span>
        <span>Genre: {game.genre}</span>
        <span>Rating: {game.rating}/5</span>
      </div>
      <button style={styles.button} onClick={() => onDelete(game.id)}>
        Delete
      </button>
    </div>
  );
}

export default GameCard;
