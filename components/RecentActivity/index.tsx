import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Activity } from "@/types"
import { ActivityCard } from "./activity-card"


type Props = {
    activities: Activity[]
}
export function RecentActivity(props: Props) {
    const {
        activities = []
    } = props || {}
    return (
        <Card className="gap-0 rounded-md shadow-none">
            <CardHeader>
                <p className="text-sm font-bold">Recent Activities</p>
            </CardHeader>
            <CardContent>
                {activities.map((item, idx) => (
                    <ActivityCard key={`activity-card-${idx}`} activity={item} />
                ))}
            </CardContent>
        </Card>
    )
}

