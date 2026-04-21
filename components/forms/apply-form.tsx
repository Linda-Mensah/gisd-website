"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applyFormSchema, ApplyFormData } from "@/lib/validations/apply-form";
import { FormInput } from "./form-input";
import { Button } from "../ui";
import { REGIONS, COURSE_CATEGORIES } from "@/utils/constants";
import { FormSelect } from "./form-select";
import { FormMultiSelect } from "./form-multiselect";
import { motion } from "framer-motion";

type CourseOption = {
  value: string;
  label: string;
  group: string;
};

type RegionOption = {
  value: string;
  label: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const ApplyForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applyFormSchema),
    defaultValues: {
      selectedCourses: [],
    },
  });

  const selectedCourses = watch("selectedCourses");

  const courseOptions: CourseOption[] = Object.entries(
    COURSE_CATEGORIES,
  ).flatMap(([category, data]) =>
    data.courses.map((course) => ({
      value: `${category}:${course.code}`,
      label: `${course.code} - ${course.title}`,
      group: data.name,
    })),
  );

  const regionOptions: RegionOption[] = REGIONS.map((region) => ({
    value: region,
    label: region,
  }));

  const onSubmit = async (data: ApplyFormData): Promise<void> => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-semibold text-green-800 mb-4">
          Application Submitted!
        </h3>
        <p className="text-green-700">
          Thank you for your application. We will contact you shortly with
          further instructions.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp}>
          <FormInput
            label="First Name"
            {...register("firstName")}
            error={errors.firstName?.message}
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <FormInput
            label="Last Name"
            {...register("lastName")}
            error={errors.lastName?.message}
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp}>
          <FormInput
            label="Town/City"
            {...register("townCity")}
            error={errors.townCity?.message}
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <FormSelect
            label="Region"
            options={regionOptions}
            {...register("region")}
            error={errors.region?.message}
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp}>
          <FormInput
            label="Country"
            {...register("country")}
            error={errors.country?.message}
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <FormInput
            label="Phone"
            type="tel"
            {...register("phone")}
            error={errors.phone?.message}
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp}>
          <FormInput
            label="Email"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <FormInput
            label="Confirm Email"
            type="email"
            {...register("confirmEmail")}
            error={errors.confirmEmail?.message}
          />
        </motion.div>
      </div>

      <motion.div variants={fadeInUp}>
        <FormMultiSelect
          label="Select Courses"
          options={courseOptions}
          value={selectedCourses}
          onChange={(values: string[]) => setValue("selectedCourses", values)}
          error={errors.selectedCourses?.message}
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting}
          className="cursor-pointer"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </motion.div>
    </motion.form>
  );
};
