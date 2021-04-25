import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import RunCode from "./components/RunCode";
import Categories from "./components/Categories";
import Nav from "./components/Nav";
import { createPreview } from "./previewHelper";

export default function App() {
  return (
    <div className="bg-blue-100 font-sans">
      <Nav/>
      <RunCode />
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Categories id="categories" /> <Sidebar id="sideBar" /> <MidArea id="midArea" />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea preview={createPreview()} />
        </div>
      </div>
    </div>
  );
}
