// import ReactDOM from 'react-dom/client';

function Football() {

//     const shoot = () => {
//         alert("you are the best player");
//     }

//     const Fire = () => {
//         alert("you are the fire man")
//     }



//     return(
//         <>
//             <button className="w-48 h-10 bg-red-500 text-white cursor-pointer" onClick={shoot}>Take the shoot</button>

//             <button onClick={Fire}>Take the Fire</button>
//         </>
//     );

// }

    const shoot = (a) => {
        alert(a);
    }

    return(
        <button onClick={() => shoot("goal!")}>Take the shoot!</button>
    )
 }



export default Football