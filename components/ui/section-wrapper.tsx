import { Container } from "./container";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "red";
}

export const SectionWrapper = ({
  children,
  className = "",
  background = "white",
}: SectionWrapperProps) => {
  const bgColors = {
    white: "bg-white",
    gray: "bg-gray-50",
    red: "bg-red-50",
  };

  return (
    <section className={`pt-24 ${bgColors[background]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};
