import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-red-700 text-white hover:bg-red-800 focus:ring-red-500",
    secondary:
      "bg-green-800 text-white hover:bg-green-900 focus:ring-green-500",
    outline:
      "border-2 border-red-700 text-red-700 hover:bg-red-50 focus:ring-red-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    fullWidth ? "w-full" : ""
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
