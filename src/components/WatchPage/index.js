import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";

import CommentsContainer from "../CommentsContainer";
import SideVideo from "./SideVideoContainer";
import LiveChat from "../LiveChat";
import VideoStates from "./VideoStats";
import VideoStatsSkeleton from "../Shimmer/VideoStatsSkeleton";

import { YOUTUBE_VIDEOS_API } from "../../config/constantAPI";
import { closeMenu } from "../../utils/slices/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [watchVideo, setWatchVideo] = useState([]);

  // const { itemId } = useParams(); Use the itemId to fetch and display the item details.
  // Use the itemId to fetch and display the item details
  //  so when you've queryParams (/watch?vt=${v.id}) in the url so use useSearchParams hooks

  // The useSearchParams hook is used to access and manipulate query parameters in the URL. Query parameters are used to pass additional information to a page, often in the form of key-value pairs

  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    fetchWatchAPIData();
  }, []);
  const fetchWatchAPIData = async () => {
    try {
      const getData = await fetch(YOUTUBE_VIDEOS_API);
      const response = await getData.json();

      if (response?.items) {
        setWatchVideo(response.items);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filteredWatchVideo = watchVideo.filter(
    (v) => v.id === searchParams.get("vt")
  );

  return (
    <div className="grid grid-cols-12 gap-0">
      <div className="col-span-12 sm:col-span-9">
        <div className="p-2 m-2">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${searchParams.get("vt")}`}
            width="100%"
            height="520px"
            controls
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1,
                },
              },
            }}
          />
        </div>
        {filteredWatchVideo.length === 0 ? (
          <div className="m-auto">
            <VideoStatsSkeleton />
          </div>
        ) : (
          <div>
            <VideoStates statsInfo={filteredWatchVideo[0]} />
            <CommentsContainer />
          </div>
        )}
      </div>
      <div className="col-span-12 sm:col-span-3">
        <LiveChat />
        <SideVideo />
      </div>
    </div>
  );
};

export default WatchPage;
