import { User, Wrench, Shield, MessageSquare, MapPin, Clock } from "lucide-react";

const Card = ({ icon: Icon, title, children, anchor }) => (
  <a href={anchor} className="group block rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700 group-hover:bg-orange-100 group-hover:text-orange-700 transition">Enter</span>
    </div>
    <div className="mt-4 text-gray-600 text-sm">
      {children}
    </div>
    <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
      <li className="flex items-center gap-2 text-gray-700"><MapPin className="h-4 w-4 text-orange-600" /> Live location</li>
      <li className="flex items-center gap-2 text-gray-700"><MessageSquare className="h-4 w-4 text-orange-600" /> In-app chat</li>
      <li className="flex items-center gap-2 text-gray-700"><Clock className="h-4 w-4 text-orange-600" /> Real-time status</li>
      <li className="flex items-center gap-2 text-gray-700"><Shield className="h-4 w-4 text-orange-600" /> Verified access</li>
    </ul>
  </a>
);

export default function PortalsGrid() {
  return (
    <section id="portals" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Choose your portal</h2>
          <p className="mt-2 text-gray-600">Dedicated experiences for drivers, garages, and administrators with clear permissions and secure access.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card icon={User} title="User Portal" anchor="#user">
            Request help in seconds, share your live location, pick a nearby garage, and track progress until you’re back on the road.
          </Card>
          <Card icon={Wrench} title="Service Provider Portal" anchor="#provider">
            Manage requests in real-time, navigate to the user, update status, chat, and track performance with simple tools.
          </Card>
          <Card icon={Shield} title="Admin Portal" anchor="#admin">
            Oversee the platform, verify providers, manage users and requests, and access analytics for continuous improvement.
          </Card>
        </div>
      </div>
    </section>
  );
}
