import React from 'react';
import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './Pages/Home/Home'; 
import About from './Pages/About/About';
import Layout from './Layouts/Layout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element ={<Home/>}/>
      <Route path='/About' element ={<About/>}/>

  </Route>

  ))
  
    
  return (<RouterProvider router={router}/>)
}

export default App