import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: "#222",
      color: "#fff",
      marginBottom: "1rem",
    },
    links: {
      display: "flex",
      gap: "1rem",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <nav style={styles.nav}>
      <div>GameTracker</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          My Games
        </Link>
        <Link to="/add" style={styles.link}>
          Add Game
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
