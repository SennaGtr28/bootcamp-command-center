
// Mock user data - in a real app, this would be stored in a database
const users = [
  {
    id: '1',
    fullName: 'Admin User',
    email: 'admin@example.com',
    password: 'Password123!'
  }
];

export interface User {
  id: string;
  fullName: string;
  email: string;
}

export interface AuthUser extends User {
  password: string;
}

// Helper to generate a unique ID for new users
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Simulate async auth operations
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const auth = {
  currentUser: null as User | null,
  
  // Log in a user
  async login(email: string, password: string): Promise<User> {
    // Simulate network request
    await delay(800);
    
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    // Don't return the password to the client
    const { password: _, ...userWithoutPassword } = user;
    this.currentUser = userWithoutPassword;
    
    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    
    return userWithoutPassword;
  },
  
  // Sign up a new user
  async signup(fullName: string, email: string, password: string): Promise<User> {
    // Simulate network request
    await delay(800);
    
    // Check if user already exists
    if (users.some((u) => u.email === email)) {
      throw new Error('User with this email already exists');
    }
    
    // Create new user
    const newUser: AuthUser = {
      id: generateId(),
      fullName,
      email,
      password
    };
    
    // In a real app, we would add this to a database
    users.push(newUser);
    
    // Don't return the password to the client
    const { password: _, ...userWithoutPassword } = newUser;
    this.currentUser = userWithoutPassword;
    
    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    
    return userWithoutPassword;
  },
  
  // Logout a user
  async logout(): Promise<void> {
    await delay(300);
    this.currentUser = null;
    localStorage.removeItem('user');
  },
  
  // Check if user is logged in
  isAuthenticated(): boolean {
    return this.currentUser !== null;
  },
  
  // Load user from localStorage on app startup
  loadUser(): User | null {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUser = JSON.parse(user);
      return this.currentUser;
    }
    return null;
  }
};
