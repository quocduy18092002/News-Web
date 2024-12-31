import React, { useEffect, useState } from "react";
import { fetchNews } from "../util/fetchNews";
import HomePage from "../HomePage/HomePage";
import Image from "next/image";
import Link from "next/link";
import NewsCard from "../NewsCard/NewsCards";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
}

const NewsList = ({ category }: { category: string }) => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const[isLoaded, setIsLoaded] = useState<boolean>(true);
  useEffect(() => {
    const getNews = async () => {
      const newsData = await fetchNews(category);
      setNews(newsData);
    };
    getNews();
    setIsLoaded(false);
  }, [category]);

  if (isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="text-4xl font-bold text-red-500">Loading...</div>
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500 mt-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="md:text-5xl text-xl font-bold text-center uppercase pb-4 md:pb-10 text-[#ff0000]">{category}</div>
    {category === "home" && <HomePage />}
      <div className="md:grid md:grid-cols-2 flex flex-col gap-4 items-start justify-center md:px-20 px-10">
      {news.slice(0,1).map((article, index) => (
        <Link key={index} href={article.url}> 
         <Image src={article.urlToImage || "/default-image.jpg"} alt="" width={500} height={300} unoptimized className="object-contain w-fit h-fit rounded-sm"
 />
         <div className="text-start font-bold text-base md:text-2xl">{article.title}</div> 
          <div>{article.description}</div>
        </Link>
      ))}
      <div className="grid grid-cols-2 gap-4 justify-start">
           {news.slice(1,5).map((article, index) => (
          <div key={index} > 
         <Image src={article.urlToImage || "/default-image.jpg"} alt="" width={200} height={300} unoptimized  className="object-contain w-fit h-fit rounded-sm"/>
         <div className="text-start font-bold text-sm md:text-2xl">{article.title}</div> 
        </div>
      ))}
      </div>
       
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 md:px-20 pt-10">
      {news.slice(5).map((article, index) => (
        <NewsCard key={index} title={article.title} description={article.description} url={article.url} imageUrl={article.urlToImage || ""} />
      ))}
    </div></div>
    
  );
};

export default NewsList;
