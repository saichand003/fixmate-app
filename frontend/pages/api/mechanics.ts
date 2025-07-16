import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // ✅ Railway provides this in env vars
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { zip } = req.query;

  if (!zip || typeof zip !== "string") {
    return res.status(400).json({ error: "Missing or invalid zip parameter" });
  }

  try {
    const result = await pool.query(
      "SELECT id, name, zip, latitude, longitude FROM mechanics WHERE zip = $1",
      [zip]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("DB error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
