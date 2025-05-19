
import React from 'react';
import { Card } from '@/components/ui/card';

const StudentsPage = () => {
  // Sample student data
  const students = [
    { id: 1, name: 'John Smith', email: 'john@example.com', progress: 78, status: 'Active' },
    { id: 2, name: 'Emily Johnson', email: 'emily@example.com', progress: 92, status: 'Active' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', progress: 45, status: 'Inactive' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', progress: 85, status: 'Active' },
    { id: 5, name: 'David Lee', email: 'david@example.com', progress: 62, status: 'Active' },
    { id: 6, name: 'Jessica Chen', email: 'jessica@example.com', progress: 30, status: 'Inactive' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Students Management</h1>
        <p className="text-muted-foreground">
          View and manage all students enrolled in your bootcamp.
        </p>
      </div>
      
      <Card className="dashboard-card overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Students List</h3>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search students..."
              className="form-input text-sm py-1 px-3"
            />
            <button className="btn-primary text-sm py-1 px-3">Add Student</button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="py-3 px-4 text-left font-medium">Name</th>
                <th className="py-3 px-4 text-left font-medium">Email</th>
                <th className="py-3 px-4 text-left font-medium">Progress</th>
                <th className="py-3 px-4 text-left font-medium">Status</th>
                <th className="py-3 px-4 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b hover:bg-muted/30">
                  <td className="py-3 px-4">{student.name}</td>
                  <td className="py-3 px-4">{student.email}</td>
                  <td className="py-3 px-4">
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs">{student.progress}%</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      student.status === 'Active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-sm hover:text-primary">View</button>
                      <button className="text-sm hover:text-primary">Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="py-4 flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-medium">1-6</span> of <span className="font-medium">128</span> students
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 rounded-md hover:bg-secondary">Previous</button>
            <button className="px-3 py-1 rounded-md bg-primary text-primary-foreground">1</button>
            <button className="px-3 py-1 rounded-md hover:bg-secondary">2</button>
            <button className="px-3 py-1 rounded-md hover:bg-secondary">3</button>
            <button className="px-3 py-1 rounded-md hover:bg-secondary">Next</button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StudentsPage;
