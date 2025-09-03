import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">Minimal Library</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" asChild><a href="/books">All Books</a></Button>
            <Button variant="ghost" asChild><a href="/create-book">Add Book</a></Button>
            <Button variant="ghost" asChild><a href="/borrow-summary">Borrow Summary</a></Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-200 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 px-2 pt-2 pb-3 space-y-1">
          <a href="/books" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-800">All Books</a>
          <a href="/create-book" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-800">Add Book</a>
          <a href="/borrow-summary" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-800">Borrow Summary</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
