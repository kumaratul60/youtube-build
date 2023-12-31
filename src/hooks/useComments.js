import { VIDEO_COMMENTS_URL } from "config/constantAPI";
import { useEffect, useState } from "react";

const useComments = (id) => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    fetchComments();
    window.scrollTo({ top: 0 });
  }, [id]);

  const fetchComments = async () => {
    try {
      const getData = await fetch(
        // `${VIDEO_COMMENTS_URL}${id}&key=${GOOGLE_API_KEY}`
        `${VIDEO_COMMENTS_URL}${id}`
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
