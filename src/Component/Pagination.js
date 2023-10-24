import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./Pagination.css";
const Pagination = (props) => {
  const { second, third, first, productnum } = useContext(CartContext);
  
  return (
    <nav aria-label="Page navigation example" className="cpagination">
      <ul class="pagination">
        <li class="page-item">
          <Link
            className={
              props.currentPage === 1 ? "page-link disabled" : "page-link"
            }
            onClick={props.PreviousPage}
          >
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>

        {props.currentPage > 3 && (
          <>
            <li class="page-item">
              <Link
                className={
                  props.currentPage === 1 ? "page-link active" : "page-link"
                }
                onClick={() => props.PageJump(1)}
              >
                {1}
              </Link>
            </li>
            <li class="page-item">
              <Link className="page-link">...</Link>
            </li>
          </>
        )}

        <li class="page-item">
          <Link
            className={
              props.currentPage === first ? "page-link active" : "page-link"
            }
            onClick={() => props.PageJump(first)}
          >
            {first}
          </Link>
        </li>

        {Math.ceil(productnum) !== 1 && (
          <li class="page-item">
            <Link
              className={
                props.currentPage === second ? "page-link active" : "page-link"
              }
              onClick={() => props.PageJump(second)}
            >
              {second}
            </Link>
          </li>
        )}

        {Math.ceil(productnum) >= third && (
          <li class="page-item">
            <Link
              className={
                props.currentPage === third ? "page-link active" : "page-link"
              }
              onClick={() => props.PageJump(third)}
            >
              {third}
            </Link>
          </li>
        )}

        {props.currentPage <= 3 && Math.ceil(productnum) > 3 && (
          <li class="page-item">
            <Link className="page-link">...</Link>
          </li>
        )}

        {props.currentPage > 3 &&
          props.currentPage < Math.ceil(productnum) - 3 && (
            <li class="page-item">
              <Link className="page-link">....</Link>
            </li>
          )}

        {productnum > second && productnum > third && (
          <li class="page-item">
            <Link
              className={
                props.currentPage === Math.ceil(productnum)
                  ? "page-link active"
                  : "page-link"
              }
              onClick={() => props.PageJump(Math.ceil(productnum))}
            >
              {Math.ceil(productnum)}
            </Link>
          </li>
        )}

        <li class="page-item">
          <Link
            className={
              props.currentPage === Math.ceil(productnum)
                ? "page-link disabled"
                : "page-link"
            }
            onClick={props.NextPage}
          >
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
