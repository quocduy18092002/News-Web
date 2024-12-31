import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const API_KEY = process.env.NEWS_API_KEY; 
const BASE_URL = "https://newsapi.org/v2/top-headlines";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { category } = req.query;

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        category,
        country: "us",
        apiKey: API_KEY,
      },
    });

    const articles: Article[] = response.data.articles.filter(
      (article: Article) => article.urlToImage !== null
    );

    res.status(200).json(articles);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
