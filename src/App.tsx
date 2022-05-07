import React, { useEffect, useState } from "react";
import "./App.css";
import { Leftbar } from "./containers/Leftbar/Leftbar";
import { ContentDetail } from "./containers/ContentDetail/ContentDetail";
import { Header } from "./containers/Header/Header";
import { ExerciseProvider } from "./context/ExerciseContext";

function App() {
  const [exerciseList, setExerciseList] = useState(null);

  useEffect(() => {
    fetch("https://candidate.staging.future.co/sandbox/api/exercises")
      .then((res) => res.json())
      .then((data) => {
        setExerciseList(data);
      });
  }, []);

  return (
    <ExerciseProvider>
      <div className="App">
        <div className="app-wrapper">
          <Header />
          <Leftbar exerciseList={exerciseList} />
          <ContentDetail />
        </div>
      </div>
    </ExerciseProvider>
  );
}

export default App;
