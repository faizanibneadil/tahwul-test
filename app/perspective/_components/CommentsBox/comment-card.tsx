import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Comment } from "@/types"
import { dateFormatter } from "@/utilities/date-formatter"

export function CommentCard(props: { comment: Comment }) {
    const {
        comment
    } = props || {}
    return (
        <Card className="shadow-none rounded-md gap-0 space-y-2">
            <CardHeader className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar className="size-6">
                        <AvatarImage src='' />
                        <AvatarFallback>{comment?.user?.name?.at(0)?.toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">{comment?.user.name}</div>
                </div>
                <div className="text-xs text-muted-foreground">{dateFormatter(comment.createdAt)}</div>
            </CardHeader>
            <CardContent className="text-xs">{comment?.comment}</CardContent>
        </Card>
    )
}