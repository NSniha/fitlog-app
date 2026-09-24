import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      aria-label={`View details for ${workout.name}`}
      className="group overflow-hidden rounded-[14px] border border-[#292d35] bg-[#15181e] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#3b424d] hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
    >
      <div className="relative h-52.5 w-full overflow-hidden sm:h-55 lg:h-51.25 xl:h-53.75">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
        />
      </div>

      <div className="flex min-h-43 flex-col px-6 py-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#c8ff00] px-3 py-1.25 text-[10px] font-extrabold uppercase leading-none text-[#090b0d]"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="font-oswald text-[18px] font-semibold uppercase leading-tight tracking-[0.01em] text-[#f5f6f7] transition-colors duration-300 group-hover:text-[#c8ff00]">
          {workout.name}
        </h3>

        <p className="mt-2 text-[12px] leading-5 text-[#858b96]">
          {workout.equipment}
        </p>

        <div className="mt-auto border-t border-[#262b33] pt-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-[#9298a3]">
            <span className="flex items-center gap-1.5">
              <Clock3 size={14} strokeWidth={1.8} />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1.5">
              <Flame size={14} strokeWidth={1.8} />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1.5">
              <Star size={14} strokeWidth={1.8} />
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}