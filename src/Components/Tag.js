import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";

const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("");
  const{gif,loading,fetchData}=useGif(tag);

  //   Best Practise h Jb Hm Api Call krni h toh use use effect hook me krenge

  // async function fetchData() {
  //   // Network call kuch time le rhi h jb tk voh ni aarhi tb tk hm loader dikha  rhe h
  //   setLoading(true);

  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_medium.url;
  //   setGif(imageSource);
  //   setLoading(false);
  //   // network call ka response aane ke baad setLoading flase krdi taki spinner dikhna bnd ho jae
  // }
  // // Random gif isliye aa rhi h kyuki hmne random gif api call kr rhe h
  // // hr time ek alg gif esliye aa rhi h kyuki jb bhi hmari state change hongi react re render krega hmare code ko

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // function clickHandler() {
  //   fetchData();
  // }

  return (
    <div className="w-1/2  bg-emerald-200		 rounded-2xl border border-black flex flex-col items-center gap-y-5 mt-[15px] overflow-hidden">
      <h1 className="text-2xl underline uppercase font-bold mt-[15px]">
        A Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="gif" width="450px" />}

      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center italic text-semibold"
        value={tag}
        onChange={(event) => {
          setTag(event.target.value);
        }}
      />
      <button
        onClick={()=>fetchData(tag)}
        className="w-10/12 bg-amber-300 font-bold text-lg py-2 rounded-lg mb-[20px] "
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
