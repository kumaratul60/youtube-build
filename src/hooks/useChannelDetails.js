import { useEffect, useState } from "react";
import { CHANNEL_API } from "../config/constantAPI";

const useChannelDetails = (channelId) => {
  const [channel, setChannel] = useState(null);
  useEffect(() => {
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    const url = `${CHANNEL_API}${channelId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    const options = {
      method: "GET",
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setChannel(result);
    } catch (error) {
      console.error(error);
    }
  };

  return channel;
};

export default useChannelDetails;
