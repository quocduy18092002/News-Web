interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export const fetchNews = async (category: string): Promise<Article[]> => {
  try {
    const response = await fetch(`/api/news?category=${category}`);
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
