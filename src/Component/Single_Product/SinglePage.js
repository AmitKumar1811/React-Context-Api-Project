import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
// import "./Singleproduct.css";
import styled from "styled-components";
import { toast } from "react-toastify";
import { CartContext } from "../CartContext";
const SinglePage = () => {
  const Wrapper = styled.section`
    .single-product-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 20px;
      column-gap: 20px;
     
    }

    .product-details {
      display: flex;
      flex-direction: column;
    }

    .product-image {
      display: grid;
      grid-template-rows: 1fr 1fr;
      row-gap:5px;
      margin-left: 70px;
     
     
    }
    .product-images-all {
      display: flex;
      flex-direction: column;
      flex-direction: row-reverse;
      justify-content: space-around;
         }

      & img {
        width: 150px;
        height: 150px;
        margin-bottom: 10px;
        border-radius: 10px;
      }
   

    img.product-image-active {
      border: 3px solid rgba(62, 59, 168, 0.97);
      -webkit-box-shadow: -2px 3px 54px -18px rgba(62, 59, 168, 0.97);
      -moz-box-shadow: -2px 3px 54px -18px rgba(62, 59, 168, 0.97);
      box-shadow: -2px 3px 54px -18px rgba(62, 59, 168, 0.97);
    }
    .product-images-main img 
    {
    border-radius: 10px;
    
    }
    

    .product-info {
      display: flex;
      flex-direction: column;
      & button {
        width: 200px;
        margin-bottom: 10px;
      }
    }

    .product-title {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .product-description {
      margin-bottom: 10px;
    }

    .product-price {
      font-size: 18px;
      color: #ff5722;
    }

    @media screen and (max-width: 1250px) {
      .single-product-container {
        grid-template-columns: 1fr; 
        padding: 10px; 
      }

      .product-image {
        margin-left: 0;
        height:800px 
      }

      .product-images-all {
        height:120px;
        flex-direction: row; 
        justify-content: center; 
      }

      img {
        width: 100px; 
        height: 100px;
      }
    }
  
  `;

  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state;
  const { addToCart, setCartItemNum, CartItemNum, setFinalCart } =
    useContext(CartContext);

  const Carthandler = (a, b, c, d) => {
    const data = {
      id: a,
      title: b,
      Image: c,
      Price: d,
      Quantity: 1,
      ActualPrice: d,
    };
    if (localStorage.getItem("token") !== null) {
      addToCart(data);
    } else {
      toast.error("You need Login First!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/Login");
    }
  };

  const Buyhandler = (a, b, c, d) => {
    const data = {
      id: a,
      title: b,
      Image: c,
      Price: d,
      Quantity: 1,
      ActualPrice: d,
    };
    const Finaldata = { price: d, item: 1 };
    if (localStorage.getItem("token") !== null) {
      setFinalCart(Finaldata);
      addToCart(data);
      setCartItemNum(CartItemNum + 1);
      navigate("/Address");
    } else {
      toast.error("You need Login First!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/Login");
    }
  };
  const [changeImage, setChangeImage] = useState(product.images[0]);
  const ImageHandler = (value) => {
    setChangeImage(value);
  };

  return (
    <Wrapper>
      <div className="single-product-container">
        <div className="product-image">
        <div className="product-images-main">
  <ReactImageMagnify
    {...{
      smallImage: {
        alt: "Wristwatch by Ted Baker London",
        isFluidWidth: false, 
        src: changeImage,
        width: 800,
        height: 600,
      },
      largeImage: {
        src: changeImage,
        width: 1200,
        height: 1800,
      },
    }}
  />
</div>
          <div className="product-images-all">
            <img
              className={
                product.images[0] === changeImage && "product-image-active"
              }
              src={product.images[0]}
              alt="no"
              onMouseOver={() => ImageHandler(product.images[0])}
            />
            <img
              className={
                product.images[1] === changeImage && "product-image-active"
              }
              src={product.images[1]}
              alt="no"
              onMouseOver={() => ImageHandler(product.images[1])}
            />
            <img
              className={
                product.images[2] === changeImage && "product-image-active"
              }
              src={product.images[2]}
              alt="no"
              onMouseOver={() => ImageHandler(product.images[2])}
            />
          </div>
        </div>

        <div className="product-details">
          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-description">{product.description}</p>
            <div className="d-flex flex-row align-items-center mb-1">
              <h4 className="mb-1 me-1">${product.price}</h4>
              <span className="text-danger">
                <s>${product.price + 75}</s>
              </span>
            </div>

            <h6 className="text-success">Free shipping</h6>
            <div>
              <span>EMI starts at ₹ 2,000. No Cost EMI Available</span>
              <br></br>
              <span>Warranty: 6 months warranty</span> <br></br>
              <span>7 Days easy return policy</span>
              <br></br>
              <span>7 Days easy return policy</span>
              <br></br>
              <span>In Stock: 25 units sold this week</span>
            </div>
            <br></br>
            <span>
              <i class="bi bi-geo-alt-fill"></i>Deliver to
            </span>
            <br></br>

            <button
              type="button"
              onClick={() =>
                Carthandler(
                  product.id,
                  product.title,
                  product.images[0],
                  product.price
                )
              }
              className="btn btn-outline-secondary"
            >
              Add To Cart
            </button>
            <button
              onClick={() =>
                Buyhandler(
                  product.id,
                  product.title,
                  product.images[0],
                  product.price
                )
              }
              className="btn btn-outline-secondary"
            >
              {" "}
              Buy Now !
            </button>
            <p>About This item</p>
            <ul>
              <li>Free upgrade to Windows 11 when available*</li>

              <li>OS: Pre-Loaded Windows 10 Home with Lifetime Validity</li>
              <li>Pre-Installed: MS Office Home and Student 2019</li>
              <li>Memory and Storage: 16GB RAM DDR4-3200 | 512 GB SSD</li>
              <li>Graphics: Integrated Intel Iris Xe Graphics</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SinglePage;
