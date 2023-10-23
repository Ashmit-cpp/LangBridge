import Translator from "@/components/Translator";
import Welcome from "@/components/ui/welcome";
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div>
        <Welcome />
      <div className="bg-gray-800 mx-4 shadow-xl my-2 border-4 border-gray-600 rounded-2xl	">
        <Translator />
      </div>
    </div>
  );
}