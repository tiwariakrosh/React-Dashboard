import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";


import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faHome, faBell, faArrowDown, faListAlt, faArrowUp, faEye, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';


library.add(faEnvelope, faArrowDown, faHome, faArrowTrendUp, faBell, faListAlt, faArrowUp, faEye);

function App() {
return (
<div>
  <Topbar />
  <div className="container">
  <Sidebar />
   <Home />
  </div>
</div>
);
}

export default App;
