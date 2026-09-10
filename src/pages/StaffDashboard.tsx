import { useNavigate } from "react-router-dom";

const TaskCard = ({task, status}: any) => (
  <div style={{
    background: "rgba(42,42,42,0.6)", padding: "16px", borderRadius: "12px", 
    border: "1px solid #333", backdropFilter: "blur(5px)"
  }}>
    <p style={{margin: 0, fontWeight: "bold"}}>{task}</p>
    <span style={{
      display: "inline-block", marginTop: "8px", padding: "4px 10px", 
      borderRadius: "20px", fontSize: "12px",
      background: status === "Done" ? "#4ade80" : "#a855f7",
      color: "black"
    }}>{status}</span>
  </div>
)

export default function StaffDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{display: "flex", minHeight: "100vh", background: "#0a0a0a", color: "white"}}>
      
      <aside style={{width: "260px", background: "rgba(29,29,27,0.7)", backdropFilter: "blur(10px)", padding: "32px 24px", borderRight: "1px solid #222"}}>
        <h2 style={{fontSize: "24px", marginBottom: "40px", background: "linear-gradient(90deg, #4ade80, #fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Sentinel Staff</h2>
        <nav style={{display: "flex", flexDirection: "column", gap: "8px"}}>
          <button onClick={()=>navigate('/staff')} style={{padding: "12px 16px", background: "#2a2a2a", color: "white", border: "none", borderRadius: "10px", textAlign: "left", fontSize: "16px", width: "100%"}}>My Tasks</button>
          <button onClick={()=>alert('Calendar - Coming Soon')} style={{padding: "12px 16px", background: "transparent", color: "#aaa", border: "none", borderRadius: "10px", textAlign: "left", fontSize: "16px", width: "100%"}}>Calendar</button>
          <button onClick={()=>alert('Reports - Coming Soon')} style={{padding: "12px 16px", background: "transparent", color: "#aaa", border: "none", borderRadius: "10px", textAlign: "left", fontSize: "16px", width: "100%"}}>Reports</button>
          <button onClick={()=>navigate('/login')} style={{padding: "12px 16px", background: "transparent", color: "#ff5555", border: "none", borderRadius: "10px", textAlign: "left", fontSize: "16px", width: "100%", marginTop: "40px"}}>Logout</button>
        </nav>
      </aside>

      <main style={{flex: 1, padding: "40px"}}>
        <h1 style={{fontSize: "32px", margin: 0}}>Welcome Back, Staff</h1>
        <p style={{color: "#aaa", marginBottom: "32px"}}>Here are your tasks for today.</p>
        
        <div style={{display: "grid", gap: "16px"}}>
          <TaskCard task="Review new user applications" status="Pending"/>
          <TaskCard task="Generate weekly analytics report" status="In Progress"/>
          <TaskCard task="Update client documentation" status="Done"/>
        </div>
      </main>
    </div>
  );
}