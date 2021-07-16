import React from "react";
import "./styles.scss";

const SectionHeader = ({ type = "text", title = "Empty title", linkTo = "#" }) => {
  return (
    <section className="section-container">
      <div className="section-header">
        <h2 className="title">
          {type === "text" ? title : null}
          {type === "link" ? (
            <a
              href={linkTo}
              onClick={(e) => e.preventDefault()}
              className="title-link"
            >
              {title}
            </a>
          ) : null}
        </h2>

        {type === "link" ? (
          <a
            href={linkTo}
            onClick={(e) => e.preventDefault()}
            className="aside-link"
          >
            SEE ALL
          </a>
        ) : null}
      </div>
    </section>
  );
};

export default SectionHeader;
