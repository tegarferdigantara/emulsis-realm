import React, { useState } from "react";
import {
  Menu,
  X,
  Sword,
  Shield,
  Users,
  Download,
  User as UserIcon,
  ChevronDown,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Fungsi untuk handle nav agar bisa scroll ke section dari halaman lain
  const handleNav = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-red-900/40 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-1 sm:px-4 lg:px-6">
        <div className="flex items-center h-14 sm:h-16 w-full justify-between gap-2 sm:gap-4">
          {/* Logo di pojok kiri */}
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0 select-none">
            <Sword className="w-5 h-5 sm:w-7 sm:h-7 text-red-500 drop-shadow-glow" />
            <span className="text-base sm:text-xl font-extrabold text-transparent bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text font-gaming tracking-widest drop-shadow-glow px-0.5 sm:px-1">
              ROHAN EMULSIS
            </span>
          </div>
          {/* Nav di tengah */}
          <nav className="hidden lg:flex space-x-2 flex-1 justify-center whitespace-nowrap text-sm">
            <a
              href="/#home"
              onClick={handleNav("#home")}
              className="relative text-gray-200 hover:text-red-400 transition-all duration-300 font-semibold uppercase tracking-wide px-2 py-1 after:content-[''] after:block after:h-0.5 after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Home
            </a>
            <Link
              to="/server"
              className="relative text-gray-200 hover:text-red-400 transition-all duration-300 font-semibold uppercase tracking-wide px-2 py-1 after:content-[''] after:block after:h-0.5 after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Server Info
            </Link>
            <Link
              to="/topup"
              className="relative text-gray-200 hover:text-red-400 transition-all duration-300 font-semibold uppercase tracking-wide px-2 py-1 after:content-[''] after:block after:h-0.5 after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Donation
            </Link>
            <Link
              to="/mall"
              className="relative text-gray-200 hover:text-red-400 transition-all duration-300 font-semibold uppercase tracking-wide px-2 py-1 after:content-[''] after:block after:h-0.5 after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Item Mall
            </Link>
            <Link
              to="/exchange"
              className="relative text-gray-200 hover:text-red-400 transition-all duration-300 font-semibold uppercase tracking-wide px-2 py-1 after:content-[''] after:block after:h-0.5 after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Exchange Mall
            </Link>
            <Link
              to="/download"
              className="relative text-gray-200 hover:text-red-400 transition-all duration-300 font-semibold uppercase tracking-wide px-2 py-1 after:content-[''] after:block after:h-0.5 after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left md:mr-8"
            >
              Download
            </Link>
          </nav>
          {/* Tombol Login/Register di pojok kanan */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <Link
              to="/login"
              className="flex items-center gap-2 border-2 border-red-600 text-red-400 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:text-white px-5 py-2 rounded-lg transition-all duration-300 font-gaming font-bold hover:text-glow hover:shadow-lg hover:shadow-red-500/30 transform hover:scale-105 text-sm shadow-md"
            >
              <Shield className="w-4 h-4" /> Login
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-2 border-2 border-orange-500 text-orange-400 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white px-5 py-2 rounded-lg transition-all duration-300 font-gaming font-bold hover:text-glow hover:shadow-lg hover:shadow-orange-500/30 transform hover:scale-105 text-sm shadow-md"
            >
              <Users className="w-4 h-4" /> Register
            </Link>
            {/* User Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition-all font-gaming text-sm"
                onClick={() => setUserDropdown((v) => !v)}
              >
                <UserIcon className="w-5 h-5" />
                <ChevronDown className="w-4 h-4" />
              </button>
              {userDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-black border border-gray-700 rounded-lg shadow-lg z-50 animate-fade-in-down">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-200 hover:bg-gray-800 transition-all font-fantasy"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-gray-200 hover:bg-gray-800 transition-all font-fantasy"
                  >
                    User Setting
                  </Link>
                  <button className="block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-800 transition-all font-fantasy">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            className="lg:hidden text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 border-t border-red-900/30 backdrop-blur-xl rounded-b-xl shadow-lg animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-200 hover:text-red-400 font-semibold uppercase tracking-wide transition-all"
                onClick={handleNav("#home")}
              >
                Home
              </a>
              <Link
                to="/server"
                className="block px-3 py-2 text-gray-200 hover:text-red-400 font-semibold uppercase tracking-wide transition-all"
              >
                Server Info
              </Link>
              <Link
                to="/topup"
                className="block px-3 py-2 text-gray-200 hover:text-red-400 font-semibold uppercase tracking-wide transition-all"
              >
                Donation
              </Link>
              <Link
                to="/mall"
                className="block px-3 py-2 text-gray-200 hover:text-red-400 font-semibold uppercase tracking-wide transition-all"
              >
                Item Mall
              </Link>
              <Link
                to="/exchange"
                className="block px-3 py-2 text-gray-200 hover:text-red-400 font-semibold uppercase tracking-wide transition-all"
              >
                Exchange Mall
              </Link>
              <Link
                to="/download"
                className="block px-3 py-2 text-gray-200 hover:text-red-400 font-semibold uppercase tracking-wide transition-all"
              >
                Download
              </Link>
              <div className="flex space-x-2 px-3 py-2 mt-2">
                <Link
                  to="/login"
                  className="flex-1 flex items-center justify-center border border-red-600 text-red-400 px-4 py-2 rounded-lg font-gaming font-bold hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:text-white transition-all text-sm gap-2"
                >
                  <Shield className="w-4 h-4" /> Login
                </Link>
                <Link
                  to="/register"
                  className="flex-1 flex items-center justify-center border border-orange-500 text-orange-400 px-4 py-2 rounded-lg font-gaming font-bold hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all text-sm gap-2"
                >
                  <Users className="w-4 h-4" /> Register
                </Link>
              </div>
              {/* Mobile user dropdown */}
              <div className="relative w-full mt-2">
                <button
                  className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition-all font-gaming text-sm w-full justify-center"
                  onClick={() => setUserDropdown((v) => !v)}
                >
                  <UserIcon className="w-5 h-5" />
                  <ChevronDown className="w-4 h-4" />
                </button>
                {userDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-black border border-gray-700 rounded-lg shadow-lg z-50 animate-fade-in-down">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-200 hover:bg-gray-800 transition-all font-fantasy"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-200 hover:bg-gray-800 transition-all font-fantasy"
                    >
                      User Setting
                    </Link>
                    <button className="block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-800 transition-all font-fantasy">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
