import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import PplCard from "./PplCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setUsers(
        await fetch("https://reqres.in/api/users?page=2")
          .then(res => res.json())
          .then(res => res.data)
          .catch(err => console.log(err, "Fetch warning!"))
      );
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>My React App 13</h1>
      <Grid container spacing={10} style={{ padding: "24px" }}>
        {users.map(user => (
          <Grid key={user.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <PplCard 
              key={user.id}
              email={user.email}
              firstName={user.first_name}
              lastName={user.last_name}
              avatar={user.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
