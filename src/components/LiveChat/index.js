import { useEffect, useState } from "react";
import ChatMessage from "../ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/slices/chatSlice";
import { generateRandomName, makeRandomStr } from "../../helper/mockNames";
import { generateRandomThreeDigitNumber } from "../../utils/commonFn";
import { BASE_IMAGE_URL } from "../../config/constantAPI";

const LiveChat = () => {
  const [inputChat, setInputChat] = useState("");
  const [randomThreeDigitNumber, setRandomThreeDigitNumber] = useState(312);

  const dispatch = useDispatch();
  const getMessages = useSelector((store) => store.liveChat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      // API Polling

      const updatedRandomNumber = generateRandomThreeDigitNumber();
      setRandomThreeDigitNumber(updatedRandomNumber);

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomStr(28),
          img: `${BASE_IMAGE_URL}${updatedRandomNumber}.jpg`,
        })
      );
    }, 1500);

    return () => clearInterval(timer);
  }, [dispatch]);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (inputChat.trim() !== "") {
      dispatch(
        addMessage({
          name: "you",
          message: inputChat,
          img: `${BASE_IMAGE_URL}${randomThreeDigitNumber}.jpg`,
        })
      );
    }
    setInputChat("");
  };

  return (
    <>
      <div className="flex mt-4 mr-10 items-center justify-center flex-col border border-gray-400 shadow-xl rounded-lg bg-slate-100">
        <div className="p-3 max-h-[450px] overflow-y-scroll overflow-x-hidden flex flex-col-reverse w-full">
          {getMessages.map((chat) => (
            <ChatMessage
              key={chat.id}
              name={chat.name}
              message={chat.message}
              img={chat.img}
            />
          ))}
        </div>

        <form
          onSubmit={handleChatSubmit}
          className="flex flex-col justify-center sm:flex-wrap   sm:flex-row w-full mb-4 p-2"
        >
          <input
            className="flex-grow px-3 py-2 mb-2 sm:mb-0  border  border-gray-300 rounded-lg focus:outline-none focus:ring-1"
            placeholder="Type your message..."
            type="text"
            value={inputChat}
            onChange={(e) => setInputChat(e.target.value)}
          />
          <button
            className="w-full sm:w-auto px-4 py-2 ml-2  lg:my-0 sm:my-2 bg-green-400 rounded-lg text-white font-semibold "
            onClick={handleChatSubmit}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};
export default LiveChat;
