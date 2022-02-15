import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Leftbar from "./components/Leftbar";
import Home from "./components/Home";
import { ObsContext } from "./Providers/ObservationRecordProvider";

function App() {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false)

  return (
    <ObsContext.Provider value={sideBarCollapsed, setSideBarCollapsed}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Leftbar />
          </div>
          <div className="col-10">
            <Home />
          </div>
        </div>
      </div>
    </ObsContext.Provider>
  );
}

export default App;
