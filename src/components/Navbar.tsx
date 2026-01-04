import { Link, useLocation } from "react-router-dom";
import { Search, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Browse Items" },
    { href: "/report", label: "Report Item" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-navy-dark/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary shadow-gold">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-white">
              BVM<span className="text-gold">Find</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium font-body ${
                    isActive(link.href)
                      ? "bg-gold/10 text-gold"
                      : "text-gray-300 hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link to="/report">
              <Button className="gradient-primary shadow-button text-primary-foreground hover:opacity-90 transition-opacity font-body font-semibold">
                <Search className="mr-2 h-4 w-4" />
                Report Item
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gold/20 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start font-body ${
                      isActive(link.href)
                        ? "bg-gold/10 text-gold"
                        : "text-gray-300 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Link to="/report" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full gradient-primary shadow-button text-primary-foreground font-body font-semibold">
                  <Search className="mr-2 h-4 w-4" />
                  Report Item
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
