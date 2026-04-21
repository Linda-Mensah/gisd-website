"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Heading, SectionWrapper } from "@/components/ui";
import { Img1, Img2, Img3, Img4, Img5, Img6, Img7 } from "@/assets/images";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

export default function MediaPage() {
  const [active, setActive] = useState(0);

  // auto rotate featured image
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HEADER */}
      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto text-center">
          <Heading level={1} className="mb-4">
            Media Gallery
          </Heading>

          <p className="text-gray-600 leading-relaxed">
            A living archive of training, leadership development, and community
            engagement across GISD programmes.
          </p>
        </div>
      </SectionWrapper>

      {/* MAIN LIVING VIEW */}
      <SectionWrapper background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-6 items-center">
            {/* FEATURED IMAGE (big focus) */}
            <div className="lg:col-span-3 relative h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[active]}
                    alt="Featured media"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* subtle label */}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                Featured moment
              </div>
            </div>

            {/* SIDE STRIP (floating previews) */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`relative h-32 rounded-xl overflow-hidden cursor-pointer border transition-all ${
                    active === index
                      ? "border-red-600 scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                  animate={{
                    y: [0, index % 2 === 0 ? -6 : 6, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={img}
                    alt={`Media ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FOOT NOTE */}
      <SectionWrapper background="white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            Moments in motion — leadership, learning, and engagement across
            Ghana.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
