import React, { useContext } from "react";
import Carousel from "./Carousel";
import Product from "./Product";
import { CartContext } from "./CartContext";

const Compo = () => {
  const { searchdata } = useContext(CartContext);
  return (
    <div>
    {searchdata.length < 1 && <Carousel />}
      <Product></Product>
      <footer class="bg-dark text-center text-white">
        <div class="container p-4 pb-0">
          <section class="mb-4">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
             <i class="bi bi-facebook"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
            <i class="bi bi-twitter"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
            <i class="bi bi-google"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="bi bi-instagram"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
            <i class="bi bi-linkedin"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="bi bi-github"></i>
            </a>
          </section>
        </div>
        <div
          class="text-center p-3"
          style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">
            Amit Kumar
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Compo;