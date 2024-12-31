import React from "react";
import Image from "next/image";
import Link from "next/link";


interface NewsCardProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  url,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col text-center">
    <div className="relative h-[300px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          unoptimized
          className="object-cover"
        />  
    </div>
    <div>
      <div className="md:text-2xl text-base font-bold py-4">{title}</div>
      <div className="md:text-xl text-xs font-normal pb-4">{description}</div>
    </div>
      <Link href={url} target="_blank" rel="noopener noreferrer" className="text-[#ff0000] text-sm font-normal">
        Read more
      </Link>
      </div>
    
  );
};

export default NewsCard;
