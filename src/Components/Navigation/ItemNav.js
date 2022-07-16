import React from "react";
import { Link } from "react-router-dom";

export default function ItemNav({ slug, id, name }) {
  return (
    <li key={id} className="mr-[0.5rem]">
      <Link to={slug}>{name}</Link>
    </li>
  );
}
