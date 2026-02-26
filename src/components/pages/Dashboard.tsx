import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p>
          Welcome to the admin dashboard! Here you can manage your website
          content and settings.
        </p>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Dashboard;
