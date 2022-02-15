import React from "react";
import RecordForm from "./RecordForm";
import Header from "./Header";
import MapDisplay from "./MapDisplay";


function Home() {
  return (
    <div className="main-body">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-4">
          <RecordForm />
        </div>
        <div className="col-8">
          <MapDisplay />
        </div>
      </div>
    </div>
  );
}

export default Home;
