"use client";

import { motion } from "framer-motion";
import { Heading, SectionWrapper } from "@/components/ui";
import { COURSE_CATEGORIES } from "@/utils/constants";

type Course = {
  category: string;
  code: string;
  title: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TrainingPage() {
  const allCourses: Course[] = [
    ...COURSE_CATEGORIES.foundational.courses.map((c) => ({
      category: "Foundational",
      code: c.code,
      title: c.title,
    })),
    ...COURSE_CATEGORIES.leadership.courses.map((c) => ({
      category: "Leadership",
      code: c.code,
      title: c.title,
    })),
    ...COURSE_CATEGORIES.diplomacy.courses.map((c) => ({
      category: "Diplomacy",
      code: c.code,
      title: c.title,
    })),
    ...COURSE_CATEGORIES.special.courses.map((c) => ({
      category: "Special",
      code: c.code,
      title: c.title,
    })),
  ];

  const plpoTopics = [
    "Leadership & governance fundamentals",
    "Party organisation & structure",
    "Communication & political strategy",
    "Practical case-based learning",
  ];

  return (
    <div className="bg-white">
      {/* HERO INTRO */}
      <SectionWrapper background="white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Heading level={1} className="mb-6">
            Training Programmes
          </Heading>

          <p className="text-gray-600 leading-relaxed text-lg">
            Training is the core function of GISD. The institute offers
            structured programmes designed to equip participants with practical
            political, organisational, and leadership skills. Trainings are
            delivered both in-person and online.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* PLPO FEATURE SECTION (MAJOR VISUAL EMPHASIS) */}
      <SectionWrapper background="gray">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 items-start">
          {/* LEFT TEXT (dominant) */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-xs uppercase tracking-widest text-red-700 font-semibold">
              Flagship Programme
            </span>

            <h2 className="text-3xl font-semibold mt-3 mb-5 leading-tight">
              Political Leadership and Party Organization Programme (PLPO)
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A structured programme focused on leadership, ideology, party
                organisation, and activism. This is the recommended programme
                for aspiring party officers.
              </p>

              <p className="text-gray-600">
                It is a well designed curriculum comprising relevant courses to
                equip party officers for effective delivery.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-500 italic">
                Apply to join an in-person class or start learning online at
                your own pace. Certificates will be awarded after completion.
              </p>
            </div>
          </motion.div>

          {/* RIGHT PANEL (visual structure instead of text block) */}
          <motion.div
            className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Core Learning Areas
            </h3>

            <div className="space-y-3">
              {plpoTopics.map((t, i) => (
                <motion.div
                  key={i}
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-red-700 mt-0.5">▸</span>
                  <span className="text-sm text-gray-700">{t}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* COURSE TABLE (NOW FEELS LIKE DATA, NOT CONTENT) */}
      <SectionWrapper background="white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Heading level={3} className="mb-2">
              Course Catalogue
            </Heading>
            <p className="text-gray-600">
              Full breakdown of structured training modules across all
              programmes.
            </p>
          </motion.div>

          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold">
                    Type
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">
                    Code
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">
                    Course
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {allCourses.map((c, i) => (
                  <motion.tr
                    key={c.code}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.01 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-3">
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                        {c.category}
                      </span>
                    </td>
                    <td className="px-6 py-3 font-mono text-sm text-gray-600">
                      {c.code}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-800">
                      {c.title}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
