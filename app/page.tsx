import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { MileStoneTimeline } from "../components/MileStoneTimeline";
import { ProgressStatusBoard } from "../components/ProgressStatusBoard";
import { ComplianceGraph } from "@/components/compliance-graph";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { PerformanceGraph } from "@/components/performence-graph";
import { AuditReadinessGraph } from "@/components/audit-readiness-graph";
import { RecentActivity } from "../components/RecentActivity";
import { recent_activities } from "@/data/activities";
import { StatsCards } from "../components/StatsCards";



export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <Card className="rounded-md gap-0">
        <CardHeader className="flex items-center justify-between">
          <p className="font-medium">Project Timeline</p>
          <select>
            <option>2025</option>
            <option>2026</option>
          </select>
        </CardHeader>
        <CardContent>
          <MileStoneTimeline />
        </CardContent>
      </Card>
      <StatsCards />
      <ProgressStatusBoard />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <ComplianceGraph />
        <Card className="gap-0 rounded-md">
          <CardHeader>
            <p className="text-sm font-bold">Top Performing Perspective Leaders</p>
          </CardHeader>
          <CardContent>
            {[
              { img: 'user-3.jpg', user: { name: 'Ahmed Al-Ali', designation: 'Strategy Perspective' }, performance: '96%' },
              { img: 'user-2.jpg', user: { name: 'Sarah Al-Khaled', designation: 'Beneficiary Perspective' }, performance: '94%' },
              { img: 'user-1.jpg', user: { name: 'Mohammad Al-Mansour', designation: 'IT Perspective' }, performance: '92%' }
            ].map((item, idx) => (
              <div key={`performing-card-${idx}`} className="flex items-center justify-between gap-2 space-y-2">
                <Avatar>
                  <AvatarImage src={`/assets/${item.img}`} />
                </Avatar>
                <div className="flex flex-col flex-1 gap-1">
                  <div className="text-sm">{item.user.name}</div>
                  <div className="text-xs">{item.user?.designation}</div>
                </div>
                <div className="text-sm">{item.performance}</div>
              </div>
            ))}
          </CardContent>
        </Card>
        <RecentActivity  activities={recent_activities}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="col-span-2">
          <PerformanceGraph />
        </div>
        <AuditReadinessGraph />
      </div>
    </div>
  );
}
