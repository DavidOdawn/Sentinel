import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [role, setRole] = useState("staff");

  const handleSignup = () => {
    alert(`Account created as ${role}! Now go login`);
    navigate("/login");
  };

  return (
    <main style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#121212"}}>
      <div style={{background: "#1d1d1b", padding: "40px", borderRadius: "12px", width: "350px"}}>
        <h2 style={{textAlign: "center", color: "white"}}>Create Account</h2>
        
        <input type="text" placeholder="Full Name" style={{width: "100%", padding: "14px", marginBottom: "12px", background: "#2a2a2a", color: "white", border: "1px solid #333", borderRadius: "8px"}} />
        <input type="email" placeholder="Email" style={{width: "100%", padding: "14px", marginBottom: "12px", background: "#2a2a2a", color: "white", border: "1px solid #333", borderRadius: "8px"}} />
        <input type="password" placeholder="Password" style={{width: "100%", padding: "14px", marginBottom: "12px", background: "#2a2a2a", color: "white", border: "1px solid #333", borderRadius: "8px"}} />
        
        <select value={role} onChange={(e) => setRole(e.target.value)} style={{width: "100%", padding: "14px", marginBottom: "20px", background: "#2a2a2a", color: "white", border: "1px solid #333", borderRadius: "8px"}}>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
          <option value="client">Client</option>
        </select>

        <button onClick={handleSignup} style={{width: "100%", padding: "14px", background: "white", color: "#1d1d1b", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer"}}>
          Sign Up
        </button>

        <p style={{textAlign: "center", marginTop: "16px", fontSize: "14px", color: "#aaa"}}>
          Already have an account? <a href="/login" style={{color: "white", fontWeight: "bold"}}>Login</a>
        </p>
      </div>
    </main>
  );
}