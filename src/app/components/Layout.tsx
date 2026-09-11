import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Command } from "lucide-react";
import { Suspense, lazy, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CommandPalette = lazy(() =>
  import("./CommandPalette").then((m) => ({ default: m.CommandPalette })),
);

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#2a2a2a]">
      <Suspense fallback={null}>
        <CommandPalette />
      </Suspense>
      <nav className="border-b border-[#e5e5e0] bg-[#fafaf8] sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-lg tracking-tight" onClick={closeMobileMenu}>
              Lucas Morais
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link
                to="/"
                className={`text-sm tracking-wide transition-colors ${
                  isActive("/") && location.pathname === "/"
                    ? "text-[#2a2a2a]"
                    : "text-[#888] hover:text-[#2a2a2a]"
                }`}
              >
                Home
              </Link>
              <Link
                to="/work"
                className={`text-sm tracking-wide transition-colors ${
                  isActive("/work")
                    ? "text-[#2a2a2a]"
                    : "text-[#888] hover:text-[#2a2a2a]"
                }`}
              >
                Work
              </Link>
              <Link
                to="/about"
                className={`text-sm tracking-wide transition-colors ${
                  isActive("/about")
                    ? "text-[#2a2a2a]"
                    : "text-[#888] hover:text-[#2a2a2a]"
                }`}
              >
                About
              </Link>
              <Link
                to="/resume"
                className={`text-sm tracking-wide transition-colors ${
                  isActive("/resume")
                    ? "text-[#2a2a2a]"
                    : "text-[#888] hover:text-[#2a2a2a]"
                }`}
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className={`text-sm tracking-wide transition-colors ${
                  isActive("/contact")
                    ? "text-[#2a2a2a]"
                    : "text-[#888] hover:text-[#2a2a2a]"
                }`}
              >
                Contact
              </Link>
              <button
                onClick={() =>
                  document.dispatchEvent(
                    new KeyboardEvent("keydown", { key: "k", metaKey: true }),
                  )
                }
                className="hidden lg:flex items-center gap-1.5 text-xs text-[#888] border border-[#e5e5e0] rounded-sm px-2 py-1 hover:border-[#2a2a2a] hover:text-[#2a2a2a] transition-colors"
                aria-label="Open command palette"
              >
                <Command size={12} />K
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-[#e5e5e0]">
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  className={`text-base tracking-wide transition-colors ${
                    isActive("/") && location.pathname === "/"
                      ? "text-[#2a2a2a]"
                      : "text-[#888]"
                  }`}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="/work"
                  className={`text-base tracking-wide transition-colors ${
                    isActive("/work") ? "text-[#2a2a2a]" : "text-[#888]"
                  }`}
                  onClick={closeMobileMenu}
                >
                  Work
                </Link>
                <Link
                  to="/about"
                  className={`text-base tracking-wide transition-colors ${
                    isActive("/about") ? "text-[#2a2a2a]" : "text-[#888]"
                  }`}
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  to="/resume"
                  className={`text-base tracking-wide transition-colors ${
                    isActive("/resume") ? "text-[#2a2a2a]" : "text-[#888]"
                  }`}
                  onClick={closeMobileMenu}
                >
                  Resume
                </Link>
                <Link
                  to="/contact"
                  className={`text-base tracking-wide transition-colors ${
                    isActive("/contact") ? "text-[#2a2a2a]" : "text-[#888]"
                  }`}
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
