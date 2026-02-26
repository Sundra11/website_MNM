import { Navigate } from "react-router-dom";
import { useEffect, useState, type JSX } from "react";
import { supabase } from "../lib/supabase";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!session) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default ProtectedRoute;