import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const DynamicItem = () => {
  const data = useLoaderData();

  return (
    <div>
      <Card className="mt-5 mx-auto w-50">
        <Card.Img
          className="w-50 my-3 rounded h-50 mx-auto"
          variant="top"
          src={data.image.original}
        />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.summary}</Card.Text>
          <div className="text-center mt-5">
            <Link to="/">
              <Button variant="success">Back to Home</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DynamicItem;
