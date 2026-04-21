"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import { HeroImg } from "@/assets/images";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={HeroImg}
          alt="GISD Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/85 via-red-900/85 to-red-800/80" />
      </motion.div>

      {/* Content with staggered animations */}
      <div className="relative z-10 container-custom text-white py-24">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              Empowering Ghana&apos;s Democratic Future
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Heading level={1} className="text-white mb-6 leading-tight">
              Do you believe in equality and social justice?
            </Heading>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed max-w-2xl mx-auto"
          >
            Join our online or in-person training courses tailored to help you
            succeed in your political career.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="/apply" variant="secondary" size="lg">
                Apply Now
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                href="/training"
                variant="outline"
                size="lg"
                className="bg-white/10  text-white backdrop-blur-sm border-white/10 hover:bg-white/20"
              >
                Explore Courses
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
