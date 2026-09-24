import Image from "next/image";
import Link from "next/link";
import { Check, Clock3, Flame, Star, X } from "lucide-react";

export default function PlanCard({ workout, type, onRemove, onMarkDone }) {
    const isPlan = type === "plan";
    const isDone = Boolean(workout.done);

    return (
        <article className="rounded-[14px] border border-[#292e37] bg-[#15181e] p-4 transition-all duration-300 hover:border-[#373d47] sm:p-4.5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative h-[150px] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#20242b] sm:h-[86px] sm:w-[150px]">
                    <Image src={workout.image} alt={workout.name} fill sizes="(max-width: 640px) 100vw, 150px" className="object-cover" />
                </div>

                <div className="min-w-0 flex-1">
                    <h2 className="font-oswald truncate text-[17px] font-semibold uppercase leading-tight text-[#f5f6f7] lg:text-[18px]">{workout.name}</h2>
                    <p className="mt-1 truncate text-[12px] leading-5 text-[#858b96] lg:text-[13px]">{workout.equipment}</p>

                    <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[#b0b5bd] lg:text-[12px]">
                        <span className="flex items-center gap-1.5 whitespace-nowrap"><Clock3 size={14} strokeWidth={1.9} className="text-[#c8ff00]" />{workout.duration} min</span>
                        <span className="flex items-center gap-1.5 whitespace-nowrap"><Flame size={14} strokeWidth={1.9} className="text-[#c8ff00]" />{workout.caloriesBurned} kcal</span>
                        <span className="flex items-center gap-1.5 whitespace-nowrap"><Star size={14} strokeWidth={1.9} className="text-[#c8ff00]" />{workout.rating}</span>
                    </div>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-2 sm:ml-auto sm:flex-nowrap">
                    <Link href={`/workout/${workout.id}`} className="inline-flex h-[38px] items-center justify-center whitespace-nowrap rounded-full border border-[#3b424d] px-4 text-[11px]! font-medium! leading-none! text-white! transition-all duration-300 hover:border-[#c8ff00] hover:text-[#c8ff00]! active:scale-[0.98] lg:text-[12px]!">View Details</Link>

                    {isPlan && (
                        <button type="button" onClick={() => onMarkDone(workout.id)} disabled={isDone} className="inline-flex h-[38px] items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#c8ff00] px-4 text-[11px]! font-semibold! leading-none! text-[#080a0c]! transition-all duration-300 hover:bg-[#d7ff36] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-[#39451b] disabled:text-[#89966a]! lg:text-[12px]!">
                            <Check size={14} strokeWidth={2.2} />
                            {isDone ? "Done" : "Mark as Done"}
                        </button>
                    )}

                    <button type="button" onClick={() => onRemove(workout.id)} aria-label={`Remove ${workout.name}`} className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full text-[#747b87]! transition-all duration-300 hover:bg-[#20242b] hover:text-white! active:scale-[0.95]">
                        <X size={17} strokeWidth={1.8} />
                    </button>
                </div>
            </div>
        </article>
    );
}