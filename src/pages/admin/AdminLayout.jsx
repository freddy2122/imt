import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { supabase, supabaseConfigured } from "../../lib/supabaseClient";
import { useSession } from "../../lib/useSession";
import SupabaseSetupNotice from "../../components/SupabaseSetupNotice";
import "./Admin.css";

function MenuIcon() {
  return (
    <svg viewBox="0 0 20 20" width="22" height="22" fill="none">
      <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" width="22" height="22" fill="none">
      <path d="M4.5 4.5l11 11M15.5 4.5l-11 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
      <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
      <path
        d="M2.5 5.5c0-.83.67-1.5 1.5-1.5h3.4c.4 0 .78.16 1.06.44l1 1a1.5 1.5 0 0 0 1.06.44H16a1.5 1.5 0 0 1 1.5 1.5v6.6c0 .83-.67 1.5-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5v-8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function AdminLayout() {
  const { session, loading: sessionLoading } = useSession();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!sessionLoading && !session && supabaseConfigured) {
      navigate("/admin/login");
    }
  }, [session, sessionLoading, navigate]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin/login");
  }

  if (!supabaseConfigured) return <SupabaseSetupNotice />;
  if (sessionLoading || !session) return null;

  return (
    <div className="admin-shell">
      <aside className={`admin-sidebar${menuOpen ? " admin-sidebar--open" : ""}`}>
        <div className="admin-sidebar__brand">
          <span className="admin-sidebar__logo">IMT</span>
          <span>Panneau Admin</span>
          <button
            type="button"
            className="admin-sidebar__toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <nav className="admin-sidebar__nav">
          <NavLink to="/admin" end className={({ isActive }) => "admin-sidebar__link" + (isActive ? " admin-sidebar__link--active" : "")}>
            <DashboardIcon />
            Tableau de bord
          </NavLink>
          <NavLink
            to="/admin/dossiers"
            className={({ isActive }) => "admin-sidebar__link" + (isActive ? " admin-sidebar__link--active" : "")}
          >
            <FolderIcon />
            Dossiers
          </NavLink>
        </nav>

        <div className="admin-sidebar__user">
          <div className="admin-sidebar__email" title={session.user.email}>
            {session.user.email}
          </div>
          <button className="admin-sidebar__logout" onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
