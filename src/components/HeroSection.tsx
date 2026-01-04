import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-navy">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-navy-light/50 px-4 py-1.5 backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-gold font-body">BVM Engineering Campus</span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Lost something on{" "}
            <span className="text-gold-gradient">campus?</span>
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-gray-300 md:text-xl font-body">
            BVM CampusFind helps college students reconnect with their lost belongings.
            Report lost items or help others find theirs — building a helpful campus community together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/report?type=lost">
              <Button
                size="lg"
                className="gradient-primary min-w-[180px] text-primary-foreground shadow-button hover:opacity-90 transition-opacity font-body font-semibold"
              >
                <Search className="mr-2 h-5 w-5" />
                Report Lost Item
              </Button>
            </Link>
            <Link to="/report?type=found">
              <Button
                size="lg"
                variant="outline"
                className="min-w-[180px] border-gold/40 text-gold bg-transparent hover:bg-gold/10 hover:text-gold font-body font-semibold"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Report Found Item
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
