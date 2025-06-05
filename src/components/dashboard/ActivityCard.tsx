import React from 'react';

type Activity = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  target: string;
  time: string;
};

type ActivityCardProps = {
  activities: Activity[];
};

export const ActivityCard: React.FC<ActivityCardProps> = ({ activities }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg transition-all duration-300 hover:shadow-md">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Recent Activity</h3>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {activities.map((activity) => (
            <li key={activity.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src={activity.user.avatar} alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    <span className="font-semibold">{activity.user.name}</span> {activity.action}{' '}
                    <span className="font-semibold">{activity.target}</span>
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{activity.time}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-4 sm:px-6">
        <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
          View all activity
        </button>
      </div>
    </div>
  );
};