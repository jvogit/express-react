import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const AppNavBar: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <div className="desktop">
        <DesktopNavBar />
      </div>
      <div className="mobile">
        <MobileNavBar />
      </div>
    </React.Fragment>
  );
};

export default AppNavBar;
