import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/common/Banner';
import JobCategories from '../components/Jobs/JobCategories';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import TopCompanies from '../components/Home/TopCompanies';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategories></JobCategories>
            <Outlet></Outlet>
            <TopCompanies></TopCompanies>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;