const GOOGLE_API_KEY = "AIzaSyBQRyqykU6NycYaiHRgjUIIG5OIRIsg_Pw";

// export const YOUTUBE_VIDEOS_API =
//   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
//   process.env.GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
