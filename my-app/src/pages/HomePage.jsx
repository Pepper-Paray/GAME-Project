import { useEffect, useState } from "react";
import { getGames, deleteGame } from "../services/gamesService";
import GameCard from "../components/GameCard";

function HomePage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadGames = async () => {
    try {
      setLoading(true);
      const data = await getGames();
      // Optional: sort by created_at descending
      const sorted = data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setGames(sorted);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteGame(id);
      setGames((prev) => prev.filter((g) => g.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadGames();
  }, []);

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "1rem",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Games</h1>
      {loading && <p>Loading games...</p>}
      {!loading && games.length === 0 && <p>No games yet. Add one!</p>}
      {!loading &&
        games.map((game) => (
          <GameCard key={game.id} game={game} onDelete={handleDelete} />
        ))}
    </div>
  );
}

export default HomePage;
