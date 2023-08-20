const GOOGLE_API_KEY = "AIzaSyBQRyqykU6NycYaiHRgjUIIG5OIRIsg_Pw";
const GOOGLE_LIKE_KEY = "AIzaSyC9yrR52wm7cgvDO23GJy_xNgj7-sI6l_8";

// export const YOUTUBE_VIDEOS_API =
//   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
//   process.env.GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

const YOUTUBE_SEARCH_XML =
  "https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=";


export const OFFSET_LIVE_CHAT = 15;
