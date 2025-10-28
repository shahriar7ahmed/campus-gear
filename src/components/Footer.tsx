const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">University Laptop Bank</h3>
            <p className="text-primary-foreground/80">
              Making technology accessible for every student
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="hover:text-secondary transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("request")}
              className="hover:text-secondary transition-colors"
            >
              Request
            </button>
            <button
              onClick={() => scrollToSection("donate")}
              className="hover:text-secondary transition-colors"
            >
              Donate
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-secondary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="text-center space-y-2 text-primary-foreground/80 border-t border-primary-foreground/20 pt-8">
            <p>
              <strong>Contact:</strong> laptopbank@university.edu
            </p>
            <p>
              <strong>Office Location:</strong> Library, Room 302
            </p>
            <p className="text-sm pt-4">
              © 2025 University Laptop Bank. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
