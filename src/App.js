import Header from "./component/header";
import Main from "./component/main";
import Footer from "./component/footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleDoneItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  
  return (
    <div className="appWrapper">
      <Header />
      <Main
        items={items}
        handleAddItems={handleAddItems}
        handleDeleteItem={handleDeleteItem}
        handleDoneItem={handleDoneItem}
      />
      <Footer items={items}/>
    </div>
  );
}

export default App;
