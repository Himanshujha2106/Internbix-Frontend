import React, { useState } from 'react';
import { Search, Linkedin } from 'lucide-react';




const JobCard = ({ title, company, location }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
    <p className="text-gray-600">{company}</p>
    <p className="text-gray-500 mb-4">{location}</p>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors duration-300">
      Apply Now
    </button>
  </div>
);


export default function Home() {
  const [jobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'Tech Co', location: 'Remote' },
    { id: 2, title: 'Backend Engineer', company: 'Data Systems', location: 'New York' },
    { id: 3, title: 'UX Designer', company: 'Creative Agency', location: 'San Francisco' },
  ]);
  
  

  return (
    <>

      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Header */}
        

        {/* Body */}
        <main className="flex-grow container mx-auto px-4 py-8 flex">
          <div className="w-full md:w-3/4 pr-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Latest Job Listings</h1>
            <div className="space-y-6">
              {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </div>
          <aside className="hidden md:block w-1/4 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/resume-builder" className="text-blue-600 hover:underline">Resume Builder</a></li>
              <li><a href="/career-advice" className="text-blue-600 hover:underline">Career Advice</a></li>
              <li><a href="/salary-calculator" className="text-blue-600 hover:underline">Salary Calculator</a></li>
              <li><a href="/interview-tips" className="text-blue-600 hover:underline">Interview Tips</a></li>
            </ul>
          </aside>
        </main>

        {/* Footer */}
        
      </div>
    </>
  )
}

