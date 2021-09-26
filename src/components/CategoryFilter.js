import React, { useState } from "react";

function CategoryFilter({categories}) {
  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked((isClicked) => !isClicked)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category => <button className={isClicked ? "selected" : null} key={category} onClick={handleClick}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
