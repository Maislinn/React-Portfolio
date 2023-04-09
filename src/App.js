// import background image
import { useState } from 'react';
import background from './assets/background.png';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
    // active tab use state
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        {/* Render active tab */}
                        {activeTab === 'about' && <About />}
                        {activeTab === 'portfolio' && <Portfolio />}
                        {activeTab === 'contact' && <Contact />}
                        {activeTab === 'resume' && <Resume />}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;