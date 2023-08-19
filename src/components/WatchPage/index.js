import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../CommentsContainer";
import SideVideo from "./SideVideoContainer";

const WatchPage = () => {
  const dispatch = useDispatch();

  //    not using useParams here, because we get params in the queryParam way so by using it we will get an  empty object, useParam will work on /something/id:656.

  //  so when you've queryParams (/watch?vt=${v.id}) in the url so use useSearchParams hooks

  const [searchParams] = useSearchParams();
  //   console.log(searchParams.get("vt"));

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex">
      <div>
        <div className="p-2 m-2  ">
          <iframe
            width="1000"
            height="500"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "vt"
            )}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <CommentsContainer />
        </div>
      </div>

      <div className="">
        <SideVideo />
      </div>
    </div>
  );
};

export default WatchPage;
