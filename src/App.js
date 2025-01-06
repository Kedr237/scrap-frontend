import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Notes from "./pages/Notes/Notes";
import Auth from "./pages/Auth/Auth";
import { refreshTokens } from "./actions/authActions";
import "./App.css";

function App() {
    useEffect(() => {
        const tokensRefreshed = sessionStorage.getItem("tokensRefreshed");

        if (!tokensRefreshed) {
            refreshTokens().then(() => {
                sessionStorage.setItem("tokensRefreshed", "true");
            });
        }
    }, []);

    return (
        <Router>
            <div className="App">
                <Header />
                <main className="main">

                <Routes>
                    <Route path="/" element={<Notes />} />
                    <Route path="auth" element={<Auth />} />
                </Routes>
                
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
