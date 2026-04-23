import React from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import Home from '../Pages/Home/Home';
import Mainpage from '../Component/Mainpage';
import Timeline from '../Pages/Timeline/Timeline';
import Stats from '../Pages/Stats/Stats';
import ErrorPage from '../Pages/Error/ErrorPage';
import FriendDetail from '../Component/FriendDetail';
import TimelineContext from '../Context/TimelineContext';

const Mainlayout = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            Component: Mainpage,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    index: true,
                    Component: Home
                },
                {
                    path: '/timeline',
                    Component: Timeline
                },
                {
                    path: '/Stats',
                    Component: Stats
                },
                {
                    path: '/detail/:id',
                    Component: FriendDetail,
                }
            ]

        },




    ]);


    return (
        <TimelineContext>
            <RouterProvider router={router}>
                <Mainpage></Mainpage>
            </RouterProvider>
        </TimelineContext>
    );
};

export default Mainlayout;