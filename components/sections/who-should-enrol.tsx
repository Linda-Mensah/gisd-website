"use client";

import { motion } from "framer-motion";
import { Heading } from "../ui/heading";
import {
  Users,
  Briefcase,
  GraduationCap,
  Mic2,
  Mail,
  Star,
} from "lucide-react";

const audiences = [
  { title: "Party Executives & Officers", icon: Users },
  { title: "Political Appointees", icon: Briefcase },
  { title: "Parliamentarians & Aspirants", icon: Mic2 },
  { title: "TEIN & Youth Groups", icon: GraduationCap },
  { title: "Communication Teams", icon: Mail },
  { title: "Political Activists", icon: Star },
];

export const WhoShouldEnrol = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="max-w-2xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-red-700 font-medium uppercase tracking-wider">
            Target Audience
          </span>
          <Heading level={2} className="mt-2 mb-4">
            Who Should Enrol
          </Heading>
          <p className="text-gray-600">
            Designed for individuals across different levels of political and
            civic leadership.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {audiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white p-6 rounded-xl text-center hover:shadow-md transition">
                <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-gray-700" />
                </div>
                <p className="text-sm font-medium text-gray-800">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
