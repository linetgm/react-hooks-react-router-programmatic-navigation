import React from "react";
import { useHistory, Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
  const history = useHistory();
  if (!isLoggedIn) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

export default Home;