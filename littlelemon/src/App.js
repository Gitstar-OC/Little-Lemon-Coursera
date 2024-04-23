import './App.css';
import React from 'react'
import { About, Footer, Hero, HighLights, Navbar, Testimonials } from './components';
// import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { LogIn, OrderOnline, Menu, Reservations } from './container/index';

// function AppRoutes() {
//   let routes = useRoutes([
//     { path: "/home", element: <Home /> },
//     { path: "/login", element: <LogIn /> },

//   ]);
//   return <>{routes}</>;
// }

function App() {
  return (
      <>
      <Navbar />
      <LogIn />
      <OrderOnline /> 
      <Menu />
      <Reservations />
      <Hero />
      <HighLights />
      <Testimonials />
      <About />
      <Footer />
      </>
  );
}


export default App;
