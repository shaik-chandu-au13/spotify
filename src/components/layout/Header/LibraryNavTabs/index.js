import React from "react";
import "./styles.scss";

import { useStore } from "@/store";

const LibraryNavTabs = () => {
  const { libraryTabs, currentLibraryTab, setCurrentLibraryTab } = useStore();

  return (
    <ul className="list-of-categories">
      {libraryTabs.map((tab) => (
        <li
          key={tab}
          className={currentLibraryTab === tab ? "item selected" : "item"}
          onClick={() => setCurrentLibraryTab(tab)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default LibraryNavTabs;
