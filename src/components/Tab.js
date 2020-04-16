import React from "react";

function Tab(props) {
  return (
    <li
      className={props.activeTab === props.category ? "tab tab-active" : "tab"}
      key={props.index}
      onClick={() => props.onClickTabItem(props.category)}
    >
      {props.category}
    </li>
  );
}

export default Tab;
