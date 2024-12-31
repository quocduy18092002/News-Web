interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export const fetchTopHeadlines = async (source: string): Promise<Article[]> => {
  try {
    const response = await fetch(`/api/home?source=${source}`);
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
