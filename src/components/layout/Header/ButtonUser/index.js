import React, { useState } from "react";
import "./styles.scss";

import { useStore } from "@/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import DropdownUser from "../DropdownUser";
import defaultCover from "@/assets/default-cover.webp";

const HeaderButtonUser = () => {
  const { user } = useStore();
  const [dropVisibility, setDropVisibility] = useState(false);

  function toggleDropdown(e) {
    e.stopPropagation();

    setDropVisibility(!dropVisibility);
    if (!dropVisibility) document.addEventListener("click", closeDropdown);
  }

  function closeDropdown(e) {
    e.stopPropagation();

    setDropVisibility(false);
    document.removeEventListener("click", closeDropdown);
  }

  return user ? (
    <button className={`btn-user ${dropVisibility ? "drop-is-open" : ""}`} onClick={toggleDropdown}>
      <div className="profile-pic-container">
        <img
          src={user.profilePic}
          alt="Profile"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultCover;
          }}
        />
      </div>

      <span className="user-name">{user.name}</span>

      <FontAwesomeIcon
        className={`triangle-icon ${dropVisibility ? "drop-is-open" : ""}`}
        icon={faSortDown}
        color={"CurrentColor"}
      />

      <DropdownUser visibility={dropVisibility} />
    </button>
  ) : null;
};

export default HeaderButtonUser;
