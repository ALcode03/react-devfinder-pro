import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg'>
            <div className='container'>
            <Link className='navabar-brand' to='/'>
                 DevFinder Pro
            </Link>

            <div className='navabar-nav'>
                <Link className='nav-Link' to='/'>
                     Home
                </Link>
                <Link className='nav-link' tp='/favoriites'>
                     Favorities
                </Link>
            </div>
            </div>

        </nav>
    );
}