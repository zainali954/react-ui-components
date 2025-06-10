import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { formatTitleFromPath } from "../utils/formatTitle";
import {
  ArrowLeft02Icon,
  Moon02Icon,
  Sun02Icon,
  Menu01Icon,
  Cancel01Icon,
} from "hugeicons-react";
import useDarkMode from "../hooks/useDarkMode";

const components = [
  { name: "Selectlist", path: "/components/selectlist" },
  { name: "Combobox", path: "/components/combobox" },
  { name: "MultiSelect Combobox", path: "/components/multi-select-combobox" },
  { name: "Debounced Search", path: "/components/debounced-search" },
  { name: "Debounced Search with Tanstack Query", path: "/components/debounced-search-with-tanstack-query" },
  { name: "Infinite Scroll", path: "/components/infinite-scroll" },
  { name: "Button", path: "/components/button" },
  { name: "Dialog", path: "/components/dialog" },
  { name: "Toast", path: "/components/toast" },
];

const Layout = () => {
  const location = useLocation();
  const pageTitle = formatTitleFromPath(location.pathname);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100">
      {/* Sidebar */}
      <aside
        className={`fixed z-40 md:static top-0 left-0 h-full w-64 bg-neutral-50 dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 p-4 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-6 md:block">
          <span className="text-xl font-bold text-neutral-800 dark:text-white">
            react-ui-components
          </span>
          <button
            className="md:hidden p-1 text-neutral-600 dark:text-neutral-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <Cancel01Icon size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {components.map((comp) => (
            <NavLink
              key={comp.path}
              to={comp.path}
              title={comp.name}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `w-full px-4 py-2 text-left rounded-lg text-sm font-medium transition truncate ${
                  isActive
                    ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                    : "text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white"
                }`
              }
            >
              {comp.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto relative">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            {/* Mobile menu icon */}
            <button
              className="md:hidden p-2 text-neutral-600 dark:text-neutral-300"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu01Icon size={20} />
            </button>

            {/* Back + Breadcrumb */}
            <button className="hover:text-neutral-900 dark:hover:text-neutral-100" onClick={() => navigate(-1)}>

            <ArrowLeft02Icon size={18} className="hidden sm:block" />
            </button>
            <span className="text-sm">
              <Link to="/" className="text-neutral-400">
                Home
              </Link>
              {pageTitle && " / "}
              <span className="text-neutral-900 font-medium dark:text-neutral-100">
                {pageTitle}
              </span>
            </span>
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 border border-neutral-300 dark:border-neutral-700 rounded-lg text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            {isDarkMode ? <Sun02Icon size={18} /> : <Moon02Icon size={18} />}
          </button>
        </div>

        {/* Routed Component */}
        <div className="text-sm text-neutral-700 dark:text-neutral-300">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
