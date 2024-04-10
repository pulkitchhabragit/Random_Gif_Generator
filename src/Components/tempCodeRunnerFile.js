
    // network call ka response aane ke baad setLoading flase krdi taki spinner dikhna bnd ho jae
  }
  // Random gif isliye aa rhi h kyuki hmne random gif api call kr rhe h
  // hr time ek alg gif esliye aa rhi h kyuki jb bhi hmari state change hongi react re render krega hmare code ko

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }
  return (
    <div className="w-1/2  bg-violet-100 rounded-2xl border border-black flex flex-col items-center gap-y-5 mt-[15px] overflow-hidden">
      <h1 className="text-2xl underline uppercase font-bold mt-[15px]">
        A Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="gif" width="450px" />}

      <button
        onClick={clickHandler}
        className="w-10/12 bg-amber-300 font-bold text-lg py-2 rounded-lg mb-[20px] "
      >
        Generate
      </button>
    </div>
  );
};

export default Random;