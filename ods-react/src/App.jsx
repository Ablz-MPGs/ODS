import { Routes, Route, Navigate, useParams } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import GalleryPage from "./pages/GalleryPage"
import TasksPage from "./pages/TasksPage"
import StatusPage from "./pages/StatusPage"

function GalleryWrapper() {
  const { targetId } = useParams()
  return <GalleryPage key={targetId || "galeria"} targetId={targetId} />
}

function StatusWrapper() {
  const { targetId } = useParams()
  return <StatusPage key={targetId || "status"} targetId={targetId} />
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" replace />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/galeria" element={<GalleryWrapper />} />
          <Route path="/galeria/:targetId" element={<GalleryWrapper />} />
          <Route path="/status" element={<StatusWrapper />} />
          <Route path="/status/:targetId" element={<StatusWrapper />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="*" element={<Navigate to="/inicio" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
