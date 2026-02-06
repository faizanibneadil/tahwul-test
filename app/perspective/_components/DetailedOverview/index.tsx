import { Card, CardContent } from "@/components/ui/card";

export function DetailedOverview() {
    return (
        <Card className="p-4 gap-0 rounded-md shadow-none">
            <CardContent className="text-muted-foreground text-sm p-0">
                <div className="flex flex-col md:flex-row gap-4 items-start p-2">
                    <h3 className="p-2 rounded-md underline font-bold md:font-normal md:no-underline md:bg-sidebar-accent shrink-0 md:max-w-40 w-full text-black">
                        Objective
                    </h3>
                    <p className="p-2 bg-sidebar-accent rounded-md flex-1 text-black">
                        Develop a digital transformation strategy aligned with the organization’s strategy and the objectives of Saudi Vision 2030.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start p-2">
                    <h3 className="p-2 rounded-md underline font-bold md:font-normal md:no-underline md:bg-sidebar-accent shrink-0 md:max-w-40 w-full text-black">
                        Implementation Requirements
                    </h3>
                    <div className="p-2 bg-sidebar-accent rounded-md flex-1 text-black">
                        <div className="space-y-2">
                            <p>Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:</p>
                            <ul className="list-none space-y-1">
                                <li>A. The Organization’s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization’s Overall Strategy.</li>
                                <li>B. Strategic Initiatives, Programs, And Performance Indicators.</li>
                                <li>C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy’s Objectives.</li>
                                <li>D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy’s Objectives.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start p-2">
                    <h3 className="p-2 rounded-md underline font-bold md:font-normal md:no-underline md:bg-sidebar-accent shrink-0 md:max-w-40 w-full text-black">
                        Evidence Documents
                    </h3>
                    <p className="p-2 bg-sidebar-accent rounded-md flex-1 text-black">
                        Submit the approved digital transformation strategy that includes all the requirements of this standard, provided that it has been approved within a period not exceeding 36 months.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start p-2">
                    <h3 className="p-2 rounded-md underline font-bold md:font-normal md:no-underline md:bg-sidebar-accent shrink-0 md:max-w-40 w-full text-black">
                        Related Regulations
                    </h3>
                    <p className="p-2 bg-sidebar-accent rounded-md flex-1 text-black">
                        Council of Ministers Resolution No. (40) dated 27/2/1427H, Clause (16).
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start p-2">
                    <h3 className="p-2 rounded-md underline font-bold md:font-normal md:no-underline md:bg-sidebar-accent shrink-0 md:max-w-40 w-full text-black">
                        Scope                                </h3>
                    <p className="p-2 bg-sidebar-accent rounded-md flex-1 text-black">
                        All government entities.
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}