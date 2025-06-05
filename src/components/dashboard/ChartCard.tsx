import React from 'react';
import { MoreHorizontal } from 'lucide-react';

type ChartCardProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  height?: string;
};

export const ChartCard: React.FC<ChartCardProps> = ({ 
  title, 
  subtitle, 
  children, 
  height = 'h-72' 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow transition-all duration-300 hover:shadow-md">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{title}</h3>
          {subtitle && (
            <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
          )}
        </div>
        <button className="p-2 text-gray-400 rounded-full hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <MoreHorizontal size={20} />
        </button>
      </div>
      <div className={`px-4 pb-5 ${height}`}>
        {children}
      </div>
    </div>
  );
};