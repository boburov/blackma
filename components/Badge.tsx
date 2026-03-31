export function Badge({
  icon,
  text,
  extra,
}: {
  icon: React.ReactNode;
  text: string;
  extra?: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-600">
      {extra}
      {text}
    </span>
  );
}
