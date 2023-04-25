import React from "react";
import "./license.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "../../component/Buttons/button";
import Navbar from "../../component/Navbar/navbar";
import Product from "../../component/Product/product";
import User from "../../component/User/user";
import Date from "../../component/Date/date";
import Status from "../../component/Status/status";
import Registration from "../../component/Registration/reg";
import Empty from "../../component/Empty/empty";
import {
  Row,
  CardGroup,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardHeader,
  Col,
} from "reactstrap";

function License() {
  return (
    <div className="container top p-0">
      <Navbar value={"License Details"} />
      <Row className=" ">
        <Col className="col" lg='4' sm="11" md="6" xs='11'>
          <Card className="card-body" body>
            <Product />
          </Card>
        </Col>
        <Col className="col" lg='4' sm="11" md="6" xs='11'>
          <Card className="card-body" body>
            <User />
          </Card>
        </Col>
        <Col className="col"lg='4' md="6" sm="11" xs='11'>
          <Card body>
            <Date />
          </Card>
        </Col>
        <Col className="col" lg='4' md="6" sm="11" xs='11'>
          <Card className="card-body" body>
            <Status />
          </Card>
        </Col>
        <Col className="col" lg='4' md="6" sm="11" xs='11'>
          <Card body>
            <Empty />
          </Card>
        </Col>
        <Col className="col" lg='4' md="6" sm="11" xs='11'>
          <Card  body>
            <Empty />
          </Card>
        </Col>
      </Row>
{/* registration */}
      <Row className="m-0">
      <Col className="col" lg='11' md="11" sm="11">
          <Card body>
            <Registration className="registration-card"/>
          </Card>
        </Col>
      </Row>
      <Row className="button-row">
        <Button
          value={"Back"}
          color={"white"}
          text={"Back"}
          radius={20}
          width={150}
          height={40}
          bgColor={"red"}
         
          mBottom={10}
        />
      </Row>
    </div>
  );
}

export default License;
