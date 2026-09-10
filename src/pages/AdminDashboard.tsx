import { useNavigate } from "react-router-dom";

const StatCard = ({title, value, color}: any) => (
  <div className="card" style={{
    background: "linear-gradient(135deg, #1d1d1b 0%, #2a2a2a 100%)", 
    padding: "24px", borderRadius: "16px", border: `1px solid ${color}33`,
    boxShadow: `0 0 20px ${color}22`, transition: "0.3s"
  }}>
    <p style={{color: "#aaa", fontSize: "14px", margin: 0}}>{title}</p>
    <h2 style={{fontSize: "32px", margin: "8px 0 0 0", color: color}}>{value}</h2>
  </div>
)

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{display: "flex", minHeight: "100vh", background: "#0a0a0a", color: "white"}}>
      <aside style={{width: "260px", background: "rgba(29,29,27,0.7)", backdropFilter: "blur(10px)", padding: "32px 24px", borderRight: "1px solid #222"}}>
        <h2 style={{fontSize: "24px", marginBottom: "40px", background: "linear-gradient(90deg, #a855f7, #fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Sentinel Admin</h2>
        <nav style={{display: "flex", flexDirection: "column", gap: "8px"}}>
          <button onClick={()=>navigate('/admin')} style={{padding: "12px 16px", background: "#2a2a2a", color: "white", border: "none", borderRadius: "10px", textAlign: "left", fontSize: "16px", width: "100%"}}>Dashboard</button>
          <button onClick={()=>alert('Manage Users - Coming Soon')} style={{padding: "12px 16px", background: "transparent", color: "#aaa", border: "none", borderRadius: "10px", textAlign: "left", fontSize: "16px", width: "100%"}}>Manage Users</button>
          <button onClick={()=>alert('Analytics - Coming Soon')} style={{padding: "12px 16px", background: "transparent", color: "#aaa", border: "none", borderRadius: "10px", textAlign: "left", fontSize: "16px", width: "100%"}}>Analytics</button>
          <button onClick={()=>alert('Settings - Coming Soon')} style={{padding: "12px 16px", background: "transparent", color: "#aaa", border: "none", borderRadius: "10px", textAlign: "left", fontSize: "16px", width: "100%"}}>Settings</button>
          <button onClick={()=>navigate('/login')} style={{padding: "12px 16px", background: "transparent", color: "#ff5555", border: "none", borderRadius: "10px", textAlign: "left", fontSize: "16px", width: "100%", marginTop: "40px"}}>Logout</button>
        </nav>
      </aside>

      <main style={{flex: 1, padding: "40px"}}>
        <h1 style={{fontSize: "32px", margin: 0}}>Admin Dashboard</h1>
        <p style={{color: "#aaa", marginBottom: "32px"}}>Full control of the Sentinel system.</p>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px"}}>
          <StatCard title="Total Users" value="342" color="#a855f7"/>
          <StatCard title="Monthly Revenue" value="$24,500" color="#4ade80"/>
          <StatCard title="System Alerts" value="2" color="#f87171"/>
        </div>
        <button onClick={()=>alert('Add New User clicked')} style={{marginTop: "40px", padding: "14px 28px", background: "linear-gradient(90deg, #a855f7, #9333ea)", color: "white", border: "none", borderRadius: "12px", fontWeight: "bold", fontSize: "16px"}}>
          + Add New User
        </button>
      </main>
    </div>
  );
}