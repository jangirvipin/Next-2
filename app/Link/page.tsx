// LinkedInLink.js
import React from 'react';

export default function LinkedInLink() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-md text-center">
        <div className="mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className="w-16 h-16 mx-auto"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Connect with me on LinkedIn
        </h1>
        <p className="text-gray-600 mb-6">
          I'm always open to connecting with new people. Let's stay in touch!
        </p>
        <a
          href="https://www.linkedin.com/in/vipin-jangir-7b2a58285"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300"
        >
          linkedin.com/in/your-profile
        </a>
      </div>
    </div>
  );
}
