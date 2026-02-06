export function ProgressCardHeader(props: { label: string, progress: string }) {
    const {
        label,
        progress
    } = props || {}
    return (
        <div className="flex flex-col justify-between bg-sidebar text-white rounded-md px-2 h-24 py-4">
            <p className="text-center text-xs line-clamp-4">{label}</p>
            <p className="text-center bg-sidebar-accent rounded-full text-xs">{progress}</p>
        </div>
    )
}