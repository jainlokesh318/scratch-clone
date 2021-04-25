import React from 'react'

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
            <div className="flex flex-row flex-wrap text-white px-2 py-1 my-2 mx-5 cursor-pointer bg-red-500 rounded-xl"
             onClick={runCode}
             >
             Run Code
            </div>
        </div>
    )
}

export default RunCode
