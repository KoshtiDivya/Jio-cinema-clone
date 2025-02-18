import "../styles/show.css";
export default function Show(props) {
    // console.log(props.movie)
    return(
        <>
                <div className="show-card">
                  <img src={props.movie.imageUrl} alt="show" />
                </div>
        </>
    )
}