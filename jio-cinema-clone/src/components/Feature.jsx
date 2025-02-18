import "../styles/Feature.css";
import FeaturesShow from "./FeaturesShow";

const Feature = (props) => {
  // console.log(props.featuredMovie);
  return (
    <>
      <section className="featured">
        <h1 className="feature-heading">Hot Right Now 🔥 </h1>
        <div className="feature-shows">
          {
            props.featuredMovie.map((movie) => {
              return <FeaturesShow movie={movie} />
            })
          }
         
        </div>
      </section>
    </>
  );
};

export default Feature;
