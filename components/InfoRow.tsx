import useTranslate from "@/app/hooks/useTranslate";

export function InfoRow({
  label,
  value,
  highlight,
  showCurrency = false,
}: {
  label: string;
  value: string;
  highlight?: "red";
  showCurrency?: boolean;
}) {
  const { t } = useTranslate();

  return (
    <div className="flex justify-between text-sm">
      <span
        className={
          highlight === "red"
            ? "text-red-500"
            : "text-base text-gray-500 SF_Pro_Display_Normal"
        }
      >
        {label}
      </span>
      <span
        className={
          highlight === "red"
            ? "text-red-500"
            : " text-base font-bold SF_Pro_Display_Bold"
        }
      >
        {value} {showCurrency && t("orders.sum")}
      </span>
    </div>
  );
}