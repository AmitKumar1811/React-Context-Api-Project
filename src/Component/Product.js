import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import Card from "react-bootstrap/Card";
import { CartContext } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Productskeleton from "./Productskeleton";
import Pagination from "./Pagination";

const Product = () => {
  const {
    addToCart,
    searchdata,
    second,
    setSecond,
    third,
    setThird,
    first,
    setFirst,
    productnum,
    setProductnum,
  } = useContext(CartContext);

  const [data, setData] = useState([]);
  const [pricefilter, setPricefilter] = useState(0);
  const [isloading, setLoading] = useState(true);
  const [initial, setInitial] = useState(0);
  const DataCount = 10;
  const [end, setEnd] = useState(DataCount);
  const [currentPage, setCurrentPage] = useState(1);
  const [alpha, setAlpha] = useState("0");
  const navigate = useNavigate();

  const fetchdata = async () => {
    setLoading(true);
    const result = await fetch("https://api.escuelajs.co/api/v1/products");
    const res = await result.json();
    setLoading(false);

    setProductnum(res.length / DataCount);

    if ((searchdata === "" || searchdata.length <= 1) && pricefilter === 0) {
      setData(res); // initial Data
    } else {
      if (searchdata.length > 1 && pricefilter === 0 && alpha === "0") {
        PageJump(1);
        const pattern = new RegExp(searchdata, "i");
        setProductnum(
          res.filter((item) => {
            return pattern.test(item.title);
          }).length / DataCount
        );
        const filtersearch = res.filter((item) => {
          return pattern.test(item.title);
        });
        setData(filtersearch.slice(initial, end));
      } else {
        const pattern = new RegExp(searchdata, "i");
        const filterpattern = res.filter((item) => {
          return pattern.test(item.title);
        });
        const filterprice = filterpattern.filter((olditem) => {
          if (pricefilter === "10000") {
            return olditem.price <= pricefilter;
          } else {
            return (
              olditem.price >= pricefilter - 100 && olditem.price <= pricefilter
            );
          }
        });
        setProductnum(
          filterprice.sort((a, b) => a.price - b.price).length / 10
        );
        const filterhandler = filterprice.sort((a, b) => a.price - b.price);
        setData(filterhandler.slice(initial, end));
      }
    }

    if (alpha === "0" && searchdata.length === 0 && pricefilter === 0) {
      setProductnum(res.length / 10);
      setData(res.slice(initial, end));
    } else if (alpha === "1" && searchdata.length === 0 && pricefilter === 0) {
      const sortedData = res.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });

      setProductnum(sortedData.length / 10);
      setData(sortedData.slice(initial, end));
    } else if (alpha === "2" && searchdata.length === 0 && pricefilter === 0) {
      const sortedData = res.sort((a, b) => {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
        return 0;
      });

      setProductnum(sortedData.length / 10);
      setData(sortedData.slice(initial, end));
    } else if (
      searchdata.length >= 1 &&
      alpha !== "0" &&
      pricefilter === 10000
    ) {
      // Search data and Alpha Sorting
      const pattern = new RegExp(searchdata, "i");
      const filterPattern = res.filter((item) => pattern.test(item.title));

      // Now apply a-z sorting
      if (alpha === "1") {
        const sortedData = filterPattern.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });

        setProductnum(sortedData.length / 10);
        setData(sortedData.slice(initial, end));
      }
      // Now Apply z-a sorting
      else {
        const sortedData = filterPattern.sort((a, b) => {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          return 0;
        });

        setProductnum(sortedData.length / 10);
        setData(sortedData.slice(initial, end));
      }
    } else if (
      searchdata.length <= 1 &&
      alpha !== "0" &&
      pricefilter !== 10000
    ) {
      //  Price filtering
      const filteredData = res.filter((olditem) => {
        if (pricefilter === "10000") {
          return olditem.price <= pricefilter;
        } else {
          return (
            olditem.price >= pricefilter - 100 && olditem.price <= pricefilter
          );
        }
      });

      // Sort alphabetically A to Z
      if (alpha === "1") {
        const sortedData = filteredData.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });

        setProductnum(sortedData.length / 10);
        setData(sortedData.slice(initial, end));
      }
      // Now Apply z-a sorting
      else if (alpha === "2") {
        const sortedData = filteredData.sort((a, b) => {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          return 0;
        });

        setProductnum(sortedData.length / 10);
        setData(sortedData.slice(initial, end));
      }
    } else {
      // This is filter all three first searchdata then price and alphabetical order

      const pattern = new RegExp(searchdata, "i");
      const filterPattern = res.filter((item) => pattern.test(item.title));

      const filteredData = filterPattern.filter((olditem) => {
        if (pricefilter === "10000") {
          return olditem.price <= pricefilter;
        } else {
          return (
            olditem.price >= pricefilter - 100 && olditem.price <= pricefilter
          );
        }
      });

      // Sort alphabetically A to Z
      if (alpha === "1") {
        const sortedData = filteredData.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });

        setProductnum(sortedData.length / 10);
        setData(sortedData.slice(initial, end));
      }
      // Now Apply z-a sorting
      else if (alpha === "2") {
        const sortedData = filteredData.sort((a, b) => {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          return 0;
        });

        setProductnum(sortedData.length / 10);
        setData(sortedData.slice(initial, end));
      }
    }
  };

  const Pricehandler = (e) => {
    PageJump(1);
    setPricefilter(e.target.value);
  };

  const AlphaHandler = (e) => {
    PageJump(1);
    setAlpha(e.target.value);
  };

  useEffect(() => {
    fetchdata();
  }, [
    searchdata,
    pricefilter,
    initial,
    end,
    first,
    second,
    third,
    currentPage,
    alpha,
    productnum,
  ]);

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
      navigate("/Login");
    }
  };

  const PreviousPage = () => {
    if (currentPage === first && currentPage >= 2) {
      setFirst(first - 3);
      setSecond(second - 3);
      setThird(third - 3);
    }
    if (initial === 0) {
      setInitial(0);
      setEnd(DataCount);
      setCurrentPage(1);
      alert("No Page Found");
    } else {
      setInitial(initial - DataCount);
      setEnd(end - DataCount);
      setCurrentPage(currentPage - 1);
    }
  };

  const NextPage = () => {
    if (currentPage === third) {
      setFirst(first + 3);
      setSecond(second + 3);
      setThird(third + 3);
    }
    setInitial(initial + DataCount);
    setEnd(end + DataCount);
    setCurrentPage(currentPage + 1);
  };

  const PageJump = (value) => {
    if (value === 1) {
      setFirst(1);
      setSecond(2);
      setThird(3);
      setInitial(DataCount * (value - 1));
      setEnd(DataCount * (value - 1) + DataCount);
      setCurrentPage(value);
    } else if (value === Math.ceil(productnum) && Math.ceil(productnum) > 3) {
      setFirst(Math.ceil(productnum) - 3);
      setSecond(Math.ceil(productnum) - 2);
      setThird(Math.ceil(productnum) - 1);
      setInitial(DataCount * (value - 1));
      setEnd(DataCount * (value - 1) + DataCount);
      setCurrentPage(value);
    } else {
      setInitial(DataCount * (value - 1));
      setEnd(DataCount * (value - 1) + DataCount);
      setCurrentPage(value);
    }
  };

  return (
    <>
      <div className="Mainbox">
        {" "}
        <div class="Filterdata">
          <span>
            <label for="priceSort">Sort By Price</label>
            <select id="priceSort" onChange={Pricehandler}>
              <option value={10000}>All</option>
              <option value={100}>Under $100</option>
              <option value={200}>$100 and $200</option>
              <option value={300}>$200 and $300</option>
              <option value={400}>$300 and $400</option>
              <option value={500}>$400 and $500</option>
            </select>
          </span>
          <span>
            <label for="alphaSort">Sort By Alphabetical Order</label>
            <select id="alphaSort" onChange={AlphaHandler}>
              <option value="0">Choose Order</option>
              <option value="1">A-Z Order</option>
              <option value="2">Z-A Order</option>
            </select>
          </span>
        </div>
        <div className="Main">
          {isloading ? (
            <>
              <Productskeleton />
              <Productskeleton />
              <Productskeleton />
              <Productskeleton />
              <Productskeleton />
              <Productskeleton />
              <Productskeleton />
              <Productskeleton />
              <Productskeleton />
              <Productskeleton />
            </>
          ) : data.length ? (
            data.map((item) => {
              return (
                <Card key={item.id} className="Card">
                  <Link to={"/SinglePage"} state={item}>
                    <div className="avatar-container">
                      <img src={item.images[0]} alt="no img" />
                    </div>
                  </Link>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>

                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">${item.price}</h4>
                      <span className="text-danger">
                        <s>${item.price + 75}</s>
                      </span>
                    </div>
                    <h6 className="text-success">Free shipping</h6>

                    <button
                      type="button"
                      onClick={() =>
                        Carthandler(
                          item.id,
                          item.title,
                          item.images[0],
                          item.price
                        )
                      }
                      className="btn btn-outline-secondary"
                    >
                      Add To Cart
                    </button>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            searchdata.length !== 0 && (
              <div>
                <br></br> <h4> No Product Found</h4> <br></br>
              </div>
            )
          )}
        </div>
        <div className="pagination">
          <Pagination
            PreviousPage={PreviousPage}
            NextPage={NextPage}
            PageJump={PageJump}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Product;
