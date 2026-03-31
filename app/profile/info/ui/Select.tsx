import React from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({
  children,
  className = "",
  ...props
}: SelectProps) {
  return (
    <select
      {...props}
      className={`bg-[#919EAB33] px-4 py-3 rounded-lg outline-none ${className}`}
    >
      {children}
    </select>
  );
}
