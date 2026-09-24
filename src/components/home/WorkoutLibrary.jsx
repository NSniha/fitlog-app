"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import Loader from "@/components/shared/Loader";
import WorkoutCard from "./WorkoutCard";
import { getWorkouts } from "@/utils/api";

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch {
        setError("Unable to load workouts. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  return (
    <section id="library" className="scroll-mt-25 bg-[#0b0d10] pb-20 pt-6 sm:pb-24 sm:pt-8 lg:pb-28 lg:pt-10">
      <Container>
        <div className="mb-8 sm:mb-9">
          <h2 className="font-oswald text-[30px] font-semibold uppercase leading-none text-[#f5f6f7] sm:text-[34px]">
            The Library
          </h2>

          <p className="mt-2 text-[13px] leading-5 text-[#8c929d] sm:text-[14px]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {loading && <Loader />}

        {!loading && error && (
          <div className="flex min-h-65 items-center justify-center rounded-[14px] border border-dashed border-[#30353e]">
            <p className="text-center text-[14px] text-[#9aa0aa]">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}