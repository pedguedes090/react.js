import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { product } = location.state || {};
  return (
    <>
      <div>ID sản phẩm: {id}</div>
      {product ? (
        <>
          <div>Tên: {product.name}</div>
          <div>Giá: {product.price} VND</div>
        </>
      ) : (
        <div>Không có dữ liệu sản phẩm</div>
      )}
    </>
  );
}
