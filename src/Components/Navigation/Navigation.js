import React from "react";
import ItemNav from "./ItemNav";

export default function Navigation() {
  const items = [
    {
      name: "Home",
      slug: "/",
      id: 1,
    },
    {
      name: "Contact",
      slug: "/Contact",
      id: 2,
    },
  ];

  return (
    <nav>
      <div className="flex p-5 bg-blue-700">
        <div className="">
          <h1 className="text-3xl font-bold p-3">Blog</h1>
        </div>
        <ul className=" flex flex-row-reverse space-x-reverse text-white  items-center divide-x  leading-[2.6] m-3">
          {items.map((item) => (
            <ItemNav slug={item.slug} key={item.id} name={item.name} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
