import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setClickedVideo } from "utils/slices/videoSlice";
import SearchVideoCard from "../SearchVideoCard";
import VideoCardSkeleton from "../Shimmer/VideoCardSkeleton";

const SearchPage = () => {
  const dispatch = useDispatch();
  const storedData = JSON.parse(localStorage.getItem("searchState"));
  const responseData = storedData ? storedData.response : null;

  const resVideoCard = responseData.items;
  const handleVideoClick = (v) => {
    dispatch(setClickedVideo(v));
  };

  return (
    <>
      <div className="mt-5">
        {resVideoCard && resVideoCard.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2">
            {resVideoCard.map((v) => (
              <Link
                to={`/watch?vt=${v.id?.videoId}`}
                key={v.id}
                onClick={() => handleVideoClick(v)}
              >
                {<SearchVideoCard videoItem={v} /> || <VideoCardSkeleton />}
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-600 ml-[30rem]">
            No videos available currently.
          </p>
        )}
      </div>
    </>
  );
};

export default SearchPage;
