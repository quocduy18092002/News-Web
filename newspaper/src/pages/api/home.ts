import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const API_KEY = process.env.NEWS_API_KEY; 
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { source } = req.query;

  if (!source) {
    return res.status(400).json({ error: "Source is required" });
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        sources: source,
        apiKey: API_KEY,
      },
    });

    const articles = response.data.articles; 
    res.status(200).json(articles);
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    res.status(500).json({ error: "Failed to fetch top headlines" });
  }
}
