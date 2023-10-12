
const ClickOn4 = () => {
    /* Passing a Function */
    /* Calling a Function*/
    const handleClick = () => {
         alert("You are use Function")
    }

 return (
   <div>
     <button className="button px-12 h-16 w-48 bg-purple-600 hover:text-white text-2xl m-10 hover:border-4 border-black
     " onClick={handleClick()}>Click</button>
   </div>
 )
}

export default ClickOn4