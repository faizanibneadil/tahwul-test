"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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

export const description = "A bar chart"

const chartData = [
    { month: "Jan", desktop: 186 },
    { month: "Feb", desktop: 305 },
    { month: "Mar", desktop: 237 },
    { month: "Apr", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "Jun", desktop: 300 },
    { month: "Jul", desktop: 219 },
    { month: "Aug", desktop: 159 },
    { month: "Sep", desktop: 243 },
    { month: "Oct", desktop: 159 },
    { month: "Nov", desktop: 289 },
    { month: "Dec", desktop: 200 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function PerformanceGraph() {
    return (
        <Card className="gap-0 rounded-md">
            <CardHeader>
                <CardTitle>12-Month Performance</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <defs>
                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#0078D7" stopOpacity={1} />
                                <stop offset="100%" stopColor="rgba(0, 120, 215, 0)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            dataKey="desktop"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <Bar dataKey="desktop" fill="url(#barGradient)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
