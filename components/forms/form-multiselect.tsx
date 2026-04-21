"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

interface Option {
  value: string;
  label: string;
  group: string;
}

interface FormMultiSelectProps {
  label: string;
  options: Option[];
  value: string[];
  onChange: (values: string[]) => void;
  error?: string;
}

export const FormMultiSelect = ({
  label,
  options,
  value,
  onChange,
  error,
}: FormMultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const groupedOptions = options.reduce(
    (acc, option) => {
      if (!acc[option.group]) {
        acc[option.group] = [];
      }
      acc[option.group].push(option);
      return acc;
    },
    {} as Record<string, Option[]>,
  );

  const toggleOption = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  const removeOption = (optionValue: string) => {
    onChange(value.filter((v) => v !== optionValue));
  };

  const selectedLabels = value.map((v) => {
    const option = options.find((opt) => opt.value === v);
    return option?.label || v;
  });

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer min-h-[42px] flex items-center justify-between"
        >
          <div className="flex flex-wrap gap-1">
            {selectedLabels.length > 0 ? (
              selectedLabels.map((label, idx) => (
                <span
                  key={idx}
                  className="bg-red-100 text-red-700 px-2 py-1 rounded-md text-sm flex items-center gap-1"
                >
                  {label}
                  <X
                    size={14}
                    className="cursor-pointer hover:text-red-900"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeOption(value[idx]);
                    }}
                  />
                </span>
              ))
            ) : (
              <span className="text-gray-500">Select courses...</span>
            )}
          </div>
          <ChevronDown
            size={20}
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </div>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
            {Object.entries(groupedOptions).map(([groupName, groupOptions]) => (
              <div key={groupName}>
                <div className="px-3 py-2 bg-gray-50 font-semibold text-sm text-gray-700">
                  {groupName}
                </div>
                {groupOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={value.includes(option.value)}
                      onChange={() => toggleOption(option.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};
