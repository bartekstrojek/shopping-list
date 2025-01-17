import { useState } from "react";

const Form = ({handleAddItems}) => {
  const [product, setProduct] = useState("");
  const [quentity, setQuentity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      const newToDo = {
        id: Date.now(),
        packed: false,
        product,
        quentity,
      };
      handleAddItems(newToDo);
      setProduct("");
      setQuentity(1);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <select
        value={quentity}
        onChange={(e) => setQuentity(Number(e.target.value))}
        className="select"
      >
        {[...Array(20)].map((_, index) => (
          <option value={index + 1} key={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        className="input"
        type="text"
        placeholder="Eter product name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <button className="addBtn" type="submit">
        ADD
      </button>
    </form>
  );
};
export default Form;
