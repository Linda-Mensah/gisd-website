interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({
  children,
  className = "",
  hover = false,
}: CardProps) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${
        hover ? "transition-shadow hover:shadow-lg" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
