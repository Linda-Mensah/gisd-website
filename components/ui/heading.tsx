import { createElement } from "react";

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  center?: boolean;
}

export const Heading = ({
  children,
  level = 2,
  className = "",
  center = false,
}: HeadingProps) => {
  const styles = {
    1: "text-4xl md:text-5xl font-bold",
    2: "text-3xl md:text-4xl font-bold",
    3: "text-2xl md:text-3xl font-semibold",
    4: "text-xl md:text-2xl font-semibold",
  };

  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";

  return createElement(
    Tag,
    {
      className: `${styles[level]} ${center ? "text-center" : ""} ${className}`,
    },
    children,
  );
};
