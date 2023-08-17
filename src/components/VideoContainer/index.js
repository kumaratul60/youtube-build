import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { YOUTUBE_VIDEOS_API } from "../../config/constantAPI";
import VideoCard from "../VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  // const { data, loading, error } = useFetch(YOUTUBE_VIDEOS_API);

  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAPIData();
  }, []);
  const fetchAPIData = async () => {
    try {
      const getData = await fetch(YOUTUBE_VIDEOS_API);
      const response = await getData.json();
      // console.log({ testApi: response });

      if (response?.items) {
        setVideos(response.items);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap p-6">
      {isLoading ? (
        <p className=" m-auto text-lg text-gray-600">Loading...</p>
      ) : videos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {/* <VideoCard vInfo={videos[0]} /> */}

          {videos.map((v) => (
            <Link to={`/watch?vt=${v.id}`} key={v.id}>
              {" "}
              <VideoCard vInfo={v} />{" "}
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

export default VideoContainer;
