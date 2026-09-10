import { useNavigate } from "react-router-dom";

const ServiceCard = ({title, desc}: any) => (
  <div style={{
    background: "rgba(42,42,42,0.6)", padding: "24px", borderRadius: "16px", 
    border: "1px solid #333", backdropFilter: "blur(5px)", textAlign: "center"
  }}>
    <h3 style={{margin: "0 0 8px 0"}}>{title}</h3>
    <p style={{color: "#aaa", fontSize: "14px", margin: "0 0 16px 0"}}>{desc}</p>
    <button onClick={()=>alert(`${title} - Coming Soon`)} style={{padding: "10px 20px", background: "linear-gradient(90deg, #3b82f6, #2563eb)", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold"}}>View</button>
  </div>
)

export default function ClientDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{display: "flex", minHeight: "100vh", background: "#0a0a0a", color: "white"}}>
      
      <aside style={{width: "260px", background: "rgba(29,29,27,0.7)", backdropFilter: "blur(10px)", padding: "32px 24px", borderRight: "1px solid #222"}}>
        <h2 style={{fontSize: "24px", marginBottom: "40px", background: "linear-gradient(90deg, #3b82f6, #fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Sentinel Client</h2>
        <nav style={{display: "flex", flexDirection: "column", gap: "8px"}}>
          <button onClick={()=>navigate('/client')} style={{padding: "12px 16px", background: "#2a2a2a", color: "white", border: "none", borderRadius: "10px", textAlign: "left", fontSize: "16px", width: "100%"}}>Dashboard</button>
          <button onClick={()=>alert('Billing - Coming Soon')} style={{padding: "12px 16px", background: "transparent", color: "#aaa", border: "none", borderRadius: "10px", textAlign: "left", fontSize: "16px", width: "100%"}}>Billing</button>
          <button onClick={()=>alert('Support - Coming Soon')} style={{padding: "12px 16px", background: "transparent", color: "#aaa", border: "none", borderRadius: "10px", textAlign: "left", fontSize: "16px", width: "100%"}}>Support</button>
          <button onClick={()=>navigate('/login')} style={{padding: "12px 16px", background: "transparent", color: "#ff5555", border: "none", borderRadius: "10px", textAlign: "left", fontSize: "16px", width: "100%", marginTop: "40px"}}>Logout</button>
        </nav>
      </aside>

      <main style={{flex: 1, padding: "40px"}}>
        <h1 style={{fontSize: "32px", margin: 0}}>Client Dashboard</h1>
        <p style={{color: "#aaa", marginBottom: "32px"}}>Manage your services and account.</p>
        
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px"}}>
          <ServiceCard title="Active Subscription" desc="Pro Plan - Renews Oct 10"/>
          <ServiceCard title="Usage Analytics" desc="View your monthly stats"/>
          <ServiceCard title="Account Settings" desc="Update profile & password"/>
        </div>
      </main>
    </div>
  );
}