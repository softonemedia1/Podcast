"use client";

import React from "react";
import Link from "next/link";
import { navItems } from "@/data/header/header";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="w-full shadow-md fixed top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center w-32 h-auto">
          <img
            src="/logo.png"
            alt="Softone Media"
            className="object-contain h-10 md:h-12"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-red-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="m:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-red-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
