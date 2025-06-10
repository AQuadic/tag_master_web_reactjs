"use client";
import CartIcon from "@/components/icons/general/CartIcon";
import { navbarLinks } from "@/constants/navbarLinks";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ChangeLanguage from "./ChangeLanguage";
import Searchbar from "./Searchbar";
import SignInButton from "./SignInButton";

const Header = () => {
  const pathname = usePathname();
  const isSignedIn = true;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white"
        }`}
      >
        <div className="container py-4 flex items-center justify-between">
          {/* Logo - Left on desktop, center on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0 lg:order-3"
          >
            <Link href="/" className="block">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={155}
                height={55}
                className="w-auto h-10 md:h-12 lg:h-14"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Center */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center gap-8 lg:order-2"
          >
            {navbarLinks.map((link, index) => {
              const isActive = pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className={`relative py-2 px-1 transition-all duration-300 group ${
                      isActive
                        ? "font-semibold text-main-blue"
                        : "text-gray-700 hover:text-main-blue"
                    }`}
                  >
                    {link.titleAr}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-main-blue"
                      animate={{ width: isActive ? "100%" : "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Desktop Actions - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:flex items-center gap-4 lg:order-1"
          >
            {isSignedIn && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/cart"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <CartIcon />
                </Link>
              </motion.div>
            )}
            <div className="flex items-center gap-3">
              <SignInButton />
              <div className="w-px h-6 bg-gray-300" />
              <Searchbar />
              <div className="w-px h-6 bg-gray-300" />
              <ChangeLanguage />
            </div>
          </motion.div>

          {/* Mobile Search/Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="search"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <Searchbar />
                </motion.div>
              ) : (
                <motion.button
                  key="menu-button"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-main-blue/20"
                  aria-label="Toggle menu"
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className="w-6 h-0.5 bg-gray-700 block mb-1.5" />
                    <span className="w-6 h-0.5 bg-gray-700 block mb-1.5" />
                    <span className="w-6 h-0.5 bg-gray-700 block" />
                  </div>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed  inset-0 bg-black/50 z-10 lg:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-20 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={120}
                    height={40}
                    className="w-auto h-8"
                  />
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="space-y-2 mb-8"
                >
                  {navbarLinks.map((link, index) => {
                    const isActive = pathname === link.path;
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <Link
                          href={link.path}
                          className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                            isActive
                              ? "bg-main-blue text-white font-semibold"
                              : "text-gray-700 hover:bg-gray-50 hover:text-main-blue"
                          }`}
                        >
                          {link.titleAr}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Mobile Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="space-y-4 pt-6 border-t border-gray-200"
                >
                  {isSignedIn && (
                    <Link
                      href="/cart"
                      className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <CartIcon />
                      <span className="text-gray-700">السلة</span>
                    </Link>
                  )}

                  <div className="flex items-center gap-4 px-4">
                    <SignInButton />
                    <ChangeLanguage />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content overlap */}
      <div className="h-20 md:h-24" />
    </>
  );
};

export default Header;
