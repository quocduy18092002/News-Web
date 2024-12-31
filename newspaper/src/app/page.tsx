"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";
import NewsList from "@/components/NewsList/NewsList";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [category, setCategory] = useState<string>("home");
  const [isLoaded, setIsLoaded] = useState<boolean>(false); 

  useEffect(() => {
    const savedCategory = localStorage.getItem("category");
    if (savedCategory) {
      setCategory(savedCategory);
    }
    setIsLoaded(true); 
  }, []);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    localStorage.setItem("category", newCategory); 
  };

  return (
    <div>
      <Header />
      {isLoaded && (
        <HeaderMenu defaultKey={category} onCategoryChange={handleCategoryChange} />
      )}
      <NewsList category={category} />
      <Footer/>
    </div>
  );
};

export default Home;
