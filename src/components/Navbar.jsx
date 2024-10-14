import React from 'react';
import { Search } from 'lucide-react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const NavLink = ({ href, children }) => (
    <Link to={href} className="text-gray-600 hover:text-gray-900">{children}</Link>
);

export default function Navbar() {
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

                <Link to="/" className="flex items-center ">
                    
                    
                    <Logo />

                  
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <NavLink href="/">Home</NavLink>
                    <Dropdown title="Jobs" items={jobDropdownItems} />
                    <Dropdown title="Resume Review" items={resumeDropdownItems} />
                    <Dropdown title="Blogs" items={blogDropdownItems} />
                    <NavLink href="/aboutus">About Us</NavLink>
                </nav>

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
