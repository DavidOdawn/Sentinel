import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("staff");

  const handleLogin = () => {
    // For now we fake it. Later Firebase will check password
    if (role === "admin") navigate("/admin");
    else if (role === "staff") navigate("/staff");
    else navigate("/client");
  };

  return (
    <main style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#121212"}}>
      <div style={{background: "#1d1d1b", padding: "40px", borderRadius: "12px", width: "350px"}}>
        <h2 style={{textAlign: "center", color: "white"}}>Login</h2>
        
        <input type="email" placeholder="Email" style={{width: "100%", padding: "14px", marginBottom: "12px", background: "#2a2a2a", color: "white", border: "1px solid #333", borderRadius: "8px"}} />
        <input type="password" placeholder="Password" style={{width: "100%", padding: "14px", marginBottom: "12px", background: "#2a2a2a", color: "white", border: "1px solid #333", borderRadius: "8px"}} />
        
        <select value={role} onChange={(e) => setRole(e.target.value)} style={{width: "100%", padding: "14px", marginBottom: "20px", background: "#2a2a2a", color: "white", border: "1px solid #333", borderRadius: "8px"}}>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
          <option value="client">Client</option>
        </select>

        <button onClick={handleLogin} style={{width: "100%", padding: "14px", background: "white", color: "#1d1d1b", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer"}}>
          Login
        </button>

        <p style={{textAlign: "center", marginTop: "16px", fontSize: "14px", color: "#aaa"}}>
          Don't have an account? <a href="/signup" style={{color: "white", fontWeight: "bold"}}>Sign up</a>
        </p>
      </div>
    </main>
  );
}