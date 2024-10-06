import React, { useState } from 'react';
import { ArrowRight, Briefcase, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';




const Button = ({ onClick, children, primary }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-200 ${primary
        ? 'bg-primary text-white hover:bg-primary-dark'
        : 'bg-white text-primary border-2 border-primary hover:bg-gray-100'
      }`}
  >
    {children}
  </button>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
    <div className="p-3 bg-primary-light rounded-full mb-4">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function LandingPage() {
  const navigate = useNavigate();
  const handleRoleSelect = (role) => {
    // Here you would typically redirect to a different page or show different content
    // if (role === "employer")
    //   navigate('/homeemployer')
    // else {

      navigate("/login")
    
    console.log(`Selected role: ${role}`);
  };

  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connect with Your Dream Job or Ideal Candidate
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Whether you're looking for your next career move or searching for top talent,
              we've got you covered. Choose your path and let's get started!
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Button onClick={() => handleRoleSelect('employer')} primary>
                I'm an Employer <Briefcase className="inline-block ml-2" />
              </Button>
              <Button onClick={() => handleRoleSelect('employee')}>
                I'm Job Seeking <Users className="inline-block ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Internbix?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Users}
                title="Large Talent Pool"
                description="Access a diverse range of candidates or job opportunities tailored to your needs."
              />
              <FeatureCard
                icon={Briefcase}
                title="Easy Application"
                description="Streamlined process for both employers posting jobs and candidates applying."
              />
              <FeatureCard
                icon={ArrowRight}
                title="Smart Matching"
                description="Our AI-powered algorithm ensures the best fit for both employers and job seekers."
              />
            </div>
          </div>
        </section>
      </main>


    </div>
  );
}