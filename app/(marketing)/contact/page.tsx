"use client";

import { motion } from "framer-motion";
import { Heading, SectionWrapper, Card, Button } from "@/components/ui";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Facebook, Twitter, Linkedin } from "@/components/icons";

type ContactInfo = {
  icon: React.ElementType;
  title: string;
  text: string;
};

const contactInfo: ContactInfo[] = [
  { icon: MapPin, title: "Address", text: "Accra, Ghana" },
  { icon: Phone, title: "Phone", text: "+233 (0) 30 123 4567" },
  { icon: Mail, title: "Email", text: "info@gisd.edu.gh" },
  { icon: Clock, title: "Hours", text: "Mon - Fri: 8AM - 5PM" },
];

const socialIcons = [Facebook, Twitter, Linkedin];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      {/* HEADER */}
      <SectionWrapper background="white">
        <motion.div
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <Heading level={1} className="mb-4">
            Contact Us
          </Heading>
          <p className="text-gray-600">
            Reach out for admissions, partnerships, or general enquiries.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* CONTENT */}
      <SectionWrapper background="gray">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* INFO */}
          <motion.div variants={fadeInUp}>
            <Card className="p-8 space-y-6 h-full">
              <h3 className="text-2xl font-semibold">Get in touch</h3>

              {contactInfo.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-3"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* SOCIAL */}
              <motion.div
                className="pt-4 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm font-medium mb-3 text-gray-900">Follow</p>
                <div className="flex gap-4">
                  {socialIcons.map((Icon, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="w-5 h-5 text-gray-500 hover:text-red-700 transition-colors cursor-pointer" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Card>
          </motion.div>

          {/* FORM */}
          <motion.div variants={fadeInUp}>
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

              <form className="space-y-4">
                {["Name", "Email", "Subject"].map((label, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <label className="text-sm font-medium text-gray-700">
                      {label}
                    </label>
                    <input
                      className="w-full mt-1.5 border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder={`Enter your ${label.toLowerCase()}`}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    className="w-full mt-1.5 border border-gray-300 rounded-lg px-4 py-2.5 h-32 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-2.5">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}
