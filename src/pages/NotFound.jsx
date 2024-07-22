import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col bg-primary items-center justify-center h-screen">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <p className="text-gray-600 mb-6">{error.statusText || error.message}</p>
        <img src="/images/404.jpg" alt="404 Illustration" className="w-full mb-6" />
        <a href="/" className="text-blue-500 hover:underline">Go back to home</a>
      </div>
    </div>
  );
};

export default NotFound;
