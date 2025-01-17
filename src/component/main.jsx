import List from "./list";
import Form from "./form";

const Main = ({ items, handleAddItems, handleDeleteItem, handleDoneItem }) => {
  return (
    <div>
      <Form handleAddItems={handleAddItems} />
      <ul className="mainWrapper">
        {items.map((item) => (
          <List
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleDoneItem={handleDoneItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default Main;
