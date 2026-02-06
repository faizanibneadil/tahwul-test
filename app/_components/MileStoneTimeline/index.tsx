export function MileStoneTimeline() {
    const CURRENT_MILESTONE_INDEX = 3;

    const milestones = [
        { date: 'Mar 17', label: 'Kickoff Workshop' },
        { date: 'March 18', label: 'March 18' },
        { date: 'May 8', label: 'Initial Phase' },
        { date: 'May 9–July 12', label: 'Verification' },
        { date: 'July 13', label: 'July 13' },
        { date: 'August 21', label: 'Cycle Conclusion' }
    ];

    const progressPercent = (CURRENT_MILESTONE_INDEX / (milestones.length)) * 100;

    return (
        <div className="w-full">
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center min-h-125 md:min-h-auto">

                {/* --- PROGRESS BAR (BACKGROUND LAYER) --- */}
                <div className="absolute 
            top-0 bottom-0 w-4  /* Mobile: Vertical */
            md:left-0 md:top-1.5 md:w-full md:h-4 /* Desktop: Horizontal */
            bg-sidebar-accent rounded-full z-0 overflow-hidden"
                >
                    <div
                        style={{ '--progress': `${progressPercent}%` } as React.CSSProperties}
                        className="bg-green-600 transition-all duration-500 rounded-full
                h-(--progress) w-full           /* Mobile */
                md:h-full md:w-(--progress)     /* Desktop */"
                    />
                </div>

                {/* --- MILESTONES (TOP LAYER) --- */}
                {milestones.map((step, idx) => {
                    const isCompleted = (idx + 1) <= CURRENT_MILESTONE_INDEX;

                    return (
                        <div
                            key={idx}
                            className="relative z-10 flex flex-row md:flex-col items-center mb-12 md:mb-0 w-full md:w-auto"
                        >
                            {/* Dot - Bar ke upar exact center karne ke liye */}
                            <div className={`
                  rounded-full size-4 shrink-0 transition-colors duration-300 border-2
                  ${isCompleted ? 'bg-white border-green-600' : 'bg-red-600 border-sidebar-accent'}
                  md:mt-1.5 /* Desktop horizontal bar ke center ke liye */
                `} />

                            {/* Labels */}
                            <div className="ml-6 md:ml-0 md:mt-6 md:text-center">
                                <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-tighter">
                                    {step.date}
                                </p>
                                <p className="text-foreground text-sm font-semibold whitespace-nowrap">
                                    {step.label}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}