import { Dialog } from "./components/ui/dialog";

import { CreateGoal } from "./components/ui/create-goal";
import { Summary } from "./components/ui/summary";
import { EmptyGoals } from "./components/ui/empty-goals";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./http/get-summary";
import { Loader2 } from "lucide-react";

export function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
  });

  if (isLoading || !data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="text-zinc-500 animate-spin size-10" />
      </div>
    );
  }

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  );
}
