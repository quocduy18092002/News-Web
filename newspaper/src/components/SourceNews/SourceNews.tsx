import React, { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../util/fetchSources";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import Link from "next/link";
import { Grid } from "swiper/modules";

interface SourceNewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}



const formatPublishedAt = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const SourceNews = ({ source }: { source: string }) => {
  const [news, setNews] = useState<SourceNewsArticle[]>([]);

  useEffect(() => {
    const getSourceNews = async () => {
      try {
        const newsData = await fetchTopHeadlines(source);
        setNews(newsData);
      } catch (error) {
        console.error(`Error fetching ${source} News:`, error);
      } 
    };
    getSourceNews();
  }, [source]);

  return (
    <div className="px-36 pb-20">
      
      <div className={`font-bold text-4xl uppercase pb-10`}>{source}</div>
      
      <div className="grid grid-cols-2 gap-4 items-center justify-center">
        <div className="w-full h-full">
          {news[0] && (
            <div>
              <Link href={news[0].url} target="_blank" rel="noreferrer">
                <Image
                  src={news[0].urlToImage || "/default-image.jpg"}
                  alt={news[0].title}
                  width={600}
                  height={400}
                  unoptimized
                  className="object-cover w-full h-full rounded-sm"
                  property="image"
                />
              </Link>
              <h1 className="font-semibold text-2xl text-start">{news[0].title}</h1>
              <div className="font-normal text-sm text-start">{news[0].description}</div>
              <div className="text-end font-light text-xs">{formatPublishedAt(news[0].publishedAt)}</div>
            </div>
          )}
        </div>
      {news.length > 1 && (
  <Swiper
    spaceBetween={10}
    slidesPerView={2}
    grid={{ rows: 2, fill: "row" }}
    modules={[Grid]}
    className="w-full h-full"
  >
    {news.slice(1).map((article, index) => (
      <SwiperSlide
        key={`news-slide-${index}`}
        className="flex justify-center items-center text-center h-full pb-4"
      >
        <div>
          <Link
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center"
          >
            <Image
              src={article.urlToImage || "/default-image.jpg"}
              alt={article.title}
              width={300}
              height={200}
              unoptimized
              className="object-cover w-full h-full rounded-sm"
              property="image"
            />
          </Link>
          <h1 className="font-semibold text-xl text-start">{article.title}</h1>
          <div className="text-end font-light text-xs">
            {formatPublishedAt(article.publishedAt)}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
)}
      </div>
    </div>
  );
};

export default SourceNews;
