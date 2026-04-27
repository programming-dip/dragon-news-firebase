import React, { Suspense } from 'react';
import LatestNews from '../components/LatestNews';
import Header from '../components/header';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Categories from '../components/Categories';
import RightNav from '../components/RightNav';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>

                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>

                <nav className='w-11/12 mx-auto mt-6'>
                    <Navbar></Navbar>
                </nav>

            </header>


            <main className='w-11/12 mx-auto my-10 grid grid-cols-12 gap-5'>

                <aside className="left-nav col-span-3">
                    <Suspense
                        fallback={<span className="loading loading-ring loading-xl"></span>}
                    >
                        <Categories></Categories>
                    </Suspense>
                </aside>

                <section className='middle col-span-6'>
                    <Outlet></Outlet>
                </section>

                <aside className="right-nav col-span-3">
                    <RightNav></RightNav>
                </aside>

            </main>

        </div>
    );
};

export default HomeLayout;