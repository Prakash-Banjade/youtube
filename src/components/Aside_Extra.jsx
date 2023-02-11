import React from "react";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

const Aside_Extra = () => {
  return (
    <div className="extra aside_section">
      <section>
        <ul>
          <li>
            <a href="/">
              <SettingsOutlinedIcon />
              Settings
            </a>
          </li>
          <li>
            <a href="/">
              <FlagOutlinedIcon />
              Report History
            </a>
          </li>
          <li>
            <a href="/">
              <HelpOutlineOutlinedIcon />
              Help
            </a>
          </li>
          <li>
            <a href="/">
              <FeedbackOutlinedIcon />
              Send feedback
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Aside_Extra;
