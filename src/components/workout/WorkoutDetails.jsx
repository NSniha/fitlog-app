"use client";

import Image from "next/image";
import { Bookmark, CalendarPlus } from "lucide-react";
import Container from "@/components/layout/Container";
import { useFitLog } from "@/context/FitLogContext";

export default function WorkoutDetails({ workout }) {
  const { isReady, addToPlan, saveWorkout, isInPlan, isSaved } = useFitLog();

  const addedToPlan = isInPlan(workout.id);
  const savedForLater = isSaved(workout.id);
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
    <section className="bg-[#0b0d10] py-8 sm:py-10 lg:py-14">
      <Container>
        <div className="grid gap-7 sm:gap-8 lg:grid-cols-2 lg:items-start lg:gap-x-12 lg:gap-y-0 xl:gap-x-14">

          <div className="order-1 lg:col-start-2 lg:row-start-1">
            <h1 className="font-oswald text-[30px] font-semibold uppercase leading-[1.08] tracking-[-0.01em] text-[#f5f6f7] sm:text-[36px] lg:text-[40px] xl:text-[42px]">
              {workout.name}
            </h1>

            <p className="mt-3 max-w-160 text-[13px] leading-[1.7] text-[#989da8] sm:text-3.5 lg:text-[15px]">
              {workout.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
              {muscleGroups.map((group) => (
                <span key={group} className="rounded-full bg-[#c8ff00] px-3 py-1.25 text-[10px] font-bold uppercase leading-none text-black!">
                  {group}
                </span>
              ))}
            </div>
          </div>

          <div className="relative order-2 aspect-4/3 w-full overflow-hidden rounded-3.5 bg-[#15181e] sm:aspect-16/11 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:aspect-4/5">
            <Image src={workout.image} alt={workout.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>

          <div className="order-3 lg:col-start-2 lg:row-start-2">
            <div className="overflow-hidden rounded-3.5 border border-[#292e37] bg-[#15181e] lg:mt-7">
              {specs.map((spec, index) => (
                <div key={spec.label} className={`flex min-h-12 items-center justify-between gap-5 px-5 sm:min-h-12.5 sm:px-6 lg:px-7 ${index !== specs.length - 1 ? "border-b border-[#292e37]" : ""}`}>
                  <span className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#989eaa] sm:text-[11px]">
                    {spec.label}
                  </span>

                  <span className="text-right text-[12px] font-medium text-[#e4e6ea] sm:text-[13px] lg:text-3.5">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 sm:mt-8">
              <h2 className="font-oswald text-[18px] font-semibold uppercase tracking-[0.03em] text-[#f4f5f6]">
                Instructions
              </h2>

              {instructions.length > 0 ? (
                <ol className="mt-4 space-y-3 sm:mt-5 sm:space-y-3.5">
                  {instructions.map((instruction, index) => (
                    <li key={`${workout.id}-${index}`} className="grid grid-cols-[21px_1fr] gap-1 text-[12px] leading-5.5 text-[#b8bdc6] sm:grid-cols-[24px_1fr] sm:text-[13px] sm:leading-6 lg:text-3.5">
                      <span className="text-[#9298a3]">{index + 1}.</span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-4 text-[12px] text-[#9298a3] sm:text-[13px]">No instructions available.</p>
              )}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
              <button
                type="button"
                onClick={() => addToPlan(workout)}
                disabled={!isReady || addedToPlan}
                className="inline-flex h-11 min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-[5px] bg-[#c8ff00] px-2 text-[15px]! font-semibold! text-[#080a0c]! transition-all duration-300 hover:bg-[#d7ff36] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-[#657d18] disabled:text-[#171b0d]! sm:h-11.5 sm:px-6 sm:text-[12px]"
              >
                <CalendarPlus size={13} strokeWidth={2.2} className="shrink-0 sm:h-3.5 sm:w-3.5" />
                <span className="truncate">{addedToPlan ? "Added to plan" : "Add to today's plan"}</span>
              </button>

              <button
                type="button"
                onClick={() => saveWorkout(workout)}
                disabled={!isReady || savedForLater}
                className="inline-flex h-11 min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-[5px] border border-[#3b424d] bg-transparent px-2 text-[15px]! font-semibold! text-white! transition-all duration-300 hover:border-[#c8ff00] hover:text-[#c8ff00]! active:scale-[0.98] disabled:cursor-not-allowed disabled:border-[#30353d] disabled:text-[#707681]! sm:h-11.5 sm:px-6 sm:text-[12px]"
              >
                <Bookmark size={13} strokeWidth={2.1} className="shrink-0 sm:h-3.5 sm:w-3.5" />
                <span className="truncate">{savedForLater ? "Saved" : "Save for later"}</span>
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}