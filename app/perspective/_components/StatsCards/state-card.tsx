import { Card } from "@/components/ui/card";
import { stats } from ".";

export function StateCard(props: { item: typeof stats[number] }) {
    const { item } = props || {}
    return (
        <Card className="p-2 gap-2 rounded-md shadow-none">
            <div className="flex items-center gap-2">
                <item.Icon />
                <div className="">
                    <p className="text-lg font-bold">{item?.value}</p>
                    <div className="text-xs px-0 py-0">{item.label}</div>
                </div>
            </div>
        </Card>
    )
}