import { statuses } from "@/data/statuses";

export function ProgressStatuses() {
    return (
        <div className="flex items-center flex-wrap gap-2">
            {statuses?.map((status, idx) => (
                <StatusCard key={`status-${idx}`} color={status.color} status={status.status} />
            ))}
        </div>
    )
}

function StatusCard(props: { color: string, status: string }) {
    const { color, status } = props || {}
    return (
        <div className="flex items-center gap-1">
            <div className="size-2 rounded-full" style={{ backgroundColor: color }} />
            <p className="text-xs">{status}</p>
        </div>
    )
}