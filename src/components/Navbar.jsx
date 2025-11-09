import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-1 backdrop-blur supports-[backdrop-filter]:bg-white/10"
      >
        {[
          { href: '#home', label: 'Home' },
          { href: '#skills', label: 'Skills' },
          { href: '#projects', label: 'Projects' },
          { href: '#about', label: 'About' },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            {link.label}
          </a>
        ))}
      </motion.nav>
    </div>
  );
};

export default Navbar;
