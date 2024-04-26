import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Filter from "./Filter";
import ItemForm from "./ItemForm"; // Import the ItemForm component
import itemData from "../data/items";
import { v4 as uuid } from "uuid"; // Import uuid library to generate unique IDs

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [itemName, setItemName] = useState(""); // State for the item name
  const [itemCategory, setItemCategory] = useState("Produce"); // Initial state for item category

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  // Remove or define handleCategoryChange function if needed
  // function handleCategoryChange(event) {
  //   // Handle category change logic
  // }

  function handleItemNameChange(event) {
    setItemName(event.target.value); // Update item name state
  }

  function handleItemCategoryChange(event) {
    setItemCategory(event.target.value); // Update item category state
  }

  function handleItemFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Create a new item object
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    // Update items state by adding the new item
    setItems([...items, newItem]);

    // Clear form fields
    setItemName("");
    setItemCategory("Produce"); // Reset category to default
  }

  const filteredItems = searchText
    ? items.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : items;

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter onSearchChange={handleSearchChange} />
      <ItemForm
        itemName={itemName}
        itemCategory={itemCategory}
        onItemNameChange={handleItemNameChange}
        onItemCategoryChange={handleItemCategoryChange}
        onItemFormSubmit={handleItemFormSubmit}
      />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;
