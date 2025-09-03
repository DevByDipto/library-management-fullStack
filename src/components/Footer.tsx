const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 p-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">

        {/* Logo / Branding */}
        <div className="flex flex-col">
          <span className="text-xl font-bold mb-2">Minimal Library</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Your personal space to manage and explore books efficiently.
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
          <a href="/books" className="hover:underline">All Books</a>
          <a href="/create-book" className="hover:underline">Add Book</a>
          <a href="/borrow-summary" className="hover:underline">Borrow Summary</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <span>Email: support@minimallibrary.com</span>
          <span>Phone: +880 1234 567890</span>
          <span>Address: 123 Library Street, Dhaka, Bangladesh</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 Minimal Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
