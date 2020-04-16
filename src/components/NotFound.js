import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Nothing Found</h2>
      <p>
        Please go
        <Link to="/">back</Link>
      </p>
    </div>
  );
}
