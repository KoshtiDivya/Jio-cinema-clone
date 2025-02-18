import "../styles/Carousel.css";

const CarouselComponent = () => {
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide carousel-section "
        data-bs-touch="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.koimoi.com/wp-content/new-galleries/2024/06/laughter-chefs-unlimited-entertainment-watch-season-1-review-01-1068x561.jpg"
              class="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://v3img.voot.com/jioimage/newcpp/6650d3d2bc028714495a9a98/6650d3d2bc028714495a9a98_1716573140187_aa.jpg"
              class="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://v3img.voot.com/resizeMedium,w_1090,h_613/v3Storage/assets/up-65-pre-launch-without-cta-16x9-1685630928551.jpg"
              class="d-block w-100 carousel-img"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default CarouselComponent;
