import React from 'react';
import LayOut from './Component/LayOut/LayOut';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import PORTFOLIO from './Component/PORTFOLIO/PORTFOLIO';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';



const route = createBrowserRouter([{
  path:"",element : <LayOut />, children:[
    {path:"home",element:<Home />},
    {path:"porfolio",element:<PORTFOLIO />},
    {path:"about",element:<About />},
    {path:"contact",element:<Contact />},
    {path:"*",element:<NotFound />}
  ]
}])

export default function App() {
  return (
        <RouterProvider router={route}></RouterProvider>
        
  )
}
