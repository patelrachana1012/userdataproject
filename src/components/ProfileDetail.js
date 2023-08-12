import React from "react";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ProfileTabs from "./ProfileTabs";

const ProfilePage = () => {
  const { userId } = useParams();

  return (
    <Container>
      <ProfileTabs />
    </Container>
  );
};

export default ProfilePage;
