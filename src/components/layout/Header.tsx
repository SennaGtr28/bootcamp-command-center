
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, LogOut, Menu, Moon, Settings, Sun, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };
  
  return (
    <header className="h-16 bg-card flex items-center justify-between px-4 border-b">
      <div className="flex items-center">
        <button
          className="p-2 rounded-md hover:bg-secondary md:mr-2"
          onClick={toggleSidebar}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-md hover:bg-secondary">
          <Bell className="h-5 w-5" />
        </button>
        
        <button
          className="p-2 rounded-md hover:bg-secondary"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
        
        <Popover open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
          <PopoverTrigger asChild>
            <button className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <User className="h-5 w-5" />
              </div>
              <span className="hidden md:inline-block font-medium">
                {user?.fullName}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-0">
            <div className="p-3 border-b">
              <p className="font-medium">{user?.fullName}</p>
              <p className="text-sm text-muted-foreground truncate">{user?.email}</p>
            </div>
            <div className="p-1">
              <button
                className="w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-secondary"
                onClick={() => {
                  setIsUserMenuOpen(false);
                  navigate('/dashboard/settings');
                }}
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </button>
              <button
                className="w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-secondary text-destructive"
                onClick={() => {
                  setIsUserMenuOpen(false);
                  handleLogout();
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
