import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import ProfileDetail from "./components/ProfileDetail";
import { ThemeProvider, CssBaseline } from "@mui/material";
import CommentsDialog from "./components/CommentsDialog";
import Sidebar from "./components/Sidebar";
import theme from "./components/theme";
import ContactDetail from "./components/ContactDetail";
import About from "./components/About";
import Footer from "./components/Footer";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/profile/:userId" element={<ProfileDetail />} />
          <Route path="/post/:postId" element={<CommentsDialog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactDetail />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
