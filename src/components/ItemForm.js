import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState(""); // State for item name
  const [itemCategory, setItemCategory] = useState("Produce"); // Initial state for item category

  // Handle changes in item name input
  function handleNameChange(event) {
    setItemName(event.target.value);
  }

  // Handle changes in item category select
  function handleCategoryChange(event) {
    setItemCategory(event.target.value);
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Create a new item object
    const newItem = {
      id: uuid(), // Generate unique ID
      name: itemName,
      category: itemCategory,
    };

    // Call the callback function to submit the new item
    onItemFormSubmit(newItem);

    // Clear form fields after submission
    setItemName("");
    setItemCategory("Produce"); // Reset category to default
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
