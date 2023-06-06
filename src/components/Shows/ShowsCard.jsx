import { Button, CardGroup } from "react-bootstrap";

import Card from "react-bootstrap/Card";

const ShowsCard = ({ showItem }) => {
  const {
    show: { summary, name, id, image },
  } = showItem;

  console.log(name);
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
            <p>{summary}</p>
          </Card.Text>
          <Button variant="warning">Warning</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default ShowsCard;
