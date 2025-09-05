import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sink")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="flex flex-col gap-10 items-center mt-10">
      <div className="flex items-center">
        <div className="flex-shrink-0 flex items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <span className="text-white font-bold text-xl">IN</span>
          </div>
          <div className="ml-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              InternNexus
            </span>
            <div className="text-xs text-gray-500 font-medium">
              Powered by PM Scheme
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex-shrink-0 flex items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <span className="text-white font-bold text-xl">IN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
