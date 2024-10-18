import { useRef } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";
import CardReview from "./CardReview";
import fakeReviews from "../../lib/fakeReviews";
import "./styles/ReviewSection.css";

function ReviewSection() {
  const scrollContainerRef = useRef(null);
  const isSmallScreen = useScreenSize(1000);
  useHorizontalScroll(scrollContainerRef, isSmallScreen);

  return (
    <section ref={scrollContainerRef} className="review-section">
      {fakeReviews.map((comment) => (
        <CardReview
          key={comment.index}
          imgSrc={comment.imgSrc}
          clientName={comment.userName}
          publishedDate={comment.publishedDate}
          comment={comment.comment}
        />
      ))}
    </section>
  );
}

export default ReviewSection;
