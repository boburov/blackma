export function SectionCard({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-[20px] px-[20px] py-[18px] border-slate-300 border space-y-3">
      {title && <h2 className="font-semibold">{title}</h2>}
      {children}
    </div>
  );
}
