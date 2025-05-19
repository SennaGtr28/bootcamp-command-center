
import React from 'react';
import { FileText, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';

const NotesPage = () => {
  // Sample notes data
  const notes = [
    {
      id: 1,
      title: 'DevOps Introduction',
      content: 'DevOps is a set of practices that combines software development and IT operations...',
      tags: ['Fundamentals', 'Introduction'],
      createdAt: 'May 15, 2025',
      updatedAt: 'May 18, 2025'
    },
    {
      id: 2,
      title: 'CI/CD Best Practices',
      content: 'Continuous Integration and Continuous Deployment are essential practices in modern...',
      tags: ['CI/CD', 'GitLab'],
      createdAt: 'May 16, 2025',
      updatedAt: 'May 17, 2025'
    },
    {
      id: 3,
      title: 'Docker Container Basics',
      content: 'Containers allow developers to package applications with all needed dependencies...',
      tags: ['Docker', 'Containers'],
      createdAt: 'May 14, 2025',
      updatedAt: 'May 19, 2025'
    },
    {
      id: 4,
      title: 'Kubernetes Architecture',
      content: 'Kubernetes is a container orchestration platform that automates the deployment...',
      tags: ['Kubernetes', 'Orchestration'],
      createdAt: 'May 12, 2025',
      updatedAt: 'May 16, 2025'
    },
    {
      id: 5,
      title: 'Infrastructure as Code with Terraform',
      content: 'Terraform is an open-source infrastructure as code software tool that enables...',
      tags: ['IaC', 'Terraform'],
      createdAt: 'May 10, 2025',
      updatedAt: 'May 15, 2025'
    },
    {
      id: 6,
      title: 'Monitoring with Prometheus',
      content: 'Prometheus is an open-source monitoring and alerting toolkit designed especially...',
      tags: ['Monitoring', 'Prometheus'],
      createdAt: 'May 8, 2025',
      updatedAt: 'May 14, 2025'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Teaching Notes</h1>
        <p className="text-muted-foreground">
          Create and manage course materials and teaching notes.
        </p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search notes..."
            className="form-input pl-9 w-full"
          />
        </div>
        <button className="btn-primary">Create Note</button>
      </div>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <Card key={note.id} className="dashboard-card flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium">{note.title}</h3>
              <FileText className="h-5 w-5 text-muted-foreground" />
            </div>
            
            <p className="text-sm text-muted-foreground flex-1 mb-4 line-clamp-3">
              {note.content}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {note.tags.map((tag) => (
                <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between text-xs text-muted-foreground pt-3 border-t">
              <span>Updated: {note.updatedAt}</span>
              <div className="flex space-x-2">
                <button className="hover:text-primary">Edit</button>
                <button className="hover:text-destructive">Delete</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
