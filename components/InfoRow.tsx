export function InfoRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: "red";
}) {
  return (
    <div className="flex justify-between text-sm">
      <span className={highlight === "red" ? "text-red-500" : "text-base text-gray-500 SF_Pro_Display_Normal"}>
        {label}
      </span>
      <span className={highlight === "red" ? "text-red-500" : " text-base font-bold SF_Pro_Display_Bold"}>
        {value}
      </span>
    </div>
  );
}
