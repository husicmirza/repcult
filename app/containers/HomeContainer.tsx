import React from "react";
import JoinUs from "../components/JoinUs";
import AboutUs from "../components/AboutUs/index.tsx";
import Timeline from "../components/Timeline";
import FaqAndContact from "../components/FaqAndContact";
import RapcultPackages from "../components/RapcultPackages";
import SuccessStories from "../components/SuccessStories";

export default function HomeContainer() {
  return (
    <>
      <JoinUs />
      <AboutUs />
      <Timeline />
      <RapcultPackages />
      <SuccessStories />
      <FaqAndContact />
    </>
  );
}
