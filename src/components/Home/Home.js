import React from 'react';
import Banner from '../Banner/Banner';
import Hotels from '../Hotels/Hotels';
import IconicSec from '../IconicSection/IconicSec';
import WelcomeSec from '../WelcomeSec/WelcomeSec';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Hotels></Hotels>
            <WelcomeSec></WelcomeSec>
            <IconicSec></IconicSec> 
                       
        </div>
    );
};

export default Home;