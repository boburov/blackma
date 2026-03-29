import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`bg-blue-100 px-4 py-3 rounded-lg outline-none ${className}`}
    />
  );
}
