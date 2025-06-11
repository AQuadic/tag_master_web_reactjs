"use client";
import CartIcon from "@/components/icons/general/CartIcon";
import { navbarLinks } from "@/constants/navbarLinks";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`max-md:py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100/50"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo - Left on desktop, center on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0 lg:order-3"
          >
            <Link href="/" className="block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={155}
                  height={55}
                  className="w-auto h-10 md:h-12 lg:h-14"
                  priority
                />
              </motion.div>
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
                    className={`relative py-3 px-4 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? "font-semibold text-main-blue bg-main-blue/5"
                        : "text-gray-700 hover:text-main-blue hover:bg-gray-50"
                    }`}
                  >
                    {link.titleAr}
                    <motion.div
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-main-blue to-blue-600 rounded-full"
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
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
                  className="p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 relative group"
                >
                  <CartIcon />
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-main-blue/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            )}
            <div className="flex items-center gap-4">
              <div className="flex gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SignInButton />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Searchbar />
                </motion.div>
              </div>
              <div className="h-6 w-px bg-gray-200" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ChangeLanguage />
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Search/Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Searchbar />
            </motion.div>

            <motion.button
              onClick={toggleMobileMenu}
              className="p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-main-blue/20"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.23, 1, 0.32, 1],
                opacity: { duration: 0.3 },
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden overflow-y-auto border-l border-gray-100"
            >
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Image
                      src="/images/logo.png"
                      alt="logo"
                      width={120}
                      height={40}
                      className="w-auto h-8"
                    />
                  </motion.div>
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
                          className={`block py-4 px-5 rounded-xl transition-all duration-300 relative group ${
                            isActive
                              ? "bg-gradient-to-r from-main-blue to-blue-600 text-white font-semibold shadow-lg"
                              : "text-gray-700 hover:bg-gray-50 hover:text-main-blue"
                          }`}
                        >
                          <motion.div
                            className="relative z-10"
                            whileHover={{ x: 5 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
                            {link.titleAr}
                          </motion.div>
                          {!isActive && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-main-blue/5 to-blue-600/5 rounded-xl"
                              initial={{ scale: 0, opacity: 0 }}
                              whileHover={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
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
                  className="space-y-3 pt-6 border-t border-gray-100"
                >
                  {isSignedIn && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/cart"
                        className="flex items-center gap-4 py-4 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group w-full"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-main-blue/10 group-hover:bg-main-blue/20 transition-colors flex-shrink-0">
                          <CartIcon />
                        </div>
                        <span className="text-gray-700 font-medium flex-1 text-right">
                          السلة
                        </span>
                      </Link>
                    </motion.div>
                  )}

                  <div className="space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    >
                      <div className="py-2 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200">
                        <SignInButton />
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    >
                      <div className="py-2 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200">
                        <ChangeLanguage />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Header;
