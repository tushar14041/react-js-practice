import React from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './FrontendComponents/Expenses';
import DivCarousal from './DivCarousal';
import { Carousel } from 'react-responsive-carousel';
import PureSlider from './PureSlider';
import ImageSliders from './ImageSliders'
import ControlledSlider from './ControlledSlider'
import AvatarList from './ThapaAvatar/AvatarList';
import Avatar from './ThapaAvatar/Avatar';
import HorizontalScroll from './HorizontalScroll'


function App() {

  return (
       <div className="App">

     <HorizontalScroll/>

        {/* <Avatar /> */}


          {/* <ImageSliders />    */}
          {/* <ControlledSlider /> */}
          {/* <h1 > this is next thing</h1>      
          <h2 > this is next thing</h2>      
          <h3 > this is next thing</h3>       */}

         {/* <PureSlider/> */}
         {/* <DivCarousal/> */}
         {/* <Expenses/> */}
     </div>
  );
}

export default App;









// import  Greet from './Components/Greet'
// import Welcome from './Components/Welcome'
// import Message from './Components/Message'
// import Counter from './Components/Counter';
// import FuntionClick from './Components/FuntionClick';
// import ClassClick from './Components/ClassClick';
// import ArrowFuntion from './Components/ArrowFuntion';
// import Callback from './Components/Callback';
// import ParentComponent from './Components/ParentComponent';
// import ConditionalRendering from './Components/ConditionalRendering';
// import ListRendering from './Components/ListRendering';
// import NameList from './Components/NameList';
// import Stylesheet from './Components/Stylesheet';
// import Inline from './Components/Inline';
// import './Components/myStyle.css';
// import Styles from './Components/AppStyles.module.css';
// import SimpleImageSlider from "react-simple-image-slider";






//   const images = [
//     { url: "images/1.jpg" },
//     { url: "images/2.jpg" },
//     { url: "images/3.jpg" },
//     { url: "images/4.jpg" },
//     { url: "images/5.jpg" },
//     { url: "images/6.jpg" },
//     { url: "images/7.jpg" },
// ];



  //   {/* //    <h1 className='error' > Error </h1>
  //   //    <h1 className={Styles.success} > Success </h1>

  //   //    <SimpleImageSlider */}
  //   {/* //                 width={896}
  //   //                 height={504}
  //   //                 images={images}
  //   //             /> */}

  //        {/* <Inline></Inline>  */}

  //       {/* <Stylesheet primary={true} ></Stylesheet> */}

  //      {/* <NameList /> */}


  //     {/* <ListRendering /> */}


  //    {/* <ConditionalRendering /> */}

  //     {/* <ParentComponent /> */}
  // {/* <Callback /> */}


// Destructuring example
// function App() {
//   return (
//     <div className="App">
//     <Greet name="Tulsi Khatri" done="Engineering" />
//      </div>
//   );
// }



// function App() {
//   return (
//     <div className="App">

//        <Greet name="Tushar Khatri" heroName="Hulk">
//         <p> This is the paragraph tag in the greet component</p>
//       </Greet>
     
//       <Greet name="Ranjan" heroName="Hawkeye">
//       </Greet>

//        <Greet name="Mani Khatri" heroName="Ronin">
//       </Greet>

//      <Greet>
//        <button>Buttun</button>
//      </Greet>
//        <Welcome name="IronMan" />
      
//       <Welcome name="Captain America">
//         <p> Hello India </p>
//       </Welcome>
//     </div>
//   );
// }

// while importing Greet we can also use other component name, but path should be the same.