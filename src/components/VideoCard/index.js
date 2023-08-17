import React from "react";
import { formatDate, truncateText } from "../../utils/commonFn";

const VideoCard = ({ vInfo }) => {
//   console.log({ vInfo: vInfo });
  const { snippet, statistics } = vInfo;
  const {
    channelId,
    channelTitle,
    description,
    publishedAt,
    thumbnails,
    title,
  } = snippet;
  const { viewCount, commentCount, likeCount } = statistics;

  return (
    <div className="video-card p-4 m-2 w-72 bg-white shadow-md rounded-md">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <div className="mt-2">
        <p className="font-bold text-lg">{title}</p>
        <p className="font-semibold text-sm">{channelTitle}</p>
      </div>

      <div className="flex justify-between">
        <p className="text-gray-500 text-sm">{formatDate(publishedAt)}</p>
        <p className="text-gray-600">Views: {viewCount}</p>
        {/* <p className="text-gray-700 text-sm">{truncateText(description, 80)}</p> */}
      </div>
      {/* <div className="mt-2">
        <p className="text-gray-600">Views: {viewCount}</p>
        <p className="text-gray-600">Comments: {commentCount}</p>
        <p className="text-gray-600">Likes: {likeCount}</p>
      </div> */}
    </div>
  );
};

export default VideoCard;
