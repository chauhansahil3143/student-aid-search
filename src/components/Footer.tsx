import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-navy-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary shadow-gold">
              <MapPin className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-white">
              BVM<span className="text-gold">Find</span>
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-gray-400 font-body">
            © {new Date().getFullYear()} BVM CampusFind. Birla Vishvakarma Mahavidyalaya.
          </p>
        </div>
      </div>
    </footer>
  );
}
