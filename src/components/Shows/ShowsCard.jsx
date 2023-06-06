import { Button, CardGroup } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ShowsCard = ({ showItem }) => {
  const {
    score,

    show: { id, name, image, averageRuntime, status },
  } = showItem;

  console.log(status);
  return (
    <CardGroup>
      <Card className="my-2">
        <Card.Img
          className="w-50 h-50 mx-auto my-3 rounded-3 "
          variant="top"
          src={image.original}
        />
        <Card.Body>
          <Card.Title>Show Name: {name}</Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-evenly my-3">
              <p>Score: {score}</p>
              <p>Run time: {averageRuntime}</p>
              <p>Status: {status}</p>
            </div>
          </Card.Text>
          <Link to={`/dynamicItem/${id}`}>
            <Button variant="warning">More Info</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default ShowsCard;
