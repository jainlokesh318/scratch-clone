import React from 'react'
import Icon from "./Icon";

function RunCode() {

    const runCode = () => {
        let t = 0;

        document.getElementById("midArea").childNodes.forEach(element => {
        
        setTimeout(()=>{
            element.click()
            element.classList.remove("bg-blue-500");
            element.classList.add("bg-red-500"); 
            }, t);

        setTimeout(()=>{
            element.classList.remove("bg-red-500")
            element.classList.add("bg-blue-500"); 
            }, t+1500);

        t += 1500; 
        });
  }

    return (
        <div className="flex justify-end">
            <div className="my-3 mx-2 cursor-pointer"
             onClick={runCode}
             >
                <Icon name="flag" size={25} className="text-green-600 mx-2" />
            </div>

            <div className="my-3 mx-2 cursor-pointer"
             onClick={runCode}
             >
                <Icon name="stop" size={25} className="text-red-600 mx-2" />
            </div>
        </div>
    )
}

export default RunCode
