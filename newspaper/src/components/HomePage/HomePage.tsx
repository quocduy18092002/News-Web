import React from 'react';
import SourceNews from '../SourceNews/SourceNews';

const HomePage = () => {
    return (
        <div>
      <SourceNews source="bbc-news" />
        <SourceNews source="abc-news" />
        <SourceNews source="the-washington-post" />

        </div>
    );
}
export default HomePage;
