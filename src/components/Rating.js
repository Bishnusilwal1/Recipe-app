import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className="hidden"
              onClick={() => setRating(ratingValue)}
            />
            <svg
              className={`w-8 h-8 cursor-pointer ${
                ratingValue <= (hover || rating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927C9.432 1.743 10.568 1.743 10.951 2.927L12.27 7.25L16.95 7.585C18.22 7.674 18.806 9.23 17.807 10.107L14.143 13.103L15.181 17.659C15.452 18.932 14.067 19.841 13.036 19.092L9.049 16.148L5.062 19.092C4.031 19.841 2.646 18.932 2.917 17.659L3.955 13.103L0.291 10.107C-0.707 9.23 -0.122 7.674 1.149 7.585L5.829 7.25L7.148 2.927C7.531 1.743 8.667 1.743 9.049 2.927Z" />
            </svg>
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
