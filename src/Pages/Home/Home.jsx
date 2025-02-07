import React from 'react';
import Banner from '../Hero/Banner';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Projects from '../projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='max-w-[1280px] p-8 text-center mx-auto'>
            <Banner></Banner>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;