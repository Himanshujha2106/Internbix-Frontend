import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Dropdown from './Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const NavLink = ({ href, children }) => (
    <Link to={href} className="text-gray-700 hover:text-gray-900 font-semibold focus:outline-none">{children}</Link>
);

export default function Navbar() {
    const [isLoggedin, setIsLoggedin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLoggedin(true);
        }
    }, []);

    const handleLogout = () => {
        // Clear the token from localStorage
        localStorage.removeItem('token');
        setIsLoggedin(false);

        // Redirect to login or home
        navigate('/login');
    };

    const blogDropdownItems = [
        { label: 'Interview Q/A', href: '/about/our-story' },
        { label: 'Blogs', href: '/about/team' },
        { label: 'Experience', href: '/about/careers' },
    ];

    const resumeDropdownItems = [
        { label: 'Sample Resume', href: '/services/web-development' },
        { label: 'Submit Resume', href: '/services/app-development' },
        { label: 'Resume Review', href: '/services/seo' },
    ];

    const jobDropdownItems = [
        { label: 'Data Analyst', href: '/services/web-development' },
        { label: 'SDE', href: '/services/app-development' },
        { label: 'Data Scientist', href: '/services/seo' },
        { label: 'HR', href: '/services/seo' },
    ];

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <Logo />
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <NavLink href="/">Home</NavLink>
                    <Dropdown title="Jobs" items={jobDropdownItems} />
                    <Dropdown title="Resume Review" items={resumeDropdownItems} />
                    <Dropdown title="Blogs" items={blogDropdownItems} />
                    <NavLink  href="/aboutus">About Us</NavLink>
                    <Link to="/homeemployer" className="hidden md:flex space-x-6 text-gray-700 hover:text-gray-900 font-semibold focus:outline-none">
                        Jobpost
                    </Link>
                </nav>

                {isLoggedin && (
                    <button
                        onClick={handleLogout}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                    >
                        Logout
                    </button>
                )}
                <form onSubmit={(e) => e.preventDefault()} className="relative">
                    <input
                        type="text"
                        placeholder="Search jobs..."
                        className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <Search className="h-5 w-5 text-gray-400" />
                    </button>
                </form>
            </div>
        </header>
    );
}
