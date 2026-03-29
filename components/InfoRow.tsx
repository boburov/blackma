export function InfoRow({
    label,
    value,
    highlight,
}: {
    label: string
    value: string
    highlight?: "red"
}) {
    return (
        <div className="flex justify-between text-sm">
            <span className={highlight === "red" ? "text-red-500" : "text-gray-500"}>
                {label}
            </span>
            <span className={highlight === "red" ? "text-red-500" : "font-medium"}>
                {value}
            </span>
        </div>
    )
}