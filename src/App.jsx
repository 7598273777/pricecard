import React from 'react';
import  PriceCard from './Components/PriceCard.jsx';
import './assets/styles/style.css';
function App() {
  const data = [
    { 
      title: "FREE",
      price: "$0/month",
      features: [
        { name: "Single user", isAvailable: true },
        { name: "50GB Storage", isAvailable: true },
        { name: "Unlimited Public Projects", isAvailable: true },
        { name: "Community Access", isAvailable: true },
        { name: "Unlimited Private Projects ", isAvailable:false },
        { name: "Dedicated Phone Support", isAvailable: false },
        { name: "Free Subdomain ", isAvailable: false },
        { name: "Monthly status Reports", isAvailable: false },
      ],
      btnText:"Buy Now",
    },
    { 
      title: "PLUS",
      price: "$9/month",
      features: [
        { name: "5 Users", isAvailable: true },
        { name: "50GB Storage", isAvailable: true },
        { name: "Unlimited Public Projects", isAvailable: true },
        { name: "Community Access", isAvailable: true },
        { name: "Unlimited Private Projects ", isAvailable: true },
        { name: "Dedicated Phone Support", isAvailable: true },
        { name: "Free Subdomain ", isAvailable: true },
        { name: "Monthly status Reports", isAvailable: false },
      ],
      btnText:"Buy Now",
    },
    {
      title: "PRO",
      price: "$49/month",
      features: [
        { name: "Unlimited Users", isAvailable: true },
        { name: "50GB Storage", isAvailable: true },
        { name: "Unlimited Public Projects", isAvailable: true },
        { name: "Community Access", isAvailable: true },
        { name: "Unlimited Private Projects ", isAvailable: true },
        { name: "Dedicated Phone Support", isAvailable: true },
        { name: "Free Subdomain ", isAvailable: true },
        { name: "Monthly status Reports", isAvailable: true },
      ],
      btnText:"Buy Now",
    },
  ];

 return (
    <>
      <div class="main">
      {data.map((element, index) => (
        <PriceCard
          key={index}
          title={element.title}
          price={element.price}
          btnText= {element.btnText}  
          items={element.features}
        />
      ))}
      </div>
     
    </>
  );


}

export default App;

// import React from "react";
// import Square, { Circle } from "./Components/Square";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   // 1
//   componentWillMount() {
//     console.log("Will Mount");
//   }

//   // 2
//   componentDidMount() {
//     console.log("Did mount");
//   }

//   // 3
//   componentWillUpdate() {
//     console.log("Updating");
//   }

//   // 4
//   componentDidUpdate() {
//     console.log("Updated");
//   }

//   handleDecrement = (e) => {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };

//   handleIncrement = (e) => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <>
//         <button onClick={this.handleDecrement}>-</button>
//         <p>{this.state.count}</p>
//         <button onClick={this.handleIncrement}>+</button>
//       </>
//     );
//   }
// }

// export default App;
