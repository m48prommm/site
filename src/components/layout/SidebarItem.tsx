import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full transition-all duration-200 ${
        isActive
          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
      }`}
      onClick={onClick}
    >
      <Icon
        className={`mr-3 flex-shrink-0 h-5 w-5 ${
          isActive
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'
        }`}
      />
      {label}
    </button>
  );
};