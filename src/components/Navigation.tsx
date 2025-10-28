import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-primary-foreground">
              University Laptop Bank
            </h1>
            <span className="text-secondary text-sm">💻</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("request")}
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              Request
            </button>
            <button
              onClick={() => scrollToSection("donate")}
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              Donate
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-left text-lg hover:text-secondary transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("request")}
                  className="text-left text-lg hover:text-secondary transition-colors"
                >
                  Request
                </button>
                <button
                  onClick={() => scrollToSection("donate")}
                  className="text-left text-lg hover:text-secondary transition-colors"
                >
                  Donate
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-lg hover:text-secondary transition-colors"
                >
                  Contact
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
