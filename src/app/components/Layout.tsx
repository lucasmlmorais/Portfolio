import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
      <nav className="border-b border-[#e5e5e0] bg-[#fafaf8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-lg tracking-tight" onClick={closeMobileMenu}>
              Portfolio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 lg:gap-8">
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
        <Outlet />
      </main>
    </div>
  );
}
