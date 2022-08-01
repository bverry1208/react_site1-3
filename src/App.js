import React from "react";
import "./App.css";
import Header from "./components/pages/Header";
import Slider from "./components/pages/Slider";
import Image from "./components/pages/Image";
import ImgText from "./components/pages/ImgText";
import Card from "./components/pages/Card";
import Banner from "./components/pages/Banner";
import Text from "./components/pages/Text";
import Footer from "./components/pages/Footer";
import Contents from "./components/pages/Contents";


function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Contents>
        <Slider fonts={["slider__wrap", "nexon"]}/>
        <Image skill={["section", "nexon"]}/>
        <ImgText skill={["section", "nexon", "gray"]}/>
        <Card skill={["section", "nexon"]}/>
        <Banner skill={["section", "gmarket"]}/>
        <Text skill={["section", "nexon"]}/>
      </Contents>
      <Footer skill={["section", "nexon", "gray"]}/>
    </>
  );
};

export default App;
