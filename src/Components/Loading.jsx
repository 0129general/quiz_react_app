import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="animate-spin">
        <div className="w-16 h-16 rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-lg font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
