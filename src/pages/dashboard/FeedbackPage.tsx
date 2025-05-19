
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';

const FeedbackPage = () => {
  // Sample feedback data
  const feedbacks = [
    {
      id: 1,
      student: 'John Smith',
      content: 'The DevOps introduction session was very informative. I particularly liked the hands-on demonstration of CI/CD pipelines.',
      session: 'DevOps Introduction',
      rating: 5,
      date: 'May 20, 2025'
    },
    {
      id: 2,
      student: 'Emily Johnson',
      content: 'Great explanation of Docker concepts. The session could have been better with more practical examples.',
      session: 'Docker & Containerization',
      rating: 4,
      date: 'May 22, 2025'
    },
    {
      id: 3,
      student: 'Michael Brown',
      content: 'I found the Kubernetes session to be too advanced for beginners. Would appreciate more foundational content.',
      session: 'Kubernetes Basics',
      rating: 3,
      date: 'May 24, 2025'
    },
    {
      id: 4,
      student: 'Sarah Wilson',
      content: 'The instructor explained CI/CD concepts very clearly. Looking forward to implementing what I learned!',
      session: 'CI/CD Pipeline Setup',
      rating: 5,
      date: 'May 21, 2025'
    },
    {
      id: 5,
      student: 'David Lee',
      content: 'Very practical session on Infrastructure as Code. The Terraform examples were particularly helpful.',
      session: 'Infrastructure as Code',
      rating: 5,
      date: 'May 26, 2025'
    },
    {
      id: 6,
      student: 'Jessica Chen',
      content: 'Would have preferred more time for Q&A during the Docker session. Otherwise, the content was great.',
      session: 'Docker & Containerization',
      rating: 4,
      date: 'May 22, 2025'
    },
  ];

  // Calculate statistics
  const averageRating = (feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0) / feedbacks.length).toFixed(1);
  const fiveStarCount = feedbacks.filter(f => f.rating === 5).length;
  const fiveStarPercentage = ((fiveStarCount / feedbacks.length) * 100).toFixed(0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Student Feedback</h1>
        <p className="text-muted-foreground">
          View and analyze feedback from bootcamp participants.
        </p>
      </div>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Card className="dashboard-card">
          <h3 className="text-lg font-medium mb-2">Average Rating</h3>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold">{averageRating}</span>
            <div className="mb-1 text-amber-400">
              {'★'.repeat(Math.round(Number(averageRating)))}
              {'☆'.repeat(5 - Math.round(Number(averageRating)))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Based on {feedbacks.length} feedback responses</p>
        </Card>
        
        <Card className="dashboard-card">
          <h3 className="text-lg font-medium mb-2">5-Star Ratings</h3>
          <div className="text-4xl font-bold">{fiveStarPercentage}%</div>
          <div className="w-full bg-secondary rounded-full h-2.5 mt-2">
            <div
              className="bg-amber-400 h-2.5 rounded-full"
              style={{ width: `${fiveStarPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{fiveStarCount} out of {feedbacks.length} were 5-star ratings</p>
        </Card>
        
        <Card className="dashboard-card">
          <h3 className="text-lg font-medium mb-2">Total Feedback</h3>
          <div className="flex items-center">
            <MessageSquare className="h-10 w-10 mr-3 text-primary" />
            <span className="text-4xl font-bold">{feedbacks.length}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Across {new Set(feedbacks.map(f => f.session)).size} different sessions
          </p>
        </Card>
      </div>
      
      <Card className="dashboard-card">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Recent Feedback</h3>
          <div className="flex space-x-2">
            <select className="form-input text-sm py-1">
              <option>All Sessions</option>
              <option>DevOps Introduction</option>
              <option>CI/CD Pipeline Setup</option>
              <option>Docker & Containerization</option>
              <option>Kubernetes Basics</option>
              <option>Infrastructure as Code</option>
            </select>
            <button className="btn-secondary text-sm py-1">Export</button>
          </div>
        </div>
        
        <div className="space-y-4">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="p-4 rounded-md bg-secondary/50">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-medium">{feedback.student}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feedback.session} • {feedback.date}
                  </p>
                </div>
                <div className="flex text-amber-400">
                  {'★'.repeat(feedback.rating)}
                  {'☆'.repeat(5 - feedback.rating)}
                </div>
              </div>
              <p className="mt-2">{feedback.content}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default FeedbackPage;
