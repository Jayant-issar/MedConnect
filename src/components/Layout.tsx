import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Droplet, Hospital, Menu, HeartPulse, Ambulance, HeartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/clerk-react";

interface NavItem {
  icon: React.ElementType;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: Hospital, label: "Hospitals", path: "/hospitals" },
  { icon: Droplet, label: "Blood Banks", path: "/blood-banks" },
  { icon: HeartPulse, label: "Donation Drives", path: "/donation-drives" },
  { icon: Ambulance, label: "Seek Emergency", path: "/seek-emergency" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const user = useUser();
  const location = useLocation();
  
  const isLandingPage = location.pathname === "/";
  const isAuthPage = ['/login', '/register'].includes(location.pathname);
  const shouldShowSidebar = !isLandingPage && !isAuthPage;

  useEffect(() => {
    const checkAuth = async () => {
      const publicRoutes = ['/login', '/register', '/'];
      const currentPath = window.location.pathname;
      
      if (user.isSignedIn && publicRoutes.includes(currentPath)) {
        if (currentPath !== "/") {
          navigate('/dashboard');
        }
      }
      
      if (!user.isSignedIn && !publicRoutes.includes(currentPath)) {
        navigate('/login');
      }
    };
    
    checkAuth();
  }, [user.isSignedIn, navigate]);

  if (isLandingPage) {
    return <div className="min-h-screen bg-medical-light">{children}</div>;
  }
      
  return (
    <div className="min-h-screen bg-medical-light ">
      {shouldShowSidebar && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}

      <div className="flex h-full">
        {shouldShowSidebar && (
          <>
            <div 
              className={cn(
                "fixed md:relative",
                "inset-y-0 left-0",
                "w-64",
                "transform transition-transform duration-300 ease-in-out",
                "md:transform-none",
                "z-40",
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
              )}
            >
              <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            </div>

            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black/20 z-30 md:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}
          </>
        )}

        <main className={cn(
          "flex-1 w-full",
          
          "p-4"
        )}>
          {children}
        </main>
      </div>
    </div>
  );
};

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-white via-indigo-50 to-indigo-100 shadow-lg transform transition-transform duration-300 ease-in-out sm:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="py-8 px-2 flex flex-col items-center">
        <a href="/" className="flex items-center justify-center gap-2 mb-8">
          <HeartIcon className="w-8 h-8 text-medical-red mx-auto" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-medical-purple to-medical-blue bg-clip-text text-transparent">
            MedConnect
          </h1>
        </a>
        
        <nav className="space-y-2 w-full flex flex-col items-center justify-center">
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
          <div className="w-full border-t-2 border-neutral-200"></div>
          <div className={cn(
            "w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-all duration-200",
            "hover:bg-medical-soft-gray group mt-12",
          )}>
            <UserButton showName /> 
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Layout;