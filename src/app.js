
import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./compnents/Header";
import Body from "./compnents/Body";
// import About from "./compnents/About";
const About = lazy(()=>import("./compnents/About"));
import Contact from "./compnents/Contact";
import Home from "./compnents/Home";
import Error from "./compnents/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Restaurant from "./compnents/Restaurants";


const footer = () => {
    return(
        <div>
            
        </div>
    )
};

const AppLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
};   

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<Suspense fallback={
                    <h1>Loading...</h1>
                }>
                    <About/>
                    </Suspense>,
            },
            {
                path:"/home",
                element:<Body/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/Restaurants/:resId",
                element:<Restaurant/>,
            }
        ],

    },
    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);