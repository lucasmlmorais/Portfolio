import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-5xl sm:text-6xl mb-4 sm:mb-6 tracking-tight">404</h1>
        <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4 tracking-tight">Page not found</h2>
        <p className="text-sm sm:text-base text-[#666] mb-6 sm:mb-8 max-w-md px-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2a2a2a] text-[#fafaf8] rounded-sm hover:bg-[#444] transition-colors text-sm sm:text-base"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </div>
  );
}
