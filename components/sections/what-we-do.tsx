"use client";

import { motion } from "framer-motion";
import { Heading, Card } from "../ui";
import {
  Users,
  BookOpen,
  TrendingUp,
  FileText,
  Search,
  Award,
} from "lucide-react";

const activities = [
  {
    icon: Users,
    title: "Training Members",
    description: "Train members, officers, and appointees of the NDC",
  },
  {
    icon: BookOpen,
    title: "Promoting Social Democracy",
    description: "Strengthening understanding of social democratic ideology",
  },
  {
    icon: TrendingUp,
    title: "Leadership Development",
    description: "Build leadership and organisational capacity",
  },
  {
    icon: FileText,
    title: "Policy Support",
    description: "Support party policy development and manifesto preparation",
  },
  {
    icon: Search,
    title: "Research",
    description: "Conduct research to inform advocacy and governance",
  },
];

export const WhatWeDo = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="max-w-2xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-red-700 font-medium uppercase tracking-wider">
            Our Mission
          </span>
          <Heading level={2} className="mt-2 mb-4">
            What We Do
          </Heading>
          <p className="text-gray-600">
            We focus on building capable leaders through practical training,
            research, and structured political education.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition bg-white">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
