import { useState } from "react";

import TabButton from "./TabButton.jsx";
import Tile from "./Tile.jsx";
import { STARTER_MENU, MAIN_MENU, DESSERT_MENU } from "../data.js";

const Menu = () => {
  const [selectedCourse, setSelectedCourse] = useState("starter");

  function handleSelect(selectedButton) {
    setSelectedCourse(selectedButton);
  }

  function populateMenu(course) {
    tabContent = (
      <ul className="tabContent">
        {course.map((menuItem) => (
          <Tile key={menuItem.title} {...menuItem} />
        ))}
      </ul>
    );
  }

  let tabContent = "";

  if (selectedCourse === "starter") {
    populateMenu(STARTER_MENU);
  } else if (selectedCourse === "main") {
    populateMenu(MAIN_MENU);
  } else {
    populateMenu(DESSERT_MENU);
  }

  return (
    <section>
      <menu>
        <TabButton
          onSelect={() => handleSelect("starter")}
          isSelected={selectedCourse === "starter"}
        >
          Starter
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("main")}
          isSelected={selectedCourse === "main"}
        >
          Main
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("dessert")}
          isSelected={selectedCourse === "dessert"}
        >
          Dessert
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
};

export default Menu;
