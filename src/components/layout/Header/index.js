import React, { useState, useEffect } from "react";
import "./styles.scss";

import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ButtonUser from "./ButtonUser";
import SearchBar from "./SearchBar";
import LibraryNavTabs from "./LibraryNavTabs";

const MainHeader = () => {
  const history = useHistory();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  function updateIsScrolled() {
    if (document.querySelector(".app-main").scrollTop >= 50) setIsScrolled(true);
    else setIsScrolled(false);
  }

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    document.querySelector(".app-main").addEventListener("scroll", updateIsScrolled);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? "header-scrolled" : ""}`}>
      <button className="btn-arrow" onClick={history.goBack}>
        <FontAwesomeIcon icon={faChevronLeft} color={"#fff"} />
      </button>
      <button className="btn-arrow" onClick={history.goForward}>
        <FontAwesomeIcon icon={faChevronRight} color={"#fff"} />
      </button>

      {currentPage === "/search" && <SearchBar />}
      {currentPage === "/your-library" && <LibraryNavTabs />}

      <ButtonUser />
    </header>
  );
};

export default MainHeader;
