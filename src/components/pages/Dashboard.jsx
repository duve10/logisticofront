import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../features/userSlice";

const Dashboard = () => {
  const user = useSelector(selectUser) || "";

  return (
    <Container>
      <h1>hola {user.email}</h1>
    </Container>
  );
};

export default Dashboard;
