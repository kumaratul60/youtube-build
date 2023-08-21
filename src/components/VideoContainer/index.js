import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../../config/constantAPI";

import VideoCard, { AidVideoCard2WithStyles, aidVideoCard } from "../VideoCard";
import Spinner from "../Spinner";
import VideoCardSkeleton from "../Shimmer/VideoCardSkeleton";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showVideoCard, setShowVideoCard] = useState(false);

  const AdPromoCard = aidVideoCard(VideoCard);

  useEffect(() => {
    fetchAPIData();
    const timer = setTimeout(() => {
      setShowVideoCard(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const fetchAPIData = async () => {
    try {
      const getData = await fetch(YOUTUBE_VIDEOS_API);
      const response = await getData.json();

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
        <>
          <Spinner />
        </>
      ) : videos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          <AdPromoCard vInfo={videos[0]} />

          <AidVideoCard2WithStyles vInfo={videos[4]} />

          {videos.map((v) => (
            <Link to={`/watch?vt=${v.id}`} key={v.id}>
              {showVideoCard ? <VideoCard vInfo={v} /> : <VideoCardSkeleton />}
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
