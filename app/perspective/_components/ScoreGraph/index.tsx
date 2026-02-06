export function ScoreGraph(props: { score: number }) {
    const {
        score = 65
    } = props || {}
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center w-20 h-20">
            <svg
                width="81"
                height="81"
                viewBox="0 0 81 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform -rotate-90"
            >
                <circle
                    cx="40.5"
                    cy="40.5"
                    r={radius}
                    stroke="#F5F8FB"
                    strokeWidth="8"
                    fill="none"
                />

                <circle
                    cx="40.5"
                    cy="40.5"
                    r={radius}
                    stroke="#1EA54E"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    style={{
                        strokeDashoffset: offset,
                        transition: 'stroke-dashoffset 0.5s ease-in-out',
                        strokeLinecap: 'round'
                    }}
                    fill="none"
                />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[16px] font-bold text-[#1D3557]">
                    {score}%
                </span>
            </div>
        </div>
    );
};