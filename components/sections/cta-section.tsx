"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white">
      {/* Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Heading level={2} className="text-white mb-4">
            Take the next step in your political journey.
          </Heading>

          <p className="text-white/80 mb-8 text-lg">
            Build your knowledge. Strengthen your leadership. Serve with
            purpose.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              href="/apply"
              variant="secondary"
              size="lg"
              className="group"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
            </Button>

            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="bg-white/10  text-white backdrop-blur-sm border-white/10 hover:bg-white/20"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
