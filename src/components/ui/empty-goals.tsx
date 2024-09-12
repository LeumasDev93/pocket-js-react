import logo from "../../assets/logo-in-orbit.svg";
import lestsStart from "../../assets/lets-start-illustration.svg";
import { Plus } from "lucide-react";
import { Button } from "./button";
import { DialogTrigger } from "./dialog";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={lestsStart} alt="lestsStart" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
