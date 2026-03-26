const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

const headers = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
};

export async function getGames() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/games?select=*`, {
    headers,
  });

  if (!res.ok) {
    console.error("Error fetching games:", await res.text());
    throw new Error("Failed to fetch games");
  }

  return await res.json();
}

export async function addGame(game) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/games`, {
    method: "POST",
    headers,
    body: JSON.stringify(game),
  });

  if (!res.ok) {
    console.error("Error adding game:", await res.text());
    throw new Error("Failed to add game");
  }

  return await res.json();
}

export async function deleteGame(id) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/games?id=eq.${id}`, {
    method: "DELETE",
    headers,
  });

  if (!res.ok) {
    console.error("Error deleting game:", await res.text());
    throw new Error("Failed to delete game");
  }

  return true;
}
