import List from "./list";
import Form from "./form";
import { useState } from "react";

const Main = ({ items, handleAddItems, handleDeleteItem, handleDoneItem }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  if (sortBy === "quentity") {
    sortedItems = items.sort((a, b) => a.quentity - b.quentity);
  }
  if (sortBy === "alphabeticly") {
    sortedItems = items.slice().sort((a, b) => a.product.localeCompare(b.product));
  }

  return (
    <div>
      <Form handleAddItems={handleAddItems} />
      <div>
        <select
          className="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort By Input</option>
          <option value="packed">Sort By Packed</option>
          <option value="quentity">Sort By Quentity</option>
          <option value="alphabeticly">Sort Alphabeticly</option>
        </select>
      </div>

      <div className="shoppingListWrapper">
        <ul className="mainWrapper">
          {sortedItems.map((item) => (
            <List
              item={item}
              key={item.id}
              handleDeleteItem={handleDeleteItem}
              handleDoneItem={handleDoneItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
