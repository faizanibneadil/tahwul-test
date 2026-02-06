import type { ProgressItem } from "@/types"
import { ProgressCardHeader } from "./progress-card-header"
import { ProgressCategoryCard } from "./progress-category-card"

export function ProgressCard(props: { item: ProgressItem }) {
    const { item } = props || {}
    return (
        <div className="space-y-2">
            <ProgressCardHeader label={item.label} progress={item.progress} />
            {item?.categories?.map((category, idx) => (
                <ProgressCategoryCard key={`progress-category-card-${idx}`} category={category} />
            ))}
        </div>
    )
}