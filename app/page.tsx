import Translator from "@/components/Translator";
import Welcome from "@/components/ui/welcome";
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="bg-gray-900 mt-20">
      <div className="mx-8">
        <Welcome />
      </div>

      <div className="bg-gray-800 mx-24 shadow-xl my-2 border-4 border-gray-600 rounded-2xl	">
        <Translator />
      </div>
    </div>
  );
}