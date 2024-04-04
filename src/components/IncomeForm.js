import React, { useRef } from "react";

function IncomeForm({ income, setIncome }) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddIncome = (e) => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);
    if (desc.current.value.trim() === "") {
      alert("please enter the description");

      return;
    }
    if (price.current.value.trim() === "" || isNaN(price.current.value)) {
      alert("Please enter  amount");
      return;
    }

    setIncome([
      ...income,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newD.getTime(),
      },
    ]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  };

  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="please enter income description.."
          ref={desc}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Amount..."
          ref={price}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Date..."
          ref={date}
        />
        <input type="submit" value="Add Income" />
      </div>
    </form>
  );
}

export default IncomeForm;
