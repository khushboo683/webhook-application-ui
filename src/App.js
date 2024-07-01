import { Register } from "./Register";
import { Login } from "./Login";
import { SubscriptionForm } from "./SubscriptionForm";
import { WebhookList } from "./WebhooksList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
    <Route
    path='/register'
    element={<Register/>}
    ></Route>
    <Route
    path='/login'
    element={<Login/>}
    ></Route>
    <Route
    path='/subscribe'
    element={<SubscriptionForm/>}
    ></Route>
    <Route
    path='/webhookList'
    element={<WebhookList/>}
    ></Route>
    </Routes>
    </Router>
  
  );
}

export default App;
