import { notFound } from "next/navigation";
import WorkoutDetails from "@/components/workout/WorkoutDetails";
import { getWorkoutById } from "@/utils/api";

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
}