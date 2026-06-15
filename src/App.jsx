import { Routes, Route } from 'react-router-dom';
// Import the components
import Navbar from './components/Navbar';
// Import the pages
import Home from './pages/Home';

export default function App() {
    return (
        <>
            <Navbar />

            <div className='container mt-4'>
                <Routes>
                    <Route 
                        path='/'
                        element={<Home />}
                    />
                </Routes>
            </div>
        </>
    );
}