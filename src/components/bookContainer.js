import React, { useState } from "react";
import { connect } from "react-redux";
import { buyBook } from "../redux";
function bookContainer(props) {
  const [num, setnum] = useState(1);
  const Event = (event) => {
    setnum(event.target.value);
  };
  return (
    <div>
      <h1>Number of Books {props.numberOfBooks}</h1>
      <input type="text" value={num} onChange={Event} />
      <button
        onClick={() => {
          props.buyBook(num);
        }}
      >
        Buy {num} Book
      </button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    numberOfBooks: state.numberOfBooks
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    buyBook: function (num) {
      dispatch(buyBook(num));
    }
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(bookContainer);
