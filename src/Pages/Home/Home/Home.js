import React from 'react';
import Contact from '../../Contact/Contact';
import Skill from '../../MySkill/Skill';
import Projects from '../../Projects/Projects';
import Survices from '../../Survices/Survices';
import Banner from '../Banner/Banner';
import Introduce from '../Introduce/Introduce';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Banner></Banner>
            <Survices></Survices>
            <Introduce></Introduce>
            <Projects></Projects>
            <Skill></Skill>
            <Contact></Contact>
        </div>
    );
};

export default Home;