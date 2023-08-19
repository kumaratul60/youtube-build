import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../../../config/constantAPI";
import VideoCard from "../../VideoCard";

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
    <div className=" m-2 px-10 ">
      <>
        {isSideVideoLoading ? (
          <p className=" m-auto text-lg text-gray-600">Loading...</p>
        ) : sideVideo.length > 0 ? (
          <div className=" ">
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
      </>
    </div>
  );
};

export default SideVideo;
