import React, { useContext } from "react";
import "../sass/Reviews.scss";
import { ReviewContext } from "../Context/ReviewContext";
import quoteStart from "../assets/img/quote-start.svg";
import quoteEnd from "../assets/img/quote-end.svg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import Spinner from "./Spinner";

function Reviews() {
  const { reviews, loading } = useContext(ReviewContext);

  const renderedReviews = reviews.map((review, index) => {
    return (
      <li className="review" key={index}>
        <div className="review-body-container">
          <img className="quote quote-start" src={quoteStart} alt="" />
          <img className="quote quote-end" src={quoteEnd} alt="" />
          <p className="review-body">{review.acf.review}</p>
        </div>
        <div className="review-author">
          <div className="review-img-padding">
            <img
              className="review-img"
              src={review.acf.person_photo.sizes.medium_large}
              alt={review.title.rendered}
            />
          </div>
          <p className="review-name">{review.acf.name}</p>
          <a className="review-link" href={review.acf.project_link}>
            {review.acf.project_name}
          </a>
        </div>
      </li>
    );
  });

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="card reviews-card">
      <h2 className="card-heading reviews-heading">Reviews</h2>
      <div className="reviews">
        <ul className="reviews-list">
          <AutoplaySlider
            className="reviews-slider"
            play={true}
            organicArrows={false}
            showTimer={false}
            cssModule={AwesomeSliderStyles}
            interval={6000}
          >
            {!loading && reviews ? (
              renderedReviews
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Spinner />
              </div>
            )}
          </AutoplaySlider>
        </ul>
      </div>
    </div>
  );
}

export default Reviews;
