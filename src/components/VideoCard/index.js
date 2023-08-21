import React from "react";
import { Statistic, formatDate,  } from "../../utils/commonFn";

const VideoCard = ({ vInfo }) => {
  const { snippet, statistics } = vInfo;
  const { channelTitle, publishedAt, thumbnails, title } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="video-card p-4 m-2 w-72 bg-white shadow-md rounded-md">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <div className="mt-2">
        <p className="font-bold text-lg">{title}</p>
        <p className="font-semibold text-sm">{channelTitle}</p>
      </div>

      <div className="flex justify-between">
        <p className="text-gray-500 text-sm">{formatDate(publishedAt)}</p>
        <Statistic label="Views" value={viewCount} />
      </div>
    </div>
  );
};


// Writing HOC component in different ways
const aidVideoCard = () => {
  return (props) => {
    return (
      <div className="m-1 p-1 border border-blue-900">
        <VideoCard {...props} />
      </div>
    );
  };
};


const withVideoCardStyles = (WrappedComponent, borderClass) => {
  return ({ vInfo }) => (
    <div className={`p-1 border ${borderClass}`}>
      <WrappedComponent vInfo={vInfo} />
    </div>
  );
};
const AidVideoCard = (vInfo) => {
  return (
    <div className=" p-1 border border-pink-900">
      <VideoCard {...vInfo} />
    </div>
  );
};

const AidVideoCard2 = ({ vInfo }) => {
  return (
    <div className="p-1 border border-green-900">
      <VideoCard vInfo={vInfo} />
    </div>
  );
};

const AidVideoCard3 = (vInfo) => {
  return (
    <div>
      <VideoCard {...vInfo} />
    </div>
  );
};

const AidVideoCard4 = ({ vInfo }) => {
  return (
    <div>
      <VideoCard vInfo={vInfo} />
    </div>
  );
};

const AidVideoCard2WithStyles = withVideoCardStyles(
  AidVideoCard3,
  "border-yellow-500"
);
const AidVideoCardWithStyles = withVideoCardStyles(
  AidVideoCard4,
  "border-gray-400"
);
export {
  AidVideoCardWithStyles,
  AidVideoCard2WithStyles,
  aidVideoCard,
  AidVideoCard,
  AidVideoCard2,
};

export default VideoCard;
