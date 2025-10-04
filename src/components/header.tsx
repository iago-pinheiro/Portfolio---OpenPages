import { BookOpen, Home, User, LogOut, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface User {
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  user?: User | null;
  onLogout?: () => void;
}

export function Header({ currentPage = "home", onNavigate, user, onLogout }: HeaderProps) {
  const getNavItems = () => {
    if (!user) return [];
    
    const baseItems = [
      { id: "home", label: "Home", icon: Home }
    ];

    if (user.role === 'admin') {
      baseItems.push({ id: "admin", label: "Administração", icon: Settings });
    }

    return baseItems;
  };

  const navItems = getNavItems();

  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6" style={{ color: 'var(--primary-color)' }} />
          <h1 className="text-xl font-medium" style={{ color: 'var(--title-color)' }}>
            OpenPages
          </h1>
        </div>

        {/* Navigation */}
        {user && (
          <nav className="flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={() => onNavigate?.(item.id)}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
            
            {/* User Info and Logout */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-500" />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium" style={{ color: 'var(--title-color)' }}>
                    {user.name}
                  </span>
                  <Badge 
                    variant={user.role === 'admin' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {user.role === 'admin' ? 'Administrador' : 'Usuário'}
                  </Badge>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={onLogout}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}