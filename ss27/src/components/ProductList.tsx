import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
export default function ProductList() {
  const [search, setSearch] = useSearchParams();

  const [keyWord, setKeyWord] = useState("");
  const handlefind = () => {
    setSearch({ search: keyWord });
  };
  useEffect(() => {
    setKeyWord(search.get("search") || "");
  }, [search]);

  const listProduct = [
    {
      id: 1,
      name: "Laptop",
      price: "35,000,000",
    },
    {
      id: 2,
      name: "IP",
      price: "30,000,000",
    },
    {
      id: 3,
      name: "Samsung",
      price: "25,000,000",
    },
  ];

  return (
    <>
      <div>
        <h1>Trang chi tiết</h1>
        <h2>Danh sách sản phẩm</h2>
        <input
          type="text"
          onChange={(e) => setKeyWord(e.target.value)}
          value={keyWord}
        />
        <button onClick={handlefind}>Search</button>
        <div>
          {listProduct.map((u) => (
            <div style={{ display: "flex" }}>
              <div>{u.name}</div>
              <NavLink to={`/product/${u.id}`} state={{ product: u }}>
                Xem chi tiet
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
