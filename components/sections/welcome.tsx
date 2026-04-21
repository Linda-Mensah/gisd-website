"use client";

import { motion } from "framer-motion";
import { Heading } from "../ui/heading";
import { Users } from "lucide-react";
import Image from "next/image";
import { Img3 } from "@/assets/images";

export const Welcome = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Heading level={2} className="mb-6">
            Welcome to GISD
          </Heading>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The Ghana Institute of Social Democracy (GISD) is the official
            training and research institute of the National Democratic Congress.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Established as the NDC Party School, the institute is dedicated to
            building a knowledgeable, skilled, and ideologically grounded
            political base for the party.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            GISD provides structured education and practical training for
            members, officers, appointees, activists, and sympathisers of the
            NDC, with a focus on strengthening the values and practice of social
            democracy.
          </p>

          <div className="inline-flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-full">
            <Users className="w-5 h-5 text-red-700" />
            <span className="text-gray-700 text-sm">
              Part of the NDC family since 2017
            </span>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="relative h-[420px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={Img3}
              alt="GISD training"
              fill
              className="object-cover"
            />
          </div>

          {/* subtle overlay card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
            <p className="text-sm text-gray-600">
              Building leaders who understand both policy and people.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
