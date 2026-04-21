"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Img4 } from "@/assets/images";
import { Heading } from "../ui/heading";
import { Card } from "../ui/card";
import { Calendar, Users, Mic, MapPin } from "lucide-react";

const programmes = [
  {
    icon: Calendar,
    title: "Short Courses",
    description: "Weekend-based structured learning",
  },
  {
    icon: Users,
    title: "Workshops",
    description: "Interactive sessions with experts",
  },
  {
    icon: Mic,
    title: "Conferences",
    description: "High-level political discussions",
  },
  {
    icon: MapPin,
    title: "Town Halls",
    description: "Grassroots engagement forums",
  },
];

export const Programmes = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-red-700 font-medium uppercase tracking-wider">
            Learning Opportunities
          </span>
          <Heading level={2} className="mt-2 mb-4">
            Our Programmes
          </Heading>
          <p className="text-gray-600 max-w-xl mx-auto">
            Flexible formats designed to fit different levels of experience and
            availability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* IMAGE - now with h-full to match cards height */}
          <motion.div
            className="relative h-full min-h-[480px] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={Img4}
              alt="GISD programmes"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* CARDS - now using grid that stretches to full height */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6 auto-rows-fr"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {programmes.map((programme, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <Card className="p-6 h-full transition-all duration-300 hover:shadow-xl flex flex-col">
                  <motion.div
                    className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <programme.icon className="w-5 h-5 text-red-700" />
                  </motion.div>

                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {programme.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {programme.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
