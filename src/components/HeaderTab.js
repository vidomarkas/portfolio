import React from "react";
import { Link } from "react-router-dom";

function HeaderTab(props) {
  return (
    <Link
      onClick={() => props.onClickTabItem(props.slug)}
      className={
        props.active === props.slug
          ? "header-link header-link--active"
          : "header-link"
      }
      to={`/${props.slug}`}
    >
      {props.title}
    </Link>
  );
}

export default HeaderTab;
