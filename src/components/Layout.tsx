import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Droplet, Hospital, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignInButton,useUser } from "@clerk/clerk-react";


interface NavItem {
  icon: React.ElementType;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Hospital, label: "Hospitals", path: "/hospitals" },
  { icon: Droplet, label: "Blood Banks", path: "/blood-banks" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const user =  useUser();
  
  useEffect(() => {
    const checkAuth = async () => {
      const publicRoutes = ['/login', '/register', '/'];
      const currentPath = window.location.pathname;
      
      // If user is signed in and on a public route, redirect to dashboard
      if (user.isSignedIn && publicRoutes.includes(currentPath)) {
        navigate('/dashboard');
      }
      
      // If user is not signed in and not on a public route, redirect to login
      if (!user.isSignedIn && !publicRoutes.includes(currentPath)) {
        navigate('/login');
      }
    };
    
    checkAuth();
  }, [user.isSignedIn, navigate]); // Add proper dependencies

      
  return (
    <div>
        <div className="min-h-screen bg-medical-light flex">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-4 left-4 z-50 md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Sidebar */}
          <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

          {/* Main content */}
          <div className="flex-1 ml-auto transition-all duration-300">
            {children}
          </div>

          {/* Overlay for mobile */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/20 z-30 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </div>
      

    </div>
  );
};

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}
const SideBar = ({isSidebarOpen,setIsSidebarOpen}: SidebarProps)=>{
  const navigate = useNavigate();
  const location = useLocation();
  if(location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/"){
    return null
  }
  return (
    <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out sm:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-medical-purple to-medical-blue bg-clip-text text-transparent mb-8">
            MedFind
          </h1>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setIsSidebarOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-all duration-200",
                    "hover:bg-medical-soft-gray group",
                    isActive ? "bg-medical-soft-gray text-medical-purple" : "text-medical-neutral-gray"
                  )}
                >
                  <Icon className={cn(
                    "w-5 h-5 transition-colors duration-200",
                    isActive ? "text-medical-purple" : "text-medical-neutral-gray",
                    "group-hover:text-medical-purple"
                  )} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
  )
}

export default Layout;