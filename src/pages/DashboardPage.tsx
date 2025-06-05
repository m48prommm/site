import React from 'react';
import { Users, ShoppingCart, CreditCard, TrendingUp } from 'lucide-react';
import { StatCard } from '../components/dashboard/StatCard';
import { ChartCard } from '../components/dashboard/ChartCard';
import { ActivityCard } from '../components/dashboard/ActivityCard';

export const DashboardPage: React.FC = () => {
  // Mock data for recent activities
  const recentActivities = [
    {
      id: '1',
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      action: 'updated the',
      target: 'Sales Report',
      time: '2 hours ago',
    },
    {
      id: '2',
      user: {
        name: 'Michael Chen',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      action: 'commented on',
      target: 'Project Alpha',
      time: '5 hours ago',
    },
    {
      id: '3',
      user: {
        name: 'Olivia Martinez',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      action: 'created a new',
      target: 'Task Assignment',
      time: 'Yesterday at 10:30 AM',
    },
    {
      id: '4',
      user: {
        name: 'Robert Kim',
        avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      action: 'completed',
      target: 'Quarterly Review',
      time: 'Yesterday at 2:15 PM',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          An overview of your business performance and activity
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="24,892"
          change={{ value: "12%", isPositive: true }}
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Orders"
          value="12,452"
          change={{ value: "8%", isPositive: true }}
          icon={ShoppingCart}
          color="green"
        />
        <StatCard
          title="Revenue"
          value="$45,623"
          change={{ value: "5%", isPositive: true }}
          icon={CreditCard}
          color="purple"
        />
        <StatCard
          title="Growth"
          value="23.5%"
          change={{ value: "2%", isPositive: false }}
          icon={TrendingUp}
          color="orange"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ChartCard title="Revenue Overview" subtitle="Monthly revenue performance">
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 dark:text-gray-400 text-center">
              [Chart visualization would appear here]
            </p>
          </div>
        </ChartCard>
        <ChartCard title="User Growth" subtitle="New users over time">
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 dark:text-gray-400 text-center">
              [Chart visualization would appear here]
            </p>
          </div>
        </ChartCard>
      </div>

      {/* Activity Feed */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartCard title="Sales Analytics" height="h-96">
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400 text-center">
                [Detailed analytics visualization would appear here]
              </p>
            </div>
          </ChartCard>
        </div>
        <div>
          <ActivityCard activities={recentActivities} />
        </div>
      </div>
    </div>
  );
};