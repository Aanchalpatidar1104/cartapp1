import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer";
import Additem from "./components/Additem";
import React from "react";
import { useState } from "react";
function App() {
  const products = [
    {
      price: 79900,
      name: "iphon 14",
      quantity: 0,
    },
    {
      price: 89900,
      name: "iphon 14 plus",
      quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount =totalAmount;
    newProductList[index].quantity++;
    newTotalAmount +=newProductList[index].price;
    setTotalAmount(newTotalAmount);
  
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount=totalAmount;
    if(newProductList[index].quantity > 0)
       {
        newProductList[index].quantity--
        newTotalAmount -=newProductList[index].price;
       }
       setTotalAmount(newTotalAmount);
      
    setProductList(newProductList);
  };
  const ResetQuantity=()=>{
    let newProductList=[...productList];
    newProductList.map((products)=>{
      products.quantity= 0
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }
  const removeItem =(index)=>{
    let newProductList=[...productList];
    let newTotalAmount=totalAmount;
    newTotalAmount-=newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index,1);
      setProductList(newProductList);
      setTotalAmount(newTotalAmount);
  };
  const additem=(name,price)=>{
    let newProductList=[...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
  setProductList(newProductList);
  }
  return (
    <>
      <Navbar />
      <main className="container mt-5">
<Additem additem={additem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}

        />
      </main>
      <Footer totalAmount={totalAmount} ResetQuantity={ResetQuantity}/>
    </>
  );
}

export default App;
