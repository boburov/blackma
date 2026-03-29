export function Badge({
  icon,
  text,
  extra,
}: {
  icon: React.ReactNode
  text: string
  extra?: React.ReactNode
}) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md px-2 py-0.5">
      {icon}
      {extra}
      {text}
    </span>
  )
}