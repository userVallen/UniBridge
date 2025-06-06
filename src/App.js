import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserGroupsProvider } from "./contexts/UserGroupsContext";
import { SharedEventProvider } from "./contexts/SharedEventsContext";
import Calendar from "./pages/Calendar/Calendar";
import Community from "./pages/Community/Community";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Notice from "./pages/Notice/Notice";
import SignUp from "./pages/SignUp/SignUp";
import BuddyMatching from "./pages/BuddyMatching/BuddyMatching";

export default function App() {
  return (
    <UserGroupsProvider>
      <SharedEventProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/community" element={<Community />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/buddyMatching" element={<BuddyMatching />} />
          </Routes>
        </Router>
      </SharedEventProvider>
    </UserGroupsProvider>
  );
}
