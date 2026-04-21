"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heading, SectionWrapper } from "@/components/ui";
import { Img1, Img2, Img3 } from "@/assets/images";
import {
  Building2,
  UsersRound,
  Award,
  BookOpen,
  GraduationCap,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* HERO STORY (less structured, more narrative) */}
      <SectionWrapper background="white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heading level={1} className="mb-6">
              About GISD
            </Heading>

            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              The Ghana Institute of Social Democracy exists to shape political
              thinking through structured education rooted in social democracy.
            </p>

            <p className="text-gray-600 leading-relaxed border-l-2 border-red-700 pl-4">
              Formally launched in 2017 at the NDC Headquarters in Accra, GISD
              builds on the party’s ideological commitment to equity,
              solidarity, and social justice.
            </p>
          </motion.div>

          {/* Asymmetrical image stack (less “grid UI”) */}
          <motion.div
            className="md:col-span-5 relative h-[420px]"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-2xl overflow-hidden shadow-lg">
              <Image src={Img1} alt="GISD" fill className="object-cover" />
            </div>

            <div className="absolute bottom-0 right-0 w-[75%] h-[75%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
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

      {/* GOVERNANCE (split narrative instead of equal cards) */}
      <SectionWrapper background="gray">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Heading level={2} className="mb-3">
              Governance & Leadership
            </Heading>
            <p className="text-gray-600 max-w-2xl">
              GISD operates under a structured leadership system that balances
              academic independence with party oversight.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT STORY BLOCK */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-red-700" />
                <h3 className="text-xl font-semibold">Governing Council</h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Chaired by the General Secretary of the NDC, the Governing
                Council provides strategic oversight for the institute.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Operational management is handled by the Rector, Registrar, and
                academic committees responsible for delivery and administration.
              </p>
            </motion.div>

            {/* RIGHT STORY BLOCK */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <UsersRound className="w-6 h-6 text-red-700" />
                <h3 className="text-xl font-semibold">Staff & Fellows</h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                GISD draws from academics, politicians, policy experts, and
                international contributors.
              </p>

              <div className="text-sm text-gray-600 space-y-2">
                <p>• Academics & researchers</p>
                <p>• Former ministers & MPs</p>
                <p>• Policy & governance experts</p>
                <p>• Communication specialists</p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ACCREDITATION (more minimal, less “card grid”) */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-12 h-12 text-red-700 mx-auto mb-4" />

          <Heading level={2} className="mb-4">
            Standards & Training Quality
          </Heading>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            GISD programmes are built on structured modules combining theory,
            practice, and leadership development.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-red-700" />
              Approved Modules
            </span>

            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-red-700" />
              Practical Learning
            </span>

            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-red-700" />
              Leadership Focus
            </span>
          </div>
        </div>
      </SectionWrapper>

      {/* FINAL SECTION (more editorial, less layout-heavy) */}
      <SectionWrapper background="gray">
        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={Img3}
              alt="GISD training"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-4">
              Building Political Leadership
            </h3>

            <p className="text-gray-600 leading-relaxed">
              GISD focuses on preparing individuals to lead with clarity,
              discipline, and civic responsibility through structured political
              education.
            </p>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
