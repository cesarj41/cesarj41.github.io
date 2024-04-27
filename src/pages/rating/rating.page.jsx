import { useState } from "preact/hooks";
import { StarIconButton } from "../../components/icons";

const rating_message = {
  1: "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
  2: "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
  3: "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
  4: "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
  5: "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform"
};
export function RatingPage() {
  const [rating, setRating] = useState(0);
  const [possibleRating, setPossibleRating] = useState();
  const handleMouseLeave = () => setPossibleRating();
  const ratingValue = possibleRating ?? rating;

  return (
    <div className="flex h-screen items-center bg-[#E6E9FB] px-8">
      <div className="m-auto grid w-full max-w-[775px] gap-8 rounded-xl bg-white px-16 pb-11 pt-16">
        <div className="flex justify-center">
          <p className="max-w-[30ch] text-center text-2xl font-bold">
            How many stars would you give to our Online Code Editor?
          </p>
        </div>
        <div className="flex justify-center gap-9">
          <StarIconButton
            filled={ratingValue >= 1}
            onClick={() => setRating(1)}
            onMouseEnter={() => setPossibleRating(1)}
            onMouseLeave={handleMouseLeave}
          />
          <StarIconButton
            filled={ratingValue >= 2}
            onClick={() => setRating(2)}
            onMouseEnter={() => setPossibleRating(2)}
            onMouseLeave={handleMouseLeave}
          />
          <StarIconButton
            filled={ratingValue >= 3}
            onClick={() => setRating(3)}
            onMouseEnter={() => setPossibleRating(3)}
            onMouseLeave={handleMouseLeave}
          />
          <StarIconButton
            filled={ratingValue >= 4}
            onClick={() => setRating(4)}
            onMouseEnter={() => setPossibleRating(4)}
            onMouseLeave={handleMouseLeave}
          />
          <StarIconButton
            filled={ratingValue >= 5}
            onClick={() => setRating(5)}
            onMouseEnter={() => setPossibleRating(5)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="flex min-h-[86px] justify-center">
          <p className="max-w-[50ch] text-center text-lg text-[#374151]">
            {rating_message[ratingValue] ?? ""}
          </p>
        </div>
      </div>
    </div>
  );
}
