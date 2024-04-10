// import "./App.css";
import Random from "./Components/Random";
import Tag from "./Components/Tag";

function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden ">
      <h1 className= "bg-white rounded-xl  w-11/12 text-center  text-4xl mt-[40px] px-10 py-2 font-bold  items-center mx-auto ">Random Gif</h1>

      <div className="flex flex-col items-center gap-y-10 mt-[30px] ">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
