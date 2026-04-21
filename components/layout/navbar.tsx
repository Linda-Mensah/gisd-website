"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { GisdLogo } from "@/assets/images";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Training", href: "/training" },
  { label: "Research", href: "/research" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/40 backdrop-blur-xl border-b border-white/20 shadow-sm"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={GisdLogo}
              alt="GISD Logo"
              width={40}
              height={40}
              className="rounded-sm"
              priority
            />

            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-semibold text-gray-900">GISD</span>
              <span className="text-xs text-gray-600">
                Ghana Institute of Social Democracy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm transition-all duration-300 ${
                    active
                      ? "text-red-700 font-bold"
                      : "text-gray-700 hover:text-red-700"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                      active
                        ? "w-full bg-red-700"
                        : "w-0 bg-red-700 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://elearning.gisd.edu.gh/"
              target="_blank"
              className="cursor-pointer"
            >
              <Button
                variant="primary"
                size="sm"
                className="bg-red-700 text-white cursor-pointer hover:bg-red-800"
              >
                E-Learning
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-2 py-2 rounded-md text-sm transition-all duration-300 ${
                    active
                      ? "text-red-700 bg-red-50 font-medium"
                      : "text-gray-700 hover:text-red-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-3">
              <a
                href="https://elearning.gisd.edu.gh/"
                target="_blank"
                className="cursor-pointer"
              >
                <Button
                  variant="primary"
                  fullWidth
                  className="bg-red-700 cursor-pointer text-white hover:bg-red-800"
                >
                  E-Learning
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
