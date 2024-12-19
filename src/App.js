import "./App.css";
import Header from "./blocks/Header/Header";
import Notes from "./blocks/Notes/Notes";
import Note from "./blocks/Note/Note";
import Footer from "./blocks/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Notes />
        <div className="container">
          <Note />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
