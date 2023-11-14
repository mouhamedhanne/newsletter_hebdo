import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="">
      <h1 className="font-semibold text-white text-center text-4xl">
        hello world
      </h1>

      <div className="flex justify-center mt-8">
        <Input />
        <Button>Cliquez ici</Button>
      </div>
    </div>
  );
}
