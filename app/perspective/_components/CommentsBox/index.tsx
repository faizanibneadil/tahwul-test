import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Comment } from "@/types";
import { CommentCard } from "./comment-card";
import { CommentForm } from "./comment-form";


export function CommentsBox(props: { comments: Comment[] }) {
    const { comments } = props || {}
    return (
        <Card className="col-span-2 rounded-md shadow-none gap-0">
            <CardHeader>Comments</CardHeader>
            <CardContent className="space-y-2">
                {comments?.map((item, idx) => (
                    <CommentCard key={`comment-card-${idx}`} comment={item} />
                ))}
                <CommentForm />
            </CardContent>
        </Card>
    )
}