import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { progressGrid } from "@/data/progress-grid-data"
import { ProgressCard } from "./progress-card"
import { ProgressStatuses } from "./progress-statuses"

export function ProgressStatusBoard() {

    return (
        <Card className="rounded-md">
            <CardHeader className="flex flex-col md:flex-row items-center justify-between">
                <p className="font-bold">Progress Status</p>
                <ProgressStatuses />
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-10 gap-2">
                {progressGrid?.map((item, idx) => (
                    <ProgressCard key={`progress-card-${idx}`} item={item} />
                ))}
            </CardContent>
        </Card>
    )
}