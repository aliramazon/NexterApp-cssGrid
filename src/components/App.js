import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Features from './Features';
import Realtors from './Realtors';
import StoryPictures from './StoryPictures';
import StoryContent from './StoryContent';
import Homes from './Homes';
import Gallery from './Gallery';
import Footer from './Footer';

const App = () => {
    return (
        <>
            <Sidebar />
            <Header />
            <Realtors />
            <Features />
            <StoryPictures />
            <StoryContent />
            <Homes />
            <Gallery />
            <Footer />
        </>
    );
};
export default App;
