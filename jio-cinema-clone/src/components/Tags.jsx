import { useState } from "react";
import "../styles/Tag.css";

const Tags = () => {
  const [tag, setTag] = useState([
    "For You",
    "Action",
    "Drama",
    "Comedy",
    "Sci-Fi",
    "Horror",
    "Romance",
    "Fantasy",
    "Mystery",
    "Adventure",
    "Sports",
    "Psychological",
    "Noir",
    "Biopic",
    "Anthology",
  ]);
  return (
    <>
      <div className="tags">
        {tag.map((tag, index) => {
          return <button className="tag">{tag}</button>;
        })}
      </div>
    </>
  );
};

export default Tags;
