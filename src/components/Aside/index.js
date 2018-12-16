import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from "reactstrap";

const Aside = props => (
  <Card className="mb-2">
    <CardHeader className="bg-info">{props.title}</CardHeader>
    <CardBody className="text-left ml-3">
      <ul className="list-group">
        {props.data.map(item => (
          <Link key={item.id} to={`/${props.type}/${item.id}`}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    </CardBody>
  </Card>
);

export default Aside;
