"use client"

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function ComplianceGraph() {
    const totalVisitors = chartData[0].desktop + chartData[0].mobile

    return (
        <Card className="flex flex-col gap-0 rounded-md">
            <CardHeader className="items-center pb-0">
                <CardTitle>Overall Compliance Score</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 items-center pb-0">
                <ChartContainer
                    config={chartConfig}
                    // aspect-square hata kar manual height ya aspect ratio den
                    className="mx-auto aspect-video w-full"
                >
                    <RadialBarChart
                        data={chartData}
                        startAngle={180} // Start left se
                        endAngle={60}   // End right pe (Semi-circle upar ki taraf)
                        innerRadius={100}
                        outerRadius={150}
                        /* cy ko niche shift karein (e.g., 80% or 100%) taake chart niche se start ho */
                        cy="80%"
                    >
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 20} // Label position adjust karein
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    65%
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 5}
                                                    className="fill-muted-foreground text-sm"
                                                >
                                                    Basic Standards 2025
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                        <RadialBar
                            dataKey="desktop"
                            stackId="a"
                            cornerRadius={10}
                            fill="#DB1F26"
                        />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
