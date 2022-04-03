import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faUsers, faUserCheck, faUserSlash, faHome, faBell, faMagnifyingGlass, faArrowDown, faListAlt, faArrowUp, faEye, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import UserList from "./components/UserList";


library.add(faEnvelope,faUsers, faUserCheck, faUserSlash, faArrowDown, faHome,faMagnifyingGlass, faArrowTrendUp, faBell, faListAlt, faArrowUp, faEye);

function App() {
return (
<div>
<Topbar />
  <Router>
  <div className="container">
  <Sidebar />
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
</div>
  </Router>
</div>
);
}

export default App;
