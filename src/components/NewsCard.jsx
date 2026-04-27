import { BsShare } from "react-icons/bs";
import { FaBookmark, FaShareAlt, FaRegEye, FaStar, FaRegStar, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, rating, total_view, details, thumbnail_url } = news;

  // Function to render stars based on rating number
  const renderStars = (ratingNum) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.round(ratingNum)) {
        stars.push(<FaStar key={i} className="text-orange-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-orange-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="card w-full bg-base-100 border border-gray-200 rounded-md overflow-hidden mb-6">
      {/* Author Header */}
      <div className="bg-gray-50 p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-sm text-gray-800">{author?.name}</h4>
            <p className="text-xs text-gray-500">
              {author?.published_date?.split("T")[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 cursor-pointer">
          <FaRegBookmark />
          <BsShare />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-4">
        <h2 className="card-title text-xl font-bold text-gray-800 leading-7">
          {title}
        </h2>
        
        <figure>
          <img
            src={thumbnail_url || "https://placehold.co/600x400"}
            alt="News Thumbnail"
            className="w-full h-72 object-cover rounded-lg"
          />
        </figure>

        <p className="text-sm text-gray-600 leading-6">
          {details?.length > 250 ? (
            <>
              {details.slice(0, 250)}...{" "}
              <span className="text-orange-500 font-semibold cursor-pointer">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>

        <hr className="border-gray-200" />

        {/* Footer */}
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center gap-2">
            <div className="flex">{renderStars(rating?.number)}</div>
            <span className="text-sm font-medium text-gray-500 ml-1">
              {rating?.number}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FaRegEye className="text-lg" />
            <span className="text-sm font-medium">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;