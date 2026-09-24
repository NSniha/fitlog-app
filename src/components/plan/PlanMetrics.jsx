export default function PlanMetrics({ exercises, minutes, calories }) {
    const metrics = [
        { label: "Exercises", value: exercises, highlight: true },
        { label: "Minutes", value: minutes },
        { label: "Calories", value: calories },
    ];

    return (
        <div className="overflow-hidden rounded-[14px] border border-[#292e37] bg-[#15181e]">
            <div className="grid grid-cols-3">
                {metrics.map((metric, index) => (
                    <div
                        key={metric.label}
                        className={`flex flex-col items-center justify-center px-2 py-5 text-center sm:items-start sm:px-7 sm:py-7 sm:text-left lg:px-8 lg:py-8 ${index !== 0 ? "border-l border-[#292e37]" : ""
                            }`}
                    >
                        <p className="text-[10px] font-medium text-[#8f949e] sm:text-[12px] lg:text-[13px]">
                            {metric.label}
                        </p>

                        <p
                            className={`font-oswald mt-2 text-[28px] font-semibold leading-none sm:text-[36px] lg:text-[40px] ${metric.highlight ? "text-[#c8ff00]" : "text-[#f5f6f7]"
                                }`}
                        >
                            {metric.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}