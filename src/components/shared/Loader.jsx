export default function Loader() {
  return (
    <div className="flex min-h-65 flex-col items-center justify-center gap-4">
      <span className="loading loading-spinner loading-lg text-[#c8ff00]" />
      <p className="text-[14px] font-medium text-[#8f949e]">Loading workouts...</p>
    </div>
  );
}