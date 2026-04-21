"use client";

import { motion } from "framer-motion";
import { Heading, SectionWrapper, Card } from "@/components/ui";
import { ApplyForm } from "@/components/forms";

export default function ApplyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <SectionWrapper background="white">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Heading level={1} center className="mb-4">
            Apply for Admission
          </Heading>

          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Complete the form below to begin your application to GISD.
          </p>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8">
            <ApplyForm />
          </Card>
        </motion.div>
      </SectionWrapper>
    </motion.div>
  );
}
