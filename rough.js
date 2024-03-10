 // creating h1 tag with values inside
// const heading = React.createElement("h1",{id:"heading"},"Hello World from React");

 // whatever we create in react it will allways render inside react . so that we are creating react root 
 // then we are placing the react root inside the browser in the expected place by using its id 
// const root = ReactDOM.createRoot(document.getElementById("root"));

 // then we are rendering the heading inside react root
// root.render(heading);
//------------------------------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement("div", {id:"parent"}, [
//     React.createElement("div",{id:"child"},[
//             React.createElement("h1", {}, "I'm a h1 tag"),
//             React.createElement("h2", {}, "I'm a h2 tag"),
//         ]),
//     React.createElement("div", {id:"child2"}, [
//             React.createElement("h1", {}, "i'm h1 tag"),
//             React.createElement("h2", {}, "i'm h2 tag"),

//         ]),    
//     ]);

//     console.log(parent);
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(parent);

// const heading = <h1 id="parent2">Namaste React using JSX</h1>;

// const root2 = ReactDOM.createRoot(document.getElementById("root2"));

// root2.render(heading);

//-------------------------------
//Component Composistion: rendering 1 or more on other component

const Title = () =><h1>Component Composistion</h1>;

const Title2 = () =>(
    <div>
        <Title/>
        <h1>React functional component</h1>
    </div>
);
         
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title2 />);