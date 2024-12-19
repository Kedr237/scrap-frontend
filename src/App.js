import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SignInUp from "./pages/SignInUp/SignInUp";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="auth" element={<SignInUp />} />
          </Routes>
          
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
