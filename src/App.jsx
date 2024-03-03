import { useState } from "react";

import Container from "./components/Container";
import TabButton from "./components/TabButton";
import Tile from "./components/Tile";
import { STARTER_MENU, MAIN_MENU, DESSERT_MENU } from "./data.js";

function App() {
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
    <>
      <Container>
        <h1>Our Delicious Menu</h1>
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
      </Container>
    </>
  );
}

export default App;
