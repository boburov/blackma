export function SectionCard({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 border-slate-300 border space-y-3">
      {title && <h2 className="font-semibold">{title}</h2>}
      {children}
    </div>
  );
}
