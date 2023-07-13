import React, { useState, useEffect } from "react";

import Pagination from "../component/Pagination";
import ListGroup from "./../component/ListGroup";
import { Paginate } from "./../util/paginate";
import ProductsCard from "./../component/ProductsCard";
import { useCartContext } from "../context/ContextProvider";

let Category = [
  { id: 1, name: "T-SHIRT" },
  { id: 2, name: "PAINT" },
  { id: 3, name: "SHOES" },
  { id: 4, name: "CAP" },
];
let Product = [
  {
    productId: 1,
    productName: "Louis Vuiton",
    productImage: require("../images/T-SHIRT1.jpg"),
    categoryId: 1,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1200,
    quantity: 1,
    limitedQuantity: 10,
  },
  {
    productId: 2,
    productName: "Louis Vuiton",
    productImage: require("../images/T-SHIRT2.jpg"),
    categoryId: 1,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1200,
    quantity: 1,
    limitedQuantity: 5,
  },
  {
    productId: 3,
    productName: "Louis Vuiton",
    productImage: require("../images/T-SHIRT3.jpg"),
    categoryId: 1,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1200,
    quantity: 1,
    limitedQuantity: 7,
  },
  {
    productId: 4,
    productName: "Dior",
    productImage: require("../images/T-SHIRT4.jpg"),
    categoryId: 1,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1200,
    quantity: 1,
    limitedQuantity: 3,
  },
  {
    productId: 5,
    productName: "Dior",
    productImage: require("../images/T-SHIRT5.jpg"),
    categoryId: 1,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1200,
    quantity: 1,
    limitedQuantity: 4,
  },
  {
    productId: 6,
    productName: "Dior",
    productImage: require("../images/T-SHIRT6.jpg"),
    categoryId: 1,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1200,
    quantity: 1,
    limitedQuantity: 12,
  },
  {
    productId: 7,
    productName: "jeans",
    productImage: require("../images/PANT1.jpg"),
    categoryId: 2,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1250,
    quantity: 1,
    limitedQuantity: 13,
  },
  {
    productId: 8,
    productName: "jeans",
    productImage: require("../images/PANT2.jpg"),
    categoryId: 2,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1250,
    quantity: 1,
    limitedQuantity: 8,
  },
  {
    productId: 9,
    productName: "jeans",
    productImage: require("../images/PANT3.jpg"),
    categoryId: 2,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1250,
    quantity: 1,
    limitedQuantity: 2,
  },
  {
    productId: 10,
    productName: "delavi",
    productImage: require("../images/PANT4.jpg"),
    categoryId: 2,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1250,
    quantity: 1,
    limitedQuantity: 15,
  },
  {
    productId: 13,
    productName: "Eazy",
    productImage: require("../images/SHOES1.jpg"),
    categoryId: 3,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1300,
    quantity: 1,
    limitedQuantity: 11,
  },
  {
    productId: 14,
    productName: "Timberland",
    productImage: require("../images/SHOES2.jpg"),
    categoryId: 3,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1300,
    quantity: 1,
    limitedQuantity: 8,
  },
  {
    productId: 15,
    productName: "Air Force",
    productImage: require("../images/SHOES3.jpg"),
    categoryId: 3,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1300,
    quantity: 1,
    limitedQuantity: 3,
  },
  {
    productId: 16,
    productName: "Jordan 3",
    productImage: require("../images/SHOES4.jpg"),
    categoryId: 3,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1300,
    quantity: 1,
    limitedQuantity: 9,
  },
  {
    productId: 17,
    productName: "Air max",
    productImage: require("../images/SHOES5.jpg"),
    categoryId: 3,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1300,
    quantity: 1,
    limitedQuantity: 13,
  },
  {
    productId: 18,
    productName: "Coltez",
    productImage: require("../images/SHOES6.jpg"),
    categoryId: 3,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1300,
    quantity: 1,
    limitedQuantity: 10,
  },
  {
    productId: 19,
    productName: "Coltez",
    productImage: require("../images/SHOES7.jpg"),
    categoryId: 3,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1300,
    quantity: 1,
    limitedQuantity: 10,
  },
  {
    productId: 20,
    productName: "Coltez",
    productImage: require("../images/SHOES8.jpg"),
    categoryId: 3,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 1300,
    quantity: 1,
    limitedQuantity: 10,
  },
  {
    productId: 21,
    productName: "dior",
    productImage: require("../images/CAP1.jpg"),
    categoryId: 4,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 500,
    quantity: 1,
    limitedQuantity: 10,
  },
  {
    productId: 22,
    productName: "dior",
    productImage: require("../images/CAP2.jpg"),
    categoryId: 4,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 500,
    quantity: 1,
    limitedQuantity: 10,
  },
  {
    productId: 23,
    productName: "dior",
    productImage: require("../images/CAP3.jpg"),
    categoryId: 4,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 500,
    quantity: 1,
    limitedQuantity: 10,
  },
  {
    productId: 24,
    productName: "nike",
    productImage: require("../images/CAP4.jpg"),
    categoryId: 4,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 500,
    quantity: 1,
    limitedQuantity: 10,
  },
  {
    productId: 25,
    productName: "nike",
    productImage: require("../images/CAP5.jpg"),
    categoryId: 4,
    size: [30, 31, 32.33, 34],
    liked: false,
    price: 500,
    quantity: 1,
    limitedQuantity: 10,
  },
];
function Products(props) {
  const { AddToCart } = useCartContext();
  const [category, setCategory] = useState([]);
  const [fetchedProduct, setFetchedProduct] = useState([]);
  const [categorySelect, setCategorySelect] = useState(null);
  const [pageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCategory([{ id: 0, name: "AllCategory" }, ...Category]);
    setFetchedProduct(Product);
    handleSelect({ id: 0, name: "AllCategory" });
  }, []);
  const handleSelect = (category) => {
    setCategorySelect(category);
    setCurrentPage(1);
  };
  const handlePage = (page) => {
    setCurrentPage(page);
  };
  const handleLike = (product) => {
     const products = [...fetchedProduct];
     const index = products.indexOf(product);
     products[index] = { ...products[index] };
     products[index].liked = !products[index].liked;
     setFetchedProduct(products);
  };

  let filterProduct = fetchedProduct;

  if (categorySelect && categorySelect.id)
    filterProduct = filterProduct.filter(
      (product) => product.categoryId === categorySelect.id
    );

  const handlePreviuosPage = (page) => {
    setCurrentPage(page - 1);
  };
  const handleNextPage = (page) => {
    setCurrentPage(page + 1);
  };
  const products = Paginate(filterProduct, currentPage, pageSize);

  return (
    <div className="w-[90%] mx-auto mt-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <ListGroup
          items={category}
          itemSelect={categorySelect}
          onItemSelect={handleSelect}
        />
        <div className="grid lg:col-span-2 md:col-span-1  gap-4">
          <ProductsCard items={products} onLike={ handleLike} onAddToCart={AddToCart} />
          <Pagination
            totalCount={filterProduct.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePage}
            onPreviuosPageChange={handlePreviuosPage}
            onNextPageChange={handleNextPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
