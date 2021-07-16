import React from "react";
import "./styles.scss";

import { cookies } from "@utils";
import { useStore } from "@/store";

const DropdownUser = ({ visibility = false }) => {
  const { clearStore } = useStore();

  function doLogout() {
    cookies.delete("token");
    clearStore();
  }

  if (visibility)
    return (
      <ul className="drop-down">
        <li className="drop-item">account</li>
        <li className="drop-item">Profile</li>
        <li className="drop-item" onClick={doLogout}>
          Log out
        </li>
      </ul>
    );
  else return null;
};

export default DropdownUser;
