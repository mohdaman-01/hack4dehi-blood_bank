import { Link, useLocation } from "react-router-dom";
import {
  Droplets,
  Droplet,
  Home,
  Map,
  Menu,
  X,
  Search,
  ChevronRight,
  FileText,
  BarChart3,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNavItems = () => {
    return [
      { path: "/", label: "Dashboard", icon: Home, color: "text-primary" },
      { path: "/map", label: "Hotspot Map", icon: Map, color: "text-info" },
      { path: "/reports", label: "Reports", icon: FileText, color: "text-success" },
      { path: "/analytics", label: "Analytics", icon: BarChart3, color: "text-warning" },
      { path: "/admin", label: "Admin Panel", icon: Shield, color: "text-destructive" },
    ];
  };

  const navItems = getNavItems();

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Modern Floating Sidebar - Desktop */}
      <aside className={`fixed left-4 top-4 bottom-4 z-40 hidden lg:flex flex-col bg-card/40 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl shadow-primary/5 transition-all duration-300 ${sidebarCollapsed ? 'w-20' : 'w-72'
        }`}>
        {/* Logo Section */}
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-info rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity animate-glow" />
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-info flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Droplet className="w-6 h-6 text-white animate-float" fill="currentColor" />
              </div>
            </div>
            {!sidebarCollapsed && (
              <div className="animate-fade-in">
                <h1 className="text-xl font-bold text-gradient">AquaWatch</h1>
                <p className="text-xs text-muted-foreground">Delhi Water-Logging</p>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${isActive
                    ? "bg-gradient-to-r from-primary to-info text-white shadow-lg shadow-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                style={{
                  animation: 'slide-in-left 0.3s ease-out forwards',
                  animationDelay: `${index * 50}ms`,
                  opacity: 0
                }}
              >
                {isActive && !sidebarCollapsed && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                )}
                <div className={`${sidebarCollapsed ? 'w-full flex justify-center' : ''}`}>
                  <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? "bg-white/20" : "bg-muted/50 group-hover:bg-muted"
                    }`}>
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : item.color}`} />
                  </div>
                </div>
                {!sidebarCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
                {isActive && !sidebarCollapsed && (
                  <ChevronRight className="w-4 h-4 ml-auto" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Collapse Toggle */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute -right-4 top-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-info hover:text-white hover:border-transparent transition-all duration-300 shadow-xl hover:scale-110 hover:shadow-primary/30"
        >
          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${sidebarCollapsed ? '' : 'rotate-180'}`} />
        </button>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-info flex items-center justify-center shadow-lg">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gradient">AquaWatch</span>
          </Link>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="lg:hidden fixed top-16 right-0 bottom-0 w-80 bg-card border-l border-border/50 z-50 overflow-y-auto animate-slide-in-right">
            <div className="p-6 space-y-6">
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${isActive
                          ? "bg-gradient-to-r from-primary to-info text-white shadow-lg"
                          : "text-muted-foreground hover:bg-muted/50"
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                      {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Main Content Area */}
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:pl-28' : 'lg:pl-80'}`}>
        {/* Floating Top Bar */}
        <div className="sticky top-4 z-30 hidden lg:block px-6 animate-fade-in">
          <div className="flex items-center justify-between h-16 px-6 rounded-3xl bg-card/40 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-primary/5">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-info/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="flex items-center gap-4 flex-1 max-w-2xl relative z-10">
              <div className="relative flex-1 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  placeholder="Search anything..."
                  className="pl-11 h-11 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:bg-white/80 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 rounded-lg bg-muted/50 text-xs text-muted-foreground font-medium">
                  ⌘K
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 relative z-10">
              {/* Notification Bell - Admin Only */}


              {/* User Avatar */}
              {/* User Avatar - Replaced with minimal guest view */}
              <div className="ml-2 flex items-center gap-2 px-3 py-2 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all cursor-pointer group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-info flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div className="hidden xl:block">
                  <p className="text-xs font-semibold text-foreground leading-none">
                    Guest User
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Public Access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="p-4 lg:p-8 pt-20 lg:pt-24 min-h-screen">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

      </div>

      {/* Modern Floating Footer */}
      <footer className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:pl-28' : 'lg:pl-80'}`}>
        <div className="mx-4 lg:mx-6 mb-4 rounded-3xl bg-card/40 backdrop-blur-2xl border border-white/20 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-info/20 flex items-center justify-center">
                  <Droplet className="w-4 h-4 text-primary" fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">LifeFlow</p>
                  <p className="text-xs text-muted-foreground">© 2025 All rights reserved</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-success/10 border border-success/20">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs font-medium text-success">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
