import React from 'react';
import { AlertTriangle } from 'lucide-react';



const ErrorDisplay = ({ message }) => {
  return (
    <div className="flex items-center justify-center p-6 bg-red-50 rounded-lg border border-red-200 text-red-700 mt-4">
      <AlertTriangle className="mr-2" size={20} />
      <p>{message}</p>
    </div>
  );
};

export default ErrorDisplay;