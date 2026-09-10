import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#fbfaf7", fontFamily: "system-ui"}}>
      <h1 style={{fontSize: "64px", margin: 0, color: "#1d1d1b", fontWeight: 800}}>Sentinel</h1>
      <p style={{fontSize: "20px", color: "#555", marginTop: "12px"}}>Working smart, Moving fast</p>
      <button 
        onClick={() => navigate("/login")}
        style={{padding: "14px 32px", background: "#1d1d1b", color: "white", border: "none", borderRadius: "10px", marginTop: "24px", fontSize: "16px", cursor: "pointer"}}
      >
        Get started
      </button>
    </main>
  );
}