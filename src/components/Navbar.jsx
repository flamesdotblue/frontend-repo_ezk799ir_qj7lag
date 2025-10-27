import { Home, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-rose-500 via-orange-500 to-yellow-400 shadow-inner" />
          <span className="text-xl font-bold tracking-tight">ResQMe</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
          <a href="#portals" className="text-gray-600 hover:text-gray-900 transition">Portals</a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">Help</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#user" className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium hover:bg-gray-50">
            <Home className="h-4 w-4" />
            User</a>
          <a href="#admin" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-gray-800">
            <Shield className="h-4 w-4" />
            Admin</a>
        </div>
      </div>
    </header>
  );
}
