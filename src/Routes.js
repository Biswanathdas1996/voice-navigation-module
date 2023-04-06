import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Gallary from "./Pages/Gallary";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import ContactUs from "./Pages/ContactUs";

class Routing extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/gallary" element={<Gallary />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/profile/settings" element={<Settings />} />

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Routes>
    );
  }
}

export default Routing;
