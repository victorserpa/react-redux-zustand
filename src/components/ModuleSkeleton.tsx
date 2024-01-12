import { ChevronDown } from "lucide-react";

export function ModuleSkeleton() {
  return (
    <div className="w-full bg-zinc-800 p-4 cursor-not-allowed">
      <div className="animate-pulse flex  items-center gap-3">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-700 text-xs"></div>

        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-zinc-700 rounded"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className=" h-2 bg-zinc-700 rounded col-span-1"></div>
          </div>
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-700 group-data-[state=open]:rotate-180 transition-transform" />
      </div>
    </div>
  );
}
