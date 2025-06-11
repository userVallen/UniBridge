import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserGroupsProvider } from "./contexts/UserGroupsContext";
import { SharedEventProvider } from "./contexts/SharedEventsContext";
import { AuthProvider } from "./contexts/AuthContext";
import Calendar from "./pages/Calendar/Calendar";
import Community from "./pages/Community/Community";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Notice from "./pages/Notice/Notice";
import SignUp from "./pages/SignUp/SignUp";
import BuddyMatching from "./pages/BuddyMatching/BuddyMatching";
import Chat from "./pages/Chat/Chat";
import Landing from "./pages/Landing/Landing";

export default function App() {
  return (
    // <AuthProvider>
    <UserGroupsProvider>
      <SharedEventProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/community" element={<Community />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/buddyMatching" element={<BuddyMatching />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Router>
      </SharedEventProvider>
    </UserGroupsProvider>
    // </AuthProvider>
  );
}
