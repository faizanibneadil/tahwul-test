import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CommentsBox } from "./_components/CommentsBox";
import { DetailedOverview } from "./_components/DetailedOverview";
import { DocumentTable } from "./_components/DocumentTable";
import { LeadersBoard } from "./_components/LeadersBoard";
import { ScoreGraph } from "./_components/ScoreGraph";
import { StatsCards } from "./_components/StatsCards";
import { RecentActivity } from "../../components/RecentActivity";
import { recent_activities } from "@/data/activities";
import { comments } from "@/data/comment";
import { leadersBoardUsers } from "@/data/leaders-board-users";

export default function Page() {

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-md font-bold">Digital Transformation Strategic Planning</h1>
            <Card className="gap-0 rounded-md shadow-none">
                <div className="flex items-center justify-between px-4">
                    <div className="flex flex-col flex-1 gap-1">
                        <div className="px-4 py-2 border rounded-full w-fit">Strategy & Planning</div>
                        <h3 className="text-md font-bold">Digital Transformation Strategic Planning</h3>
                        <p className="text-sm text-muted-foreground">Develop comprehensive strategic plans for digital transformation aligned with organizational goals</p>
                    </div>
                    <ScoreGraph score={100} />
                </div>
            </Card>
            <StatsCards />
            <Tabs defaultValue="overview" className="">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="Evidence">Evidence</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="w-full p-0 space-y-4">
                    <DetailedOverview />
                    <LeadersBoard leadersBoardUsers={leadersBoardUsers} />
                </TabsContent>
                <TabsContent value="Evidence" className="space-y-4">
                    <Card className="rounded-md shadow-none gap-0">
                        <DocumentTable />
                    </Card>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <CommentsBox comments={comments} />
                        <RecentActivity activities={recent_activities} />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}


