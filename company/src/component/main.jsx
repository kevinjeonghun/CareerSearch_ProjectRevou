import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="relative px-20 py-4 flex justify-between items-center bg-white">
            
            <div>
                <Link to="/"><img src="assets/logo.png" alt="logo" className="w-32"/></Link>
            </div>
            <div className="lg:hidden">
                <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
                    <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className=" rounded-lg p-4">
                        <button className="absolute top-0 right-0 m-4" onClick={closeMenu}>
                            <svg className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.41-1.41a.75.75 0 011.06-1.06L10 8.94l1.47-1.47a.75.75 0 111.06 1.06L11.06 10l1.47 1.47a.75.75 0 11-1.06 1.06L10 11.06l-1.47 1.47a.75.75 0 01-1.06-1.06L8.94 10 7.47 8.53a.75.75 0 011.06-1.06L10 8.94l1.47-1.47a.75.75 0 111.06 1.06L11.06 10l1.47 1.47z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <ul className="text-white text-lg font-poppins font-semibold">
                            <li className="py-2">
                                <Link to="/mainpage" className="block px-4 py-2">Jobs</Link>
                            </li>
                            <li className="py-2">
                                <Link to="/" className="block px-4 py-2">Community</Link>
                            </li>
                            <li className="py-2">
                                <Link to="/"  className="block px-4 py-2">Blog</Link>
                            </li>
                            <li className="py-2">
                                <Link to="/Profile"  className="block px-4 py-2">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Desktop Menu */}
            <ul className="hidden lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 lg:justify-end">
                <li><Link to="/mainpage" className="font-semibold text-lg text-blue-950 hover:text-blue-600" >Jobs</Link></li>
                <li><Link to="/" className="font-semibold text-lg text-blue-950 hover:text-blue-600">Community</Link></li>
                <li><Link to="/"  className="font-semibold text-lg text-blue-950 hover:text-blue-600" >Blog</Link></li>
            </ul>
            <div> 
            <ul className="hidden lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 lg:justify-end">
                <li><Link to="/Profilepage"  className="font-semibold text-lg text-blue-950 hover:text-blue-600"><svg className="h-6 w-6 text-black" data-testid="MailOutlineIcon"><AccountCircleOutlinedIcon /></svg></Link> </li>
                </ul>
                </div>
        </nav>
    );
};

export default Main;