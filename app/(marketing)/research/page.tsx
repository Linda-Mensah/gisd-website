"use client";

import { motion } from "framer-motion";
import { Heading, SectionWrapper, Card } from "@/components/ui";
import { FileText, BookOpen, Newspaper, BarChart } from "lucide-react";

const researchOutputs = [
  {
    icon: FileText,
    title: "Policy Briefs",
    description: "Concise policy recommendations on key national issues",
    items: ["Economic Transformation", "Education Reform", "Healthcare Access"],
  },
  {
    icon: BookOpen,
    title: "Discussion Papers",
    description: "In-depth analysis of social democratic principles",
    items: [
      "Social Justice in Ghana",
      "Democratic Socialism",
      "Welfare State Models",
    ],
  },
  {
    icon: Newspaper,
    title: "Working Papers",
    description: "Ongoing research and preliminary findings",
    items: [
      "Youth Political Participation",
      "Local Governance",
      "Digital Democracy",
    ],
  },
  {
    icon: BarChart,
    title: "Annual Reports",
    description: "Comprehensive yearly research summaries",
    items: [
      "2023 Research Report",
      "2022 Impact Assessment",
      "2021 Policy Review",
    ],
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* HEADER */}
      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto text-center">
          <Heading level={1} className="mb-4">
            Research & Advocacy
          </Heading>
          <p className="text-gray-600 leading-relaxed">
            GISD conducts rigorous research to inform policy-making and advance
            social democratic thinking across Ghana and Africa.
          </p>
        </div>
      </SectionWrapper>

      {/* CONTENT */}
      <SectionWrapper background="gray">
        <div className="max-w-5xl mx-auto space-y-6">
          {researchOutputs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-red-700" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>

                    <p className="text-gray-600 mb-3">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.items.map((i, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                        >
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
