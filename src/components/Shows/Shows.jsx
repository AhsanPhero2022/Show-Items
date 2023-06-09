import { useEffect, useState } from "react";
import ShowsCard from "./ShowsCard";

const Shows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);

  // const handleClick = () => {
  //   console.log("yes clicked");
  // };

  return (
    <div>
      <h1 className="text-center m-4">All Show Items</h1>
      <div className="w-50 text-center mx-auto ">
        {shows.map((showItem) => (
          <ShowsCard key={showItem.show.id} showItem={showItem}></ShowsCard>
        ))}
      </div>
    </div>
  );
};

export default Shows;
