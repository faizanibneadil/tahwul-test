import { Avatar, AvatarImage } from "@/components/ui/avatar"
import type { LeadersBoardUsers } from "@/types"

export function LeadersBoardCard(props: { leaderBoardUser: LeadersBoardUsers }) {
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