import { Badge } from "./Badge";
import { Game } from "./Game";

export function GamesList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="relative">
        <Badge />
        <Game />
      </div>

      <div className="relative">
        <Badge />
        <Game />
      </div>

      <div className="relative">
        <Badge />
        <Game />
      </div>
      <div className="relative">
        <Badge />
        <Game />
      </div>
    </div>
  );
}
