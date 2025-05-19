
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, CalendarDays, FileText, MessageSquare, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const isMobile = useIsMobile();
  
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/dashboard/students', label: 'Students', icon: Users },
    { path: '/dashboard/sessions', label: 'Sessions', icon: CalendarDays },
    { path: '/dashboard/notes', label: 'Notes', icon: FileText },
    { path: '/dashboard/feedback', label: 'Feedback', icon: MessageSquare },
  ];
  
  return (
    <aside
      className={cn(
        'bg-card z-40 h-full w-64 flex-shrink-0 flex-col border-r shadow-sm transition-all duration-300 ease-in-out',
        isOpen ? 'flex fixed md:static' : 'hidden md:flex'
      )}
    >
      {isMobile && isOpen && (
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 rounded-sm opacity-70 hover:opacity-100 md:hidden"
        >
          <X size={18} />
        </button>
      )}
      
      <div className="flex items-center h-16 px-6 border-b">
        <h1 className="text-xl font-bold">OPQAdmin</h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-6 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn('sidebar-item', isActive && 'active')
                }
                end={item.path === '/dashboard'}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <div className="py-2 px-3 rounded-md bg-secondary/50 text-center text-sm">
          <span className="block font-medium">OPQ DevOps Bootcamp</span>
          <span className="text-xs text-muted-foreground">Admin Console v1.0</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
