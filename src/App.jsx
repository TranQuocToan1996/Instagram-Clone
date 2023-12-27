import { Routes, Route, Navigate } from "react-router"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Profile from "./pages/Profile"
import PageLayout from "./layout/PageLayout/PageLayout"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";

function App() {
  const [authUser] = useAuthState(auth);
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/auth"} />} />
        <Route path="/auth" element={!authUser ? <Auth /> : <Navigate to={"/"} />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </PageLayout>
  )
}

export default App
