import React, { useState } from 'react';
import { Home, BarChart2, Users, Settings, HelpCircle, LogOut } from 'lucide-react';
import { SidebarItem } from './SidebarItem';

export const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'analytics', icon: BarChart2, label: 'Analytics' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'settings', icon: Settings, label: 'Settings' },
    { id: 'help', icon: HelpCircle, label: 'Help' },
  ];

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="flex items-center justify-center flex-shrink-0 px-4 mb-5">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard<span className="text-blue-500">Pro</span></h1>
          </div>
          <div className="flex flex-col flex-grow mt-5">
            <nav className="flex-1 px-2 space-y-1 bg-white dark:bg-gray-800 transition-colors duration-300">
              {menuItems.map((item) => (
                <SidebarItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  isActive={activeItem === item.id}
                  onClick={() => setActiveItem(item.id)}
                />
              ))}
            </nav>
          </div>
          <div className="px-2 mt-6">
            <SidebarItem
              icon={LogOut}
              label="Logout"
              isActive={false}
              onClick={() => console.log('Logout clicked')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};