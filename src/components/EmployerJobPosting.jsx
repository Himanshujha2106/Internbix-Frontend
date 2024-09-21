import React, { useState } from 'react';
import { Save, ArrowLeft, Briefcase, MapPin, DollarSign, Clock, Calendar } from 'lucide-react';

const Logo = () => (
  <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InputField = ({ label, id, type = "text", placeholder, value, onChange, icon: Icon }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type={type}
        id={id}
        className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

const TextAreaField = ({ label, id, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      id={id}
      rows="4"
      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  </div>
);

export default function EmployerJobPosting() {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    jobType: '',
    startDate: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setJobData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Job Data Submitted:', jobData);
    // You could also add validation here before submitting
  };

  return (
    <div className="min-h-screen bg-gray-50">
      

      <main className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Post a New Job</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          <InputField
            label="Job Title"
            id="title"
            placeholder="e.g. Senior Software Engineer"
            value={jobData.title}
            onChange={handleInputChange}
            icon={Briefcase}
          />
          <InputField
            label="Company Name"
            id="company"
            placeholder="Your Company Name"
            value={jobData.company}
            onChange={handleInputChange}
            icon={Briefcase}
          />
          <InputField
            label="Location"
            id="location"
            placeholder="e.g. New York, NY or Remote"
            value={jobData.location}
            onChange={handleInputChange}
            icon={MapPin}
          />
          <InputField
            label="Salary Range"
            id="salary"
            placeholder="e.g. $80,000 - $120,000"
            value={jobData.salary}
            onChange={handleInputChange}
            icon={DollarSign}
          />
          <InputField
            label="Job Type"
            id="jobType"
            placeholder="e.g. Full-time, Part-time, Contract"
            value={jobData.jobType}
            onChange={handleInputChange}
            icon={Clock}
          />
          <InputField
            label="Start Date"
            id="startDate"
            type="date"
            value={jobData.startDate}
            onChange={handleInputChange}
            icon={Calendar}
          />
          <TextAreaField
            label="Job Description"
            id="description"
            placeholder="Describe the job responsibilities, requirements, and any other relevant details..."
            value={jobData.description}
            onChange={handleInputChange}
          />
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <Save className="h-5 w-5 mr-2" />
              Post Job
            </button>
          </div>
        </form>
      </main>

      
    </div>
  );
}