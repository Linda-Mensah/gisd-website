"use client";

import { useState } from "react";
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
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
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
              <span className="text-xs text-gray-500">
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
                  className={`relative text-sm transition-colors ${
                    active
                      ? "text-red-700 font-medium"
                      : "text-gray-600 hover:text-red-700"
                  }`}
                >
                  {item.label}

                  {/* active indicator */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] transition-all ${
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
            <Button href="/apply" variant="primary" size="sm">
              Apply Now
            </Button>
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
                  className={`block px-2 py-2 rounded-md text-sm ${
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
              <Button href="/apply" variant="primary" fullWidth>
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
