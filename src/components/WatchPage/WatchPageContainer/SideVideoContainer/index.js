import { Link } from "react-router-dom";
import Spinner from "../../../Spinner";
import SideCard from "../SideCard";
import useSideVideo from "../../../../hooks/useSideVideo";

const SideVideo = () => {
  const { sideVideo, isSideVideoLoading } = useSideVideo();

  return (
    <div className="mt-5 m-2 px-4 md:px-4 lg:px-6 ">
      {isSideVideoLoading ? (
        <>
          <Spinner />
        </>
      ) : sideVideo.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1">
          {sideVideo.map((v) => (
            <Link to={`/watch?vt=${v.id}`} key={v.id}>
              <SideCard sideVideoInfo={v} />
            </Link>
          ))}
        </div>
      ) : (
        <p className=" m-auto text-lg text-gray-600">
          No videos available currently.
        </p>
      )}
    </div>
  );
};

export default SideVideo;
