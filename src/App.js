import { Register } from "./Register";
import { Login } from "./Login";
import { SubscriptionForm } from "./SubscriptionForm";
import { WebhookList } from "./WebhooksList";
import { Events } from "./Events";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import { useContext } from "react";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {!isAuthenticated && (
          <>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </>
        )}
        {isAuthenticated && (
          <>
            <Route path='/subscribe' element={<SubscriptionForm />} />
            <Route path='/webhookList' element={<WebhookList />} />
            <Route path='/events' element={<Events />} />
          </>
        )}
         <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
