import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import laptopImage from "@/assets/laptop-illustration.png";

const AvailableLaptops = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Laptop Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-12 shadow-lg flex items-center justify-center"
          >
            <img
              src={laptopImage}
              alt="Available Laptop"
              className="w-full max-w-md"
            />
          </motion.div>

          {/* Laptop Specs Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-card to-muted/50 rounded-3xl p-10 shadow-xl border-2 border-secondary/20"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-card-foreground mb-2">
                Our Standard Laptop:
              </h2>
              <ul className="space-y-3 text-lg text-card-foreground/80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  8GB RAM
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  256GB SSD
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Webcam
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Microsoft Office
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-7xl font-bold text-secondary">14</span>
                <div>
                  <span className="text-2xl font-semibold text-secondary">Laptops</span>
                  <p className="text-sm text-secondary font-medium">Currently Available</p>
                </div>
              </div>
              <div className="h-1 bg-secondary rounded-full w-32 mt-2"></div>
            </div>

            <Button
              size="lg"
              onClick={() => scrollToSection("request")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full w-full transition-transform hover:scale-105"
            >
              Request a Laptop
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AvailableLaptops;
