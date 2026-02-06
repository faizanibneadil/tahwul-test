import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { LeadersBoardUsers } from "@/types";

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

function LeadersBoardCard(props: {leaderBoardUser: LeadersBoardUsers}){
    const {
        leaderBoardUser
    } = props || {}
    return (
        <div className="flex items-center gap-2 bg-sidebar-accent rounded-md p-2">
                        <Avatar>
                            <AvatarImage src={`/assets/${leaderBoardUser?.img}`} />
                        </Avatar>
                        <div className="flex flex-col flex-1 gap-1">
                            <div className="text-sm">{leaderBoardUser?.user?.name}</div>
                            <div className="text-xs">{leaderBoardUser?.user?.designation}</div>
                        </div>
                    </div>
    )
}