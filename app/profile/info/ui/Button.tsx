import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-black text-white w-full px-4 py-3 rounded-lg outline-none cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
