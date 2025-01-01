import Notes from "./Notes/Notes";
import Note from "./Note/Note";

import "./Home.css";

function Home() {
    return (
      <div className="Home">
        <Notes />
        <Note />
      </div>      
    );
}

export default Home;