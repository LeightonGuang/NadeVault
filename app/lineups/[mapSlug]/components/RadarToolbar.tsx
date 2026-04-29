import Link from "next/link";

interface RadarToolbarProps {
  isReadOnly: boolean;
  pointsLength: number;
  mapSlug: string;
  isAdmin: boolean;
  onUndo: () => void;
  onClear: () => void;
}

const RadarToolbar = ({
  isReadOnly,
  pointsLength,
  mapSlug,
  isAdmin,
  onUndo,
  onClear,
}: RadarToolbarProps) => {
  if (!isReadOnly) {
    return (
      <div className="absolute top-4 left-4 z-20 flex gap-2">
        <Link
          href={`/lineups/${mapSlug}${isAdmin ? "?admin=true" : ""}`}
          className="rounded-lg border border-white/10 bg-zinc-900/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:cursor-pointer hover:bg-white/20"
        >
          Back to View
        </Link>
        <button
          onClick={onUndo}
          disabled={pointsLength === 0}
          className="rounded-lg border border-white/10 bg-zinc-900/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:cursor-pointer hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Undo
        </button>
        <button
          onClick={onClear}
          disabled={pointsLength === 0}
          className="rounded-lg border border-white/10 bg-zinc-900/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:cursor-pointer hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clear Map
        </button>
      </div>
    );
  }

  if (isAdmin) {
    return (
      <div className="absolute top-4 left-4 z-20 flex gap-2">
        <Link
          href={`/lineups/${mapSlug}/edit?admin=true`}
          className="rounded-lg border border-white/10 bg-zinc-900/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:cursor-pointer hover:bg-white/20"
        >
          Edit Lineup
        </Link>
      </div>
    );
  }

  return null;
};

export default RadarToolbar;
