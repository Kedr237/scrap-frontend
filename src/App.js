import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Notes from "./pages/Notes/Notes";
import Auth from "./pages/Auth/Auth";
import { refreshTokens } from "./actions/authActions";
import "./App.css";

function App() {
    const authenticated = useSelector((state) => state.auth.authenticated);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function handleStart() {
            if (authenticated === false) {
                await refreshTokens();
            }
            setLoading(false);
        }

        handleStart();
    }, [authenticated]);

    return (
        <Router>
            <div className="App">
                <Header />
                <main className="main">

                    {!loading && 
                        <Routes>
                            <Route
                                path="/"
                                element={authenticated ? <Notes /> : <Navigate to="/auth" />} />
                            <Route
                                path="/auth"
                                element={!authenticated ? <Auth /> : <Navigate to="/" />} />
                        </Routes>
                    }
                
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
