import { Card } from "@/components/ui/card";
import type { Categories } from "@/types";
import { ProgressCategoryStatus } from "./category-status";

export function ProgressCategoryCard(props: { category: Categories }) {
    const { category } = props || {}
    return (
        <Card className="shadow-none gap-6 rounded-md px-2 py-4 bg-sidebar-accent min-h-fit">
            <p className="text-center text-xs line-clamp-4">{category.label}</p>
            <div className="flex flex-wrap justify-center gap-1">
                {category?.statuses?.map((categoryStatus, idx) => (
                    <ProgressCategoryStatus key={`progress-category-status-${idx}`} idx={idx} status={categoryStatus?.status} />
                ))}
            </div>
        </Card>
    )
}