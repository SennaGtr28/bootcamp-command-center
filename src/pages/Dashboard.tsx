
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Users, CalendarDays, FileText, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Dashboard = () => {
  const { user } = useAuth();
  
  // Sample data for dashboard stats
  const stats = [
    {
      title: 'Total Students',
      value: '128',
      icon: Users,
      color: 'bg-blue-500',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Active Sessions',
      value: '24',
      icon: CalendarDays,
      color: 'bg-green-500',
      change: '+5%',
      changeType: 'positive'
    },
    {
      title: 'Teaching Notes',
      value: '96',
      icon: FileText,
      color: 'bg-purple-500',
      change: '+8%',
      changeType: 'positive'
    },
    {
      title: 'Student Feedback',
      value: '64',
      icon: MessageSquare,
      color: 'bg-amber-500',
      change: '-3%',
      changeType: 'negative'
    },
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Welcome back, {user?.fullName}</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your bootcamp today.
        </p>
      </div>
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="dashboard-card">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <span className={`text-xs ${
                  stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change} from last month
                </span>
              </div>
              <div className={`p-2 rounded-md ${stat.color} text-white`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <Card className="dashboard-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Upcoming Sessions</h3>
            <button className="text-sm text-primary">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center p-3 rounded-md bg-secondary/50">
                <div className="mr-4 text-center">
                  <span className="text-sm font-bold">May</span>
                  <span className="block text-xl font-bold">{20 + i}</span>
                </div>
                <div>
                  <h4 className="font-medium">DevOps Fundamentals {i}</h4>
                  <p className="text-sm text-muted-foreground">10:00 AM - 12:00 PM</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="dashboard-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Recent Feedback</h3>
            <button className="text-sm text-primary">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 rounded-md bg-secondary/50">
                <div className="flex justify-between">
                  <h4 className="font-medium">Student {i}</h4>
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <span key={idx} className={`text-${idx < 5 - i + 1 ? 'amber' : 'gray'}-400`}>
                          ★
                        </span>
                      ))}
                  </div>
                </div>
                <p className="text-sm mt-1">
                  {[
                    "Great session, learned a lot about containers!",
                    "The CI/CD examples were very practical and helpful.",
                    "Would love more hands-on exercises in the next session."
                  ][i - 1]}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
