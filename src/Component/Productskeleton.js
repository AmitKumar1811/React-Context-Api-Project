import React from "react";
import "./Product.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Card from "react-bootstrap/Card";
const Productskeleton = () => {
  return (
   <div className="Main">
     <Card className="Card">
     <div className="avatar-container">
          <Skeleton
            square
            width={270}
            height={270}
            containerClassName="avatar-skeleton"
          />
        </div>
      <Card.Body>
        <Card.Title>
          <Skeleton width={240} height={24} />
        </Card.Title>
        <Card.Text>
          <Skeleton width={254} height={48} />
        </Card.Text>

        <div className="d-flex flex-row align-items-center mb-1">
          <h4 className="mb-1 me-1">
            <Skeleton width={51} height={28} />{" "}
          </h4>
        </div>
        <h6 className="text-success">
        <Skeleton width={115} height={38} />
        </h6>

      </Card.Body>
    </Card>
   </div>
  );
};

export default Productskeleton;
