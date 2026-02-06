import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { LeadersBoardUsers } from "@/types";
import { LeadersBoardCard } from "./leader-board-card";

export function LeadersBoard(props: { leadersBoardUsers: LeadersBoardUsers[] }) {
    const {
        leadersBoardUsers = []
    } = props || {}
    return (
        <Card className="rounded-md shadow-none gap-0">
            <CardHeader>Leaders</CardHeader>
            <CardContent className="flex items-center gap-4 flex-wrap">
                {leadersBoardUsers?.map((item, idx) => (
                    <LeadersBoardCard key={`leaders-board-user-${idx}`} leaderBoardUser={item} />
                ))}
            </CardContent>
        </Card>
    )
}

