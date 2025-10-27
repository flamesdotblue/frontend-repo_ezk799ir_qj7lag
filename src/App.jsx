import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortalsGrid from "./components/PortalsGrid";
import Footer from "./components/Footer";
import { ArrowRight, MessageSquare, MapPin, Star } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <PortalsGrid />

        <section id="user" className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">For Drivers</h3>
                <p className="mt-2 text-gray-600">Create a request in seconds, share your live location, choose a nearby garage or auto-assign the closest one, and chat until help arrives.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange-600" /> GPS-based location sharing</li>
                  <li className="flex items-center gap-2"><MessageSquare className="h-4 w-4 text-orange-600" /> Real-time chat and updates</li>
                  <li className="flex items-center gap-2"><Star className="h-4 w-4 text-orange-600" /> Rate and review services</li>
                </ul>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 text-white px-5 py-3 font-medium shadow hover:bg-orange-700">
                    Open User Portal <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h4 className="font-semibold">Popular services</h4>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <Tag>Flat Tire Repair</Tag>
                  <Tag>Towing</Tag>
                  <Tag>Fuel Delivery</Tag>
                  <Tag>On-site Mechanic</Tag>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="provider" className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 rounded-2xl border bg-white p-6 shadow-sm">
                <h4 className="font-semibold">At a glance</h4>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <Badge>Availability toggle</Badge>
                  <Badge>Nearby requests</Badge>
                  <Badge>ETA sharing</Badge>
                  <Badge>Earnings summary</Badge>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold tracking-tight">For Service Providers</h3>
                <p className="mt-2 text-gray-600">Receive nearby requests when you are online, accept jobs, navigate to the driver, update each stage, and keep communication clear.</p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-medium hover:bg-gray-50">
                    Open Provider Portal <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="admin" className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">For Administrators</h3>
                <p className="mt-2 text-gray-600">Monitor platform health at a glance: approve providers, manage users, track requests, and view actionable analytics.</p>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 font-medium hover:bg-gray-800">
                    Open Admin Portal <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h4 className="font-semibold">Key controls</h4>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <Badge>Provider approvals</Badge>
                  <Badge>Request reassignment</Badge>
                  <Badge>Suspensions</Badge>
                  <Badge>Reports & logs</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold tracking-tight">Help & FAQs</h3>
            <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div className="rounded-xl border p-4 bg-white">
                <p className="font-semibold">Is my location shared securely?</p>
                <p className="mt-2 text-gray-600">Yes. Your live location is shared only with the assigned provider for the duration of the request.</p>
              </div>
              <div className="rounded-xl border p-4 bg-white">
                <p className="font-semibold">Can I change or cancel a request?</p>
                <p className="mt-2 text-gray-600">You can modify details or cancel any active request before it is completed.</p>
              </div>
              <div className="rounded-xl border p-4 bg-white">
                <p className="font-semibold">How are providers verified?</p>
                <p className="mt-2 text-gray-600">New garages are reviewed and must be approved before they can accept requests.</p>
              </div>
              <div className="rounded-xl border p-4 bg-white">
                <p className="font-semibold">Do you support ratings and reviews?</p>
                <p className="mt-2 text-gray-600">After completion, drivers can rate their experience and leave feedback to help improve quality.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-2 shadow-sm">
      <span className="h-2 w-2 rounded-full bg-orange-500" />
      {children}
    </span>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
      {children}
    </span>
  );
}
