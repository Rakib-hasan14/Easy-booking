import React from 'react';
import Banner from '../Banner/Banner';
import IconicSec from '../IconicSection/IconicSec';
import WelcomeSec from '../WelcomeSec/WelcomeSec';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WelcomeSec></WelcomeSec>
            <IconicSec></IconicSec> 
                       
        </div>
    );
};

export default Home;