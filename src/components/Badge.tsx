import { Star } from "lucide-react";

export function Badge() {
  return (
    <div className="absolute flex gap-1 -top-2 -right-2 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
      <Star size={16} className="text-primary" />
      <h1 className="font-bold text-sm uppercase text-primary">Top</h1>
    </div>
  );
}
