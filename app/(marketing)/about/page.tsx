"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heading, SectionWrapper, Card } from "@/components/ui";
import { Img1, Img2 } from "@/assets/images";
import { Users, BookOpen, Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <SectionWrapper background="white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heading level={1} className="mb-6">
              About GISD
            </Heading>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              GISD is where political ideas meet practical leadership.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Since 2017, we’ve focused on building people—not just programmes—
              equipping leaders with the mindset and skills to navigate
              governance and public service.
            </p>
          </motion.div>

          {/* IMAGE STACK (more dynamic) */}
          <motion.div
            className="relative h-[400px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={Img1}
                alt="GISD training"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[70%] h-[70%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src={Img2}
                alt="GISD session"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* STORY SECTION (IMAGE LEFT) */}
      <SectionWrapper background="gray">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            className="relative h-[350px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={Img1}
              alt="GISD history"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              GISD started as a party school, but quickly evolved into something
              more practical—focused on preparing people for real
              responsibility.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, it bridges the gap between political theory and how
              leadership actually works on the ground.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* GOVERNANCE (LESS TEXT, MORE VISUAL CARDS) */}
      <SectionWrapper background="white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heading level={2} className="mb-3">
              How It Works
            </Heading>
            <p className="text-gray-600">
              A simple structure that keeps everything moving.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Direction",
                desc: "Board of Directors",
                icon: Users,
              },
              {
                title: "Learning",
                desc: "Academic Council",
                icon: BookOpen,
              },
              {
                title: "Execution",
                desc: "Management Team",
                icon: Briefcase,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition">
                  <div className="w-14 h-14 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-red-700" />
                  </div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FINAL IMAGE STRIP (VISUAL ENDING) */}
      <SectionWrapper background="gray">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[250px] rounded-2xl overflow-hidden">
            <Image
              src={Img2}
              alt="GISD training"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              At its core, GISD is about preparing people to lead with clarity,
              responsibility, and purpose.
            </p>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
