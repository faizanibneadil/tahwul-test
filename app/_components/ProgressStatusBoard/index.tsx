import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { statuses } from "@/data/statuses"

export function ProgressStatusBoard() {
    const progressGrid = [
        {
            label: 'Strategy and Planning',
            progress: '97.78%',
            categories: [
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                },
                {
                    label: 'Digital Governance',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'In Progress' },
                    ]
                },
                {
                    label: 'Enterprise Architecture',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                }
            ]
        },
        {
            label: 'Organization and Culture',
            progress: '70.83%',
            categories: [
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                },
                {
                    label: 'Digital Governance',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'In Progress' },
                    ]
                },
                {
                    label: 'Enterprise Architecture',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Partially Uploaded' },
                    ]
                }
            ]
        },
        {
            label: 'Operations and Execution',
            progress: '80.00%',
            categories: [
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Partially Uploaded' },
                        { status: 'Completed' },
                    ]
                }
            ]
        },
        {
            label: 'Business Continuity',
            progress: '90.59%',
            categories: [
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Partially Uploaded' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                },
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Partially Uploaded' },
                    ]
                }
            ]
        },
        {
            label: 'Information Technology',
            progress: '75.00%',
            categories: [
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                },
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Partially Uploaded' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                },
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Partially Uploaded' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                }
            ]
        },
        {
            label: 'Comprehensive Governance',
            progress: '64.44%',
            categories: [
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Partially Uploaded' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                }
            ]
        },
        {
            label: 'Channels and Services',
            progress: '100%',
            categories: [
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Partially Uploaded' },
                    ]
                },
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Partially Uploaded' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                }
            ]
        },
        {
            label: 'Beneficiary Centralization',
            progress: '60.78%',
            categories: [
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Partially Uploaded' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                },
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Partially Uploaded' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                },
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Partially Uploaded' },
                        { status: 'Completed' },
                    ]
                }
            ]
        },
        {
            label: 'Government Data',
            progress: '97.78%',
            categories: [
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                },
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                },
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                }
            ]
        },
        {
            label: 'Research and Innovation',
            progress: '97.78%',
            categories: [
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                },
                {
                    label: 'Digital Transformation',
                    statuses: [
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                        { status: 'Completed' },
                    ]
                }
            ]
        },
    ]
    return (
        <Card className="rounded-md">
            <CardHeader className="flex flex-col md:flex-row items-center justify-between">
                <p className="font-bold">Progress Status</p>
                <div className="flex items-center flex-wrap gap-2">
                    {statuses?.map((status, idx) => (
                        <div key={`status-board-status-${idx}`} className="flex items-center gap-1">
                            <div className="size-2 rounded-full" style={{ backgroundColor: status.color }} />
                            <p className="text-xs">{status.status}</p>
                        </div>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-10 gap-2">
                {progressGrid?.map((item, idx) => (
                    <div key={`grid-item-${idx}`} className="space-y-2">
                        <div className="flex flex-col justify-between bg-sidebar text-white rounded-md px-2 h-24 py-4">
                            <p className="text-center text-xs line-clamp-4">{item.label}</p>
                            <p className="text-center bg-sidebar-accent rounded-full text-xs">{item.progress}</p>
                        </div>
                        {item?.categories?.map((category, idx) => (
                            <Card key={`cat-item-${idx}`} className="shadow-none gap-6 rounded-md px-2 py-4 bg-sidebar-accent min-h-fit">
                                <p className="text-center text-xs line-clamp-4">{category.label}</p>
                                <div className="flex flex-wrap justify-center gap-1">
                                    {category?.statuses?.map((categoryStatus, idx) => (
                                        <div
                                            key={`cat-status-${idx}`}
                                            className="size-6 flex items-center justify-center rounded-full text-xs text-white"
                                            style={{
                                                backgroundColor: statuses?.find(s => s.status === categoryStatus.status)?.color
                                            }}>{idx + 1}</div>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}