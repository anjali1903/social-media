import React from "react";
import "../static/assets/Sidebar.css";
import SidebarRow from "./SidebarRow.js";

function Sidebar({ user }) {
  return (
    <div className="sidebar">
      <SidebarRow
        avatar
        ImageLink="https://scontent-maa2-2.xx.fbcdn.net/v/t1.30497-1/c94.0.320.320a/p320x320/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=dbb9e7&_nc_ohc=xJbPAeMXf4wAX8qQk04&_nc_ht=scontent-maa2-2.xx&oh=1cce9c5de9c5a219ebe87da0179d7633&oe=5F51E03D"
        title={user?.displayName}
      />
    </div>
  );
}

export default Sidebar;
