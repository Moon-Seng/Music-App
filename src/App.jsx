import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-start overflow-y-hidden h-[100vh] justify-between">
        <div
          className="w-[18%] h-screen bg-gray-200"
          style={{ boxShadow: "2px 0px 50px 0px #0000000D" }}
        >
          <Sidebar />
        </div>
        <div className="w-[82%] px-12 py-8 bg-white">
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
