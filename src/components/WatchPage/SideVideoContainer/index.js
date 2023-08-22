import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../../../config/constantAPI";
import VideoCard from "../../VideoCard";
import Spinner from "../../Spinner";

const SideVideo = () => {
  const [sideVideo, setSideVideo] = useState([]);
  const [isSideVideoLoading, setIsSideVideoLoading] = useState(true);

  useEffect(() => {
    fetchAPIData();
  }, []);
  const fetchAPIData = async () => {
    try {
      const getData = await fetch(YOUTUBE_VIDEOS_API);
      const response = await getData.json();

      if (response?.items) {
        const last25Items = response.items.slice(-25); // Get the last 25 items
        setSideVideo(last25Items);
        // setSideVideo(response.items);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsSideVideoLoading(false);
    }
  };

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
              <VideoCard vInfo={v} />
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
