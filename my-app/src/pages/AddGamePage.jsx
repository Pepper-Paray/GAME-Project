import { useNavigate } from "react-router-dom";
import { addGame } from "../services/gamesService";
import GameForm from "../components/GameForm";

function AddGamePage() {
  const navigate = useNavigate();

  const handleAddGame = async (game) => {
    try {
      await addGame(game);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

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
      <h1 style={styles.title}>Add Game</h1>
      <GameForm onSubmit={handleAddGame} />
    </div>
  );
}

export default AddGamePage;
