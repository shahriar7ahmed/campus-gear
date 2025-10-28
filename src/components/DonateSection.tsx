import { motion } from "framer-motion";
import donateImage from "@/assets/donate-illustration.png";

const DonateSection = () => {
  return (
    <section id="donate" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-accent rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                Have an old laptop?<br />
                Give it a second life!
              </h2>
              <p className="text-lg text-accent-foreground/90 mb-6">
                We accept working laptops less than 5 years old with a charger.
                Don't worry about data—we professionally wipe every machine.
              </p>
              <div className="bg-accent-foreground/10 rounded-xl p-6">
                <p className="font-semibold text-accent-foreground mb-2">Drop-off:</p>
                <p className="text-accent-foreground/90">
                  <span className="font-medium">Student Union, Room 210</span><br />
                  Weekdays 10 AM – 4 PM
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <img
                src={donateImage}
                alt="Donate a Laptop"
                className="w-full max-w-sm rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateSection;
