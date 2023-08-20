import { useEffect, useState } from "react";
import ChatMessage from "../ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/slices/chatSlice";
import { generateRandomName, makeRandomStr } from "../../helper/mockNames";

const LiveChat = () => {
  const [inputChat, setInputChat] = useState("");
  const dispatch = useDispatch();
  const getMessages = useSelector((store) => store.liveChat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomStr(22),
        })
      );
    }, 1500);

    return () => clearInterval(timer);
  }, [dispatch]);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "you",
        message: inputChat,
      })
    );
    setInputChat("");
  };

  return (
    <>
      <div className="flex mt-4 items-center justify-center flex-col border border-gray-400 shadow-xl rounded-lg bg-slate-100">
        <div className="p-3 h-[450px] overflow-y-scroll flex flex-col-reverse">
          {getMessages.map((chat) => (
            <ChatMessage
              key={chat.id}
              name={chat.name}
              message={chat.message}
            />
          ))}
        </div>

        <form
          onSubmit={handleChatSubmit}
          className="flex w-full mb-4 items-center p-2"
        >
          <input
            className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1"
            placeholder="Type your message..."
            type="text"
            value={inputChat}
            onChange={(e) => setInputChat(e.target.value)}
          />
          <button
            className="px-4 py-2 ml-2 bg-green-400 rounded-lg text-white font-semibold "
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
