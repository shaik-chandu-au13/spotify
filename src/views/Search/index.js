import React from "react";
import "./styles.scss";

import { useStore } from "@/store";
import { SectionHeader } from "@/components/ui";
import Slider from "./Slider";
import CategoriesGrid from "./CategoriesGrid";

const Search = () => {
  const { categories, topCategories } = useStore();

  return (
    <div className="search-container">
      <section className="section">
        <SectionHeader title="Top genres" />
        <Slider slides={topCategories} />
      </section>

      <section className="section">
        <SectionHeader title="Browse all" />
        <CategoriesGrid categories={categories} />
      </section>
    </div>
  );
};

export default Search;
