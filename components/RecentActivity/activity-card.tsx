import type { Activity } from "@/types"

export function ActivityCard(props: { activity: Activity }) {
    const { activity } = props || {}
    const createdAt = activity.createdAt instanceof Date ? new Date(activity.createdAt).toISOString() : activity.createdAt
    return (
        <div className="flex items-start justify-between gap-2 space-y-2">
            <div className="mt-1.5 size-2 bg-red-600 rounded-full shrink-0" />
            <p className="text-sm">{activity.activity}</p>
            <div className="text-xs text-muted-foreground whitespace-nowrap">{createdAt}</div>
        </div>
    )
}