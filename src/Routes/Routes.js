import { createBrowserRouter } from "react-router-dom";
import Error from "../components/common/Error";
import Home from "../Layout/Home";
import AllJobs from "../components/Jobs/AllJobs";
import Experienced from "../components/Jobs/Experienced";
import Fresher from "../components/Jobs/Fresher";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                children : [
                    {
                        path : '/',
                        element : <AllJobs></AllJobs>
                    },
                    {
                        path : '/all',
                        element : <AllJobs></AllJobs>
                    },
                    {
                        path : '/fresher',
                        element : <Fresher></Fresher>
                    },
                    {
                        path : '/experienced',
                        element : <Experienced></Experienced>
                    },

                ]
            },
        ]

    },
    {
        path : "*",
        element : <Error></Error>
    }
])