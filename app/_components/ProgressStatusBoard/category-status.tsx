import { statuses } from "@/data/statuses";

export function ProgressCategoryStatus(props: { status: string, idx: number }) {
    const { idx, status } = props || {}
    return (
        <div
            className="size-6 flex items-center justify-center rounded-full text-xs text-white"
            style={{
                backgroundColor: statuses?.find(s => s.status === status)?.color
            }}>{idx + 1}</div>
    )
}