export const GOOGLE_API_KEY = "AIzaSyDinuRlriLZ3JtSC0y0g1vbBT3_lNkEew0";

export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const COMMENTS_LIST_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&maxResults=50&orderby=published&videoId=`;

export const SUGGESTED_VIDEO_LIST_API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=59&type=video&regionCode=IN&key=${GOOGLE_API_KEY}&relatedToVideoId=`;

export const YOUTUBE_SEARCH_URL =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${GOOGLE_API_KEY}&q=`;


export const VIDEO_INFO_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&regionCode=IN&key=${GOOGLE_API_KEY}&id=`
