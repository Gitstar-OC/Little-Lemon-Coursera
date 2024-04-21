import './App.css';

import { About, Footer, Hero, HighLights, Navbar, Testimonials } from './components';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Hero />
            <HighLights />
            <Testimonials />
            <About />
            <Footer />
        </div>
    )
}

export default App;
