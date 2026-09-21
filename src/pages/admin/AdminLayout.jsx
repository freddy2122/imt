import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { supabase, supabaseConfigured } from "../../lib/supabaseClient";
import { useSession } from "../../lib/useSession";
import SupabaseSetupNotice from "../../components/SupabaseSetupNotice";
import "./Admin.css";

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

  useEffect(() => {
    if (!sessionLoading && !session && supabaseConfigured) {
      navigate("/admin/login");
    }
  }, [session, sessionLoading, navigate]);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin/login");
  }

  if (!supabaseConfigured) return <SupabaseSetupNotice />;
  if (sessionLoading || !session) return null;

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <span className="admin-sidebar__logo">IMT</span>
          <span>Panneau Admin</span>
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
