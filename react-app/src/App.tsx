import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const items = ["Solapur", "Mumbai", "Pune", "Delhi", "Bangalore"];

  const [visible, setVisibile] = useState(false);

  return (
    <div>
      {visible && <Alert onClose={() => setVisibile(false)} />}
      <ListGroup items={items} heading="Cities" />
      <Button
        color="success"
        children="Submit"
        onClick={() => setVisibile(true)}
      />
    </div>
  );
}

export default App;
