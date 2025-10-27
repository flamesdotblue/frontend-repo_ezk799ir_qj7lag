import { Github, Mail, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-rose-500 via-orange-500 to-yellow-400" />
              <span className="font-semibold">ResQMe</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 max-w-sm">A platform that connects drivers to nearby, verified garages for safe, fast roadside assistance with real-time updates.</p>
          </div>
          <div>
            <h4 className="font-semibold">Demo credentials</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>Driver: driver@example.com / demo1234</li>
              <li>Provider: garage@example.com / demo1234</li>
              <li>Admin: admin@example.com / demo1234</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@resqme.app</li>
              <li className="flex items-center gap-2"><Shield className="h-4 w-4" /> Privacy & Security First</li>
              <li className="flex items-center gap-2"><Github className="h-4 w-4" /> Public roadmap</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} ResQMe. All rights reserved.</div>
      </div>
    </footer>
  );
}
