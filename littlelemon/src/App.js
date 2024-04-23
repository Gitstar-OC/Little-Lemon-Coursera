import './App.css';
import { About, Footer, Hero, HighLights, Navbar, Testimonials } from './components';
// import { BrowserRouter as Router, useRoutes } from 'react-router-dom';


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
      <Hero />
      <HighLights />
      <Testimonials />
      <About />
      <Footer />
      </>
  );
}


export default App;
