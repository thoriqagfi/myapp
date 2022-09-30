import React from "react";
// import HelloComponent from "../components/HelloComponent";
import LearnReactHooks from "../components/LearnReactHooks";
import LearnReactEffect from "../components/LearnReactEffect";
import LearnUseRef from "../components/LearnUseRef";
import LearnUseCallback from "../components/LearnUseCallback";
import LearnUseMemo from "../components/LearnUseMemo";
// import LearnEffectReact from "../components/LearnEffectReact";

function Home() {
  return (
    <>
      <LearnReactHooks/>
      <LearnReactEffect/>
      <LearnUseRef/>
      <LearnUseCallback/>
      <LearnUseMemo/>
      {/* <HelloComponent/> */}
      {/* <LearnEffectReact/> */}
    </>
  )
}

export default Home;