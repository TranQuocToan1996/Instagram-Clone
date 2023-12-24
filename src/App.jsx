import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import PageLayout from "./layout/PageLayout/PageLayout"

function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </PageLayout>
  )
}

export default App
