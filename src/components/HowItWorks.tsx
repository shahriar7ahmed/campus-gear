import { motion } from "framer-motion";
import { ClipboardList, CheckCircle, Package, RotateCcw } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Request",
    description: "Fill out the form explaining your need",
  },
  {
    icon: CheckCircle,
    title: "Get Approved",
    description: "Our team reviews requests daily",
  },
  {
    icon: Package,
    title: "Pick Up",
    description: "Collect from Library Room 302",
  },
  {
    icon: RotateCcw,
    title: "Return",
    description: "1-week loan, return on time",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col items-center text-center">
                  <div className="bg-secondary/10 rounded-full p-6 mb-6">
                    <Icon className="w-12 h-12 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-muted">
                      <path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
