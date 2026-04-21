"use client";

import { motion } from "framer-motion";
import { Heading, SectionWrapper, Table } from "@/components/ui";
import { COURSE_CATEGORIES } from "@/utils/constants";

type Course = {
  category: string;
  code: string;
  title: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const tableRowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.3,
    },
  }),
};

export default function TrainingPage() {
  const allCourses: Course[] = [
    ...COURSE_CATEGORIES.foundational.courses.map((course) => ({
      category: "Foundational",
      code: course.code,
      title: course.title,
    })),
    ...COURSE_CATEGORIES.leadership.courses.map((course) => ({
      category: "Leadership",
      code: course.code,
      title: course.title,
    })),
    ...COURSE_CATEGORIES.diplomacy.courses.map((course) => ({
      category: "Diplomacy",
      code: course.code,
      title: course.title,
    })),
    ...COURSE_CATEGORIES.special.courses.map((course) => ({
      category: "Special",
      code: course.code,
      title: course.title,
    })),
  ];

  const tableData = allCourses.map((course) => [
    course.category,
    course.code,
    course.title,
  ]);

  const headers = ["Type", "Code", "Course"];

  const plpoTopics = [
    "Leadership & governance fundamentals",
    "Party organisation & structure",
    "Communication & political strategy",
    "Practical case-based learning",
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      {/* INTRO */}
      <SectionWrapper background="white">
        <motion.div
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <Heading level={1} className="mb-5">
            Training Programmes
          </Heading>

          <p className="text-gray-600 leading-relaxed">
            Our programmes are designed to build practical political knowledge
            and leadership capacity through structured, real-world learning.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* FEATURED PROGRAMME (PLPO) */}
      <SectionWrapper background="gray">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-start"
            variants={fadeInUp}
          >
            {/* TEXT */}
            <div>
              <motion.span
                className="inline-block text-xs uppercase tracking-wider text-red-700 font-semibold mb-3 bg-red-50 px-3 py-1 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                Flagship Programme
              </motion.span>

              <Heading level={2} className="mb-4">
                Political Leadership & Party Organisation
              </Heading>

              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  PLPO is designed for emerging leaders who want to understand
                  how political systems function beyond theory.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  It combines structured learning with practical insights into
                  governance, organisation, and leadership within a political
                  context.
                </p>
              </div>
            </div>

            {/* TOPICS LIST */}
            <motion.div
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                What you&apos;ll learn
              </h3>
              <ul className="space-y-3">
                {plpoTopics.map((topic, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <span className="text-red-600 mt-0.5">▹</span>
                    <span>{topic}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* COURSE TABLE */}
      <SectionWrapper background="white">
        <div className="max-w-6xl mx-auto">
          <motion.div className="mb-8" variants={fadeInUp}>
            <Heading level={3} className="mb-2">
              Course Catalogue
            </Heading>
            <p className="text-gray-600">
              A full overview of {allCourses.length} available courses across
              all programme areas.
            </p>
          </motion.div>

          {/* Table with row animations */}
          <motion.div
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            variants={fadeInUp}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {headers.map((header, idx) => (
                      <th
                        key={idx}
                        className="text-left px-6 py-4 text-sm font-semibold text-gray-900"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {allCourses.map((course, idx) => (
                    <motion.tr
                      key={`${course.code}-${idx}`}
                      custom={idx}
                      variants={tableRowVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-20px" }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-3 text-sm">
                        <span className="inline-block px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                          {course.category}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-sm font-mono text-gray-600">
                        {course.code}
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-800">
                        {course.title}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}
