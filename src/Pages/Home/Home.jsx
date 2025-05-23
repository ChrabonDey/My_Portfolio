import React from 'react';
import Banner from '../Hero/Banner';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Projects from '../projects/Projects';
import Contact from '../Contact/Contact';
import Earth from '../Earth/Earth';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Earth></Earth>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;