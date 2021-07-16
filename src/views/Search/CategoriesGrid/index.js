import React from "react";
import "./styles.scss";

import { generateRandomColor, generateGradient } from "../../../common/utils";

const GenresGrid = ({ categories }) => {
  function normalizeName(name) {
    if (!name.includes("/")) return name;

    const [str1, str2] = name.split("/");
    return str1 + "/\n" + str2;
  }

  return (
    <ul className="category-grid-container">
      {categories.map((category) => (
        <li
          className="grid-item"
          key={category.id}
          style={{ background: generateGradient(generateRandomColor()) }}
        >
          <span className="grid-text">{normalizeName(category.name)}</span>
        </li>
      ))}
    </ul>
  );
};

export default GenresGrid;
