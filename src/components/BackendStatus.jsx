import { useEffect, useState } from "react";
import { Server, RefreshCw } from "lucide-react";

export default function BackendStatus() {
  const [status, setStatus] = useState({ loading: true, ok: false, db: "Unknown" });

  useEffect(() => {
    const controller = new AbortController();
    const base = import.meta.env.VITE_BACKEND_URL?.replace(/\/?$/, "") || "";
    const url = `${base}/test`;

    async function run() {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        setStatus({ loading: false, ok: true, db: data.database || "OK" });
      } catch (e) {
        setStatus({ loading: false, ok: false, db: "Unavailable" });
      }
    }

    run();
    return () => controller.abort();
  }, []);

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-3 text-sm">
        <div className={`h-5 w-5 rounded-md flex items-center justify-center ${status.ok ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
          {status.loading ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Server className="h-3.5 w-3.5" />}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Backend:</span>
          {status.loading ? (
            <span className="text-gray-600">Checking...</span>
          ) : status.ok ? (
            <span className="text-emerald-700">Online</span>
          ) : (
            <span className="text-amber-700">Offline</span>
          )}
          <span className="text-gray-400">•</span>
          <span className="text-gray-700">DB:</span>
          <span className={`${status.db.includes("✅") ? "text-emerald-700" : "text-gray-700"}`}>{status.db}</span>
        </div>
      </div>
    </div>
  );
}
