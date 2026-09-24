"use client";

import { useMemo, useState } from "react";
import Container from "@/components/layout/Container";
import PlanMetrics from "@/components/plan/PlanMetrics";
import PlanTabs from "@/components/plan/PlanTabs";
import SortDropdown from "@/components/plan/SortDropdown";
import PlanCard from "@/components/plan/PlanCard";
import EmptyState from "@/components/plan/EmptyState";
import Loader from "@/components/shared/Loader";
import { useFitLog } from "@/context/FitLogContext";

export default function MyPlanPage() {
    const { plan, saved, planTab, setPlanTab, isReady, removeFromPlan, removeFromSaved, markAsDone } = useFitLog();
    const [sortBy, setSortBy] = useState("duration");

    const activeWorkouts = useMemo(() => {
        return planTab === "saved" ? saved : plan;
    }, [planTab, plan, saved]);

    const metrics = useMemo(() => ({
        exercises: activeWorkouts.length,
        minutes: activeWorkouts.reduce((total, workout) => total + (Number(workout.duration) || 0), 0),
        calories: activeWorkouts.reduce((total, workout) => total + (Number(workout.caloriesBurned) || 0), 0),
    }), [activeWorkouts]);

    const sortedWorkouts = useMemo(() => {
        const workouts = [...activeWorkouts];

        return workouts.sort((a, b) => {
            if (sortBy === "calories") return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
            if (sortBy === "rating") return (Number(b.rating) || 0) - (Number(a.rating) || 0);
            return (Number(a.duration) || 0) - (Number(b.duration) || 0);
        });
    }, [activeWorkouts, sortBy]);

    const handleRemove = (id) => {
        if (planTab === "saved") removeFromSaved(id);
        else removeFromPlan(id);
    };

    return (
        <section className="bg-[#0b0d10] py-10 sm:py-12 lg:py-14">
            <Container>
                <div>
                    <h1 className="font-oswald text-[30px] font-semibold uppercase leading-none tracking-[-0.01em] text-[#f5f6f7] sm:text-[34px]">My Plan</h1>
                    <p className="mt-2 text-[13px] leading-5 text-[#8f949e] sm:text-[14px] lg:text-[15px]">Build today&apos;s workout and keep your saved exercises organized.</p>
                </div>

                <div className="mt-7 sm:mt-8">
                    <PlanMetrics exercises={metrics.exercises} minutes={metrics.minutes} calories={metrics.calories} />
                </div>

                <div className="mt-8 flex w-full items-center justify-between gap-2 sm:mt-9 sm:gap-4">
                    <PlanTabs activeTab={planTab} onChange={setPlanTab} />
                    <SortDropdown value={sortBy} onChange={setSortBy} />
                </div>

                <div className="mt-6">
                    {!isReady ? (
                        <Loader />
                    ) : sortedWorkouts.length === 0 ? (
                        <EmptyState activeTab={planTab} />
                    ) : (
                        <div className="space-y-4">
                            {sortedWorkouts.map((workout) => (
                                <PlanCard key={workout.id} workout={workout} type={planTab} onRemove={handleRemove} onMarkDone={markAsDone} />
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}