import { MapPin, Wrench, Fuel, Car } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live roadside help, on-demand
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Get help fast when your vehicle lets you down
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-prose">
              ResQMe connects you with trusted local garages for towing, on-site repair, fuel delivery, and more. Stay safe, track progress, and chat in real-time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#user" className="inline-flex items-center justify-center rounded-lg bg-orange-600 text-white px-5 py-3 font-medium shadow hover:bg-orange-700">
                Request Assistance
              </a>
              <a href="#provider" className="inline-flex items-center justify-center rounded-lg border px-5 py-3 font-medium hover:bg-gray-50">
                I’m a Service Provider
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="rounded-xl bg-white p-4 border shadow-sm">
                <dt className="text-gray-500">Coverage</dt>
                <dd className="mt-1 font-semibold">City-wide</dd>
              </div>
              <div className="rounded-xl bg-white p-4 border shadow-sm">
                <dt className="text-gray-500">Avg. response</dt>
                <dd className="mt-1 font-semibold">15 minutes</dd>
              </div>
              <div className="rounded-xl bg-white p-4 border shadow-sm">
                <dt className="text-gray-500">Verified garages</dt>
                <dd className="mt-1 font-semibold">250+</dd>
              </div>
              <div className="rounded-xl bg-white p-4 border shadow-sm">
                <dt className="text-gray-500">Happy drivers</dt>
                <dd className="mt-1 font-semibold">10k+</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-orange-100 via-rose-100 to-amber-100 border shadow-inner flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 p-6 w-full max-w-md">
                <FeaturePill icon={<Wrench className=\"h-4 w-4\" />} label="On-site Mechanic" />
                <FeaturePill icon={<Fuel className=\"h-4 w-4\" />} label="Fuel Delivery" />
                <FeaturePill icon={<Car className=\"h-4 w-4\" />} label="Towing" />
                <FeaturePill icon={<MapPin className=\"h-4 w-4\" />} label="Live Tracking" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/80 backdrop-blur border p-3 shadow-sm">
      <div className="h-8 w-8 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
