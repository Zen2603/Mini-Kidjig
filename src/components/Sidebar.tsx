"use client";
// components/Sidebar.tsx
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Layers,
  Bot,
  Key,
  Play,
  BarChart2,
  BookOpen,
  HelpCircle,
  Tag,
  ChevronLeft,
  ChevronRight,
  User,
  Menu,
  X,
} from "lucide-react";

interface NavItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  badge?: string;
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Store collapse state in localStorage
  useEffect(() => {
    const storedState = localStorage.getItem("sidebarCollapsed");
    if (storedState) {
      setIsCollapsed(storedState === "true");
    }

    // Check if mobile view on initial load
    checkMobileView();
  }, []);

  // Function to check if we're in mobile view
  const checkMobileView = () => {
    setIsMobileView(window.innerWidth < 768);
    // Auto-collapse sidebar on mobile
    if (window.innerWidth < 768) {
      setIsCollapsed(true);
    }
  };

  // Update document body with a class to adjust main content
  useEffect(() => {
    document.body.dataset.sidebarState =
      isCollapsed && !isHovering ? "collapsed" : "expanded";
    if (isMobileView) {
      document.body.dataset.mobileView = "true";
    } else {
      delete document.body.dataset.mobileView;
    }

    // Clean up on unmount
    return () => {
      delete document.body.dataset.sidebarState;
      delete document.body.dataset.mobileView;
    };
  }, [isCollapsed, isHovering, isMobileView]);

  // Listen for window resize
  useEffect(() => {
    const handleResize = () => {
      checkMobileView();
    };

    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle clicks outside mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem("sidebarCollapsed", String(newState));
  };

  // Handle hover events
  const handleMouseEnter = () => {
    if (isCollapsed && !isMobileView) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (isCollapsed) {
      setIsHovering(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems: NavItem[] = [
    { title: "Getting Started", icon: <Home size={20} />, href: "/" },
    { title: "Models", icon: <Layers size={20} />, href: "/models" },
    { title: "Agents", icon: <Bot size={20} />, href: "/agents", badge: "New" },
    { title: "API Keys", icon: <Key size={20} />, href: "/api-keys" },
    { title: "Playground", icon: <Play size={20} />, href: "/playground" },
    { title: "Analytics", icon: <BarChart2 size={20} />, href: "/analytics" },
    { title: "Docs", icon: <BookOpen size={20} />, href: "/docs" },
    { title: "Support", icon: <HelpCircle size={20} />, href: "/support" },
    { title: "Pricing", icon: <Tag size={20} />, href: "/pricing" },
  ];

  // Mobile navbar component
  const MobileNavbar = () => (
    <div className="fixed top-0 left-0 w-full bg-gray-900 flex justify-between items-center px-4 py-3 z-30 shadow-md">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center flex-shrink-0">
          <span className="text-lg font-bold">K</span>
        </div>
        <span className="text-xl font-bold text-white">Kidjig</span>
      </div>
      <button
        onClick={toggleMobileMenu}
        className="text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
      >
        <Menu size={24} />
      </button>
    </div>
  );

  // Mobile menu drawer
  const MobileMenu = () => (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
      className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-40 shadow-lg p-4"
      ref={sidebarRef}
    >
      <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
            <span className="text-lg font-bold">K</span>
          </div>
          <span className="text-xl font-bold">Kidjig</span>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="text-white p-1 rounded-md hover:bg-gray-800 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="mb-6">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                onClick={() => {
                  setActiveItem(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center px-3 py-3 rounded-md transition-all hover:bg-gray-800 group ${
                  activeItem === item.href ? "bg-purple-950" : ""
                }`}
              >
                <div className="text-gray-400 group-hover:text-purple-400 transition-colors">
                  {item.icon}
                </div>
                <div className="ml-3 flex-1 flex items-center justify-between">
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="bg-purple-600 text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-gray-800 pt-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <User size={16} />
          </div>
          <div>
            <p className="text-sm font-medium">Guest</p>
            <p className="text-xs text-gray-400">Not signed in</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Desktop sidebar width logic
  const sidebarWidth = () => {
    if (isMobileView) return 0;
    if (isCollapsed && !isHovering) return 64;
    return 256;
  };

  // Backdrop for mobile menu
  const Backdrop = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black z-30"
      onClick={() => setIsMobileMenuOpen(false)}
    />
  );

  return (
    <>
      {/* Mobile Navbar */}
      {isMobileView && <MobileNavbar />}

      {/* Mobile Menu with Backdrop */}
      <AnimatePresence>
        {isMobileView && isMobileMenuOpen && <Backdrop />}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileView && isMobileMenuOpen && <MobileMenu />}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      {!isMobileView && (
        <motion.div
          className="fixed top-0 left-0 h-screen bg-gray-900 text-white flex flex-col z-20 shadow-xl"
          initial={{ width: sidebarWidth() }}
          animate={{ width: sidebarWidth() }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Logo Section */}
          <div className="relative flex items-center p-4 border-b border-gray-800">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold">K</span>
              </div>
              <AnimatePresence mode="wait">
                {(!isCollapsed || isHovering) && (
                  <motion.span
                    key="logo-text"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl font-bold truncate"
                  >
                    Kidjig
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <motion.button
              onClick={toggleCollapse}
              className="absolute -right-4 top-4 bg-gray-800 rounded-full p-1.5 hover:bg-gray-700 transition-colors shadow-md z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isCollapsed && !isHovering ? (
                <ChevronRight size={16} />
              ) : (
                <ChevronLeft size={16} />
              )}
            </motion.button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-2">
            <nav>
              <ul className="space-y-1 px-2">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      onClick={() => setActiveItem(item.href)}
                      className={`flex items-center px-3 py-3 rounded-md transition-all hover:bg-gray-800 group relative ${
                        activeItem === item.href ? "bg-purple-950" : ""
                      }`}
                    >
                      <motion.div
                        className="text-gray-400 group-hover:text-purple-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.icon}
                      </motion.div>

                      <AnimatePresence mode="wait">
                        {(!isCollapsed || isHovering) && (
                          <motion.div
                            key={`nav-text-${item.title}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ delay: 0.1 }}
                            className="ml-3 flex-1 flex items-center justify-between"
                          >
                            <span>{item.title}</span>
                            {item.badge && (
                              <span className="bg-purple-600 text-xs px-2 py-1 rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {isCollapsed && !isHovering && item.badge && (
                        <motion.span
                          className="absolute right-1 top-1 h-2 w-2 bg-purple-600 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring" }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* User Section */}
          <div className="p-3 border-t border-gray-800">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <User size={16} />
              </motion.div>
              <AnimatePresence mode="wait">
                {(!isCollapsed || isHovering) && (
                  <motion.div
                    key="user-info"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: 0.1 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm font-medium">Guest</p>
                    <p className="text-xs text-gray-400">Not signed in</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}

      {/* Spacer div that takes the same width as the sidebar */}
      <div
        className={`flex-shrink-0 transition-all duration-300 ${
          isMobileView
            ? "w-0 mt-14"
            : isCollapsed && !isHovering
            ? "w-16"
            : "w-64"
        }`}
      ></div>
    </>
  );
};

export default Sidebar;
