"use client";

import Image from "next/image";
import { Bookmark, CalendarPlus } from "lucide-react";
import Container from "@/components/layout/Container";
import { useFitLog } from "@/context/FitLogContext";

export default function WorkoutDetails({ workout }) {
    const { isReady, planCount, planLimit, addToPlan, saveWorkout, isInPlan, isSaved } = useFitLog();

    const addedToPlan = isInPlan(workout.id);
    const savedForLater = isSaved(workout.id);
    const planFull = planCount >= planLimit && !addedToPlan;

    const muscleGroups = Array.isArray(workout.muscleGroups) ? workout.muscleGroups : [];
    const instructions = Array.isArray(workout.instructions) ? workout.instructions : [];

    const specs = [
        { label: "Equipment", value: workout.equipment || "N/A" },
        { label: "Difficulty", value: workout.difficulty || "N/A" },
        { label: "Sets", value: workout.sets || "N/A" },
        { label: "Reps", value: workout.reps || "N/A" },
        { label: "Duration", value: workout.duration ? `${workout.duration} min` : "N/A" },
        { label: "Calories", value: workout.caloriesBurned ? `${workout.caloriesBurned} kcal` : "N/A" },
        { label: "Rating", value: workout.rating || "N/A" },
    ];

    return (
        <section className="bg-[#0b0d10] py-10 sm:py-12 lg:py-14">
            <Container>
                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
                    <div className="relative aspect-4/5 w-full overflow-hidden rounded-[14px] bg-[#15181e]">
                        <Image src={workout.image} alt={workout.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    </div>

                    <div className="flex flex-col">
                        <h1 className="font-oswald text-[36px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-[#f5f6f7] sm:text-[40px] lg:text-[42px] xl:text-[44px]">
                            {workout.name}
                        </h1>

                        <p className="mt-3 max-w-160 text-[15px] leading-[1.65] text-[#999ea8] sm:text-[16px]">
                            {workout.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {muscleGroups.map((group) => (
                                <span key={group} className="rounded-full bg-[#c8ff00] px-4 py-1.5 text-[12px] font-bold leading-none text-black">
                                    {group}
                                </span>
                            ))}
                        </div>

                        <div className="mt-7 overflow-hidden rounded-[14px] border border-[#292e37] bg-[#15181e]">
                            {specs.map((spec, index) => (
                                <div key={spec.label} className={`flex min-h-12.25 items-center justify-between gap-5 px-5 sm:min-h-12.5 sm:px-6 lg:px-7 ${index !== specs.length - 1 ? "border-b border-[#292e37]" : ""}`}>
                                    <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#989eaa] sm:text-[12px]">{spec.label}</span>
                                    <span className="text-right text-[13px] font-medium text-[#e4e6ea] sm:text-[14px]">{spec.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <h2 className="text-[16px] font-bold uppercase tracking-[0.03em] text-[#f4f5f6] sm:text-[17px]">
                                Instructions
                            </h2>

                            <ol className="mt-5 space-y-4">
                                {instructions.map((instruction, index) => (
                                    <li key={`${workout.id}-${index}`} className="grid grid-cols-[24px_1fr] gap-1 text-[13px] leading-6 text-[#bec2c9] sm:text-[14px]">
                                        <span className="text-[#9298a3]">{index + 1}.</span>
                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <button
                                type="button"
                                onClick={() => addToPlan(workout)}
                                disabled={!isReady || addedToPlan || planFull}
                                className="inline-flex min-h-11.5 items-center justify-center gap-2.5 rounded-[11px] bg-[#c8ff00] px-6 text-[13px] font-bold text-black transition-all duration-300 hover:bg-[#d8ff3f] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-[#657d18] disabled:text-[#171b0d] sm:min-w-52.5"
                            >
                                <CalendarPlus size={17} strokeWidth={2.1} />
                                {addedToPlan ? "Added to today's plan" : planFull ? "Plan is full" : "Add to today's plan"}
                            </button>

                            <button
                                type="button"
                                onClick={() => saveWorkout(workout)}
                                disabled={!isReady || savedForLater}
                                className="inline-flex min-h-11.5 items-center justify-center gap-2.5 rounded-[11px] border border-[#3b424d] bg-transparent px-6 text-[13px] font-medium text-[#e3e5e9] transition-all duration-300 hover:border-[#c8ff00] hover:text-[#c8ff00] active:scale-[0.98] disabled:cursor-not-allowed disabled:border-[#30353d] disabled:text-[#707681] sm:min-w-41.25"
                            >
                                <Bookmark size={17} strokeWidth={1.9} />
                                {savedForLater ? "Saved" : "Save for later"}
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}