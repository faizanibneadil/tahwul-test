import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { action_cards } from ".";

export function StatsCard(props: { item: typeof action_cards[number] }) {
    const { item } = props || {}
    return (
        <Card className="p-2 gap-2 rounded-md">
            <CardHeader className="flex items-center justify-between px-0">
                <p className="text-md font-bold">{item?.stat}</p>
                <item.Icon />
            </CardHeader>
            <CardContent className="text-xs px-0 py-0">{item.label}</CardContent>
        </Card>
    )
}