import { useEffect, useState } from "react";
import { CHANNEL_API_KEY, VIDEO_COMMENTS_URL } from "../config/constantAPI";

const useComments = (id) => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    fetchComments();
  }, []);
  const fetchComments = async () => {
    try {
      const getData = await fetch(
        `${VIDEO_COMMENTS_URL}${id}&key=${CHANNEL_API_KEY}`
      );
      const response = await getData.json();
      setComments(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return { comments };
};

export default useComments;
