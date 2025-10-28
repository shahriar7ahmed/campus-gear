import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const RequestForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    email: "",
    majorYear: "",
    reason: "",
    duration: "",
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreed) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Request Submitted!",
      description: "We'll review your request and contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      fullName: "",
      studentId: "",
      email: "",
      majorYear: "",
      reason: "",
      duration: "",
      agreed: false,
    });
  };

  return (
    <section id="request" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-secondary/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-8 text-center">
            Request a Laptop Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="border-2 focus:border-secondary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">University Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-2 focus:border-secondary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID Number</Label>
                <Input
                  id="studentId"
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  required
                  className="border-2 focus:border-secondary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="majorYear">Major / Year</Label>
                <Input
                  id="majorYear"
                  value={formData.majorYear}
                  onChange={(e) => setFormData({ ...formData, majorYear: e.target.value })}
                  required
                  className="border-2 focus:border-secondary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Why do you need this laptop?</Label>
              <Textarea
                id="reason"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                required
                rows={4}
                className="border-2 focus:border-secondary resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">How long do you need it for?</Label>
              <Select
                value={formData.duration}
                onValueChange={(value) => setFormData({ ...formData, duration: value })}
                required
              >
                <SelectTrigger className="border-2 focus:border-secondary">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3days">3 Days</SelectItem>
                  <SelectItem value="1week">1 Week</SelectItem>
                  <SelectItem value="2weeks">2 Weeks - Special Case</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-start space-x-3 pt-4">
              <Checkbox
                id="terms"
                checked={formData.agreed}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, agreed: checked as boolean })
                }
              />
              <label
                htmlFor="terms"
                className="text-sm text-card-foreground/80 leading-relaxed cursor-pointer"
              >
                I agree to the terms and conditions and will return the laptop on time.
              </label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg rounded-full transition-transform hover:scale-105"
            >
              Submit Request
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RequestForm;
