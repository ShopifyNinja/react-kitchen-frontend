import React from "react";

function ProductList({ list, onSelect }) {
  return (
    <div className="search-menu user-list">
      <ul className="user-detail-list estimate-folder list-unstyled ">
        <h4 className="sub-title">ITEMS</h4>
        {list.map((item, index) => {
          return (
            <li
              className="user-detail-list-item"
              key={index}
              onClick={() => {
                onSelect(item);
              }}
            >
              <img className="newfolder" src={item.icon} alt="folder" />
              <h4>{item.name}</h4>
              <p>${item.amount}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
