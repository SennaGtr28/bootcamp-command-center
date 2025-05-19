
import React from 'react';
import { CalendarDays } from 'lucide-react';
import { Card } from '@/components/ui/card';

const SessionsPage = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  
  // Sample sessions data
  const sessions = [
    {
      id: 1,
      title: 'DevOps Introduction',
      date: 'May 20, 2025',
      time: '10:00 AM - 12:00 PM',
      instructor: 'Dr. Emily Johnson',
      attendees: 28,
      topic: 'Fundamentals'
    },
    {
      id: 2,
      title: 'CI/CD Pipeline Setup',
      date: 'May 21, 2025',
      time: '2:00 PM - 4:00 PM',
      instructor: 'Michael Chang',
      attendees: 25,
      topic: 'CI/CD'
    },
    {
      id: 3,
      title: 'Docker & Containerization',
      date: 'May 22, 2025',
      time: '10:00 AM - 12:30 PM',
      instructor: 'Aisha Patel',
      attendees: 30,
      topic: 'Containers'
    },
    {
      id: 4,
      title: 'Kubernetes Basics',
      date: 'May 24, 2025',
      time: '1:00 PM - 3:30 PM',
      instructor: 'James Wilson',
      attendees: 26,
      topic: 'Orchestration'
    },
    {
      id: 5,
      title: 'Infrastructure as Code',
      date: 'May 26, 2025',
      time: '11:00 AM - 1:00 PM',
      instructor: 'Dr. Emily Johnson',
      attendees: 24,
      topic: 'IaC'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Sessions Management</h1>
        <p className="text-muted-foreground">
          Schedule and manage your bootcamp training sessions.
        </p>
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="dashboard-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Upcoming Sessions</h3>
              <button className="btn-primary text-sm py-1 px-3">Create Session</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="py-3 px-4 text-left font-medium">Session</th>
                    <th className="py-3 px-4 text-left font-medium">Date & Time</th>
                    <th className="py-3 px-4 text-left font-medium">Instructor</th>
                    <th className="py-3 px-4 text-left font-medium">Topic</th>
                    <th className="py-3 px-4 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.map((session) => (
                    <tr key={session.id} className="border-b hover:bg-muted/30">
                      <td className="py-3 px-4 font-medium">{session.title}</td>
                      <td className="py-3 px-4">
                        <div>{session.date}</div>
                        <div className="text-sm text-muted-foreground">{session.time}</div>
                      </td>
                      <td className="py-3 px-4">{session.instructor}</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2 py-1 rounded-md text-xs bg-secondary">
                          {session.topic}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="text-sm hover:text-primary">Edit</button>
                          <button className="text-sm hover:text-destructive">Cancel</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        
        <div>
          <Card className="dashboard-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium flex items-center">
                <CalendarDays className="mr-2 h-5 w-5" />
                <span>{currentMonth} {new Date().getFullYear()}</span>
              </h3>
              <div className="flex">
                <button className="p-1 hover:bg-secondary rounded-md">←</button>
                <button className="p-1 hover:bg-secondary rounded-md">→</button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-xs font-medium py-2">{day}</div>
              ))}
              
              {Array.from({ length: 35 }, (_, i) => {
                const day = i + 1 - 0; // Adjust the offset based on the month start
                const isCurrentDay = day === currentDay;
                const hasSession = [20, 21, 22, 24, 26].includes(day);
                
                return (
                  <div
                    key={i}
                    className={`
                      aspect-square flex items-center justify-center rounded-md text-sm
                      ${day > 0 && day <= 31 ? '' : 'invisible'}
                      ${isCurrentDay ? 'bg-primary text-primary-foreground' : ''}
                      ${hasSession && !isCurrentDay ? 'bg-accent text-accent-foreground' : ''}
                      ${!isCurrentDay && !hasSession ? 'hover:bg-secondary' : ''}
                    `}
                  >
                    {day > 0 && day <= 31 ? day : ''}
                  </div>
                );
              })}
            </div>
            
            <div className="mt-4 space-y-3">
              <h4 className="font-medium text-sm">Today's Sessions</h4>
              
              {currentDay === 20 || currentDay === 21 || currentDay === 22 || currentDay === 24 || currentDay === 26 ? (
                <div className="p-3 rounded-md bg-secondary/50">
                  <h5 className="font-medium">
                    {sessions.find(s => s.date.includes(String(currentDay)))?.title || 'No sessions today'}
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    {sessions.find(s => s.date.includes(String(currentDay)))?.time || ''}
                  </p>
                </div>
              ) : (
                <div className="p-3 rounded-md bg-secondary/50">
                  <p className="text-sm text-muted-foreground">No sessions scheduled for today</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SessionsPage;
