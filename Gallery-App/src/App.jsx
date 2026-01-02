import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );

    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = <h3 className="text-gray-300 absolute top-1/2 left-1/2 font-semibold">Loading...</h3>;

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="flex h-[82%] flex-wrap gap-4 p-4">{printUserData}</div>

      <div className="flex justify-center items-center gap-6 p-4">
        <button 
        style={{opacity: index == 1 ? 0.5 : 1}}
        className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        >
          Prev
        </button>
        <h3>Page {index}</h3>
        <button 
        className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
        onClick={()=>{
          setIndex(index+1)
          setUserData([]) 
        }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
