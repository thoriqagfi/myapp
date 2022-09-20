import React from "react";
// import HelloComponent from "../components/HelloComponent";
import LearnReactHooks from "../components/LearnReactHooks";
import LearnReactEffect from "../components/LearnReactEffect";
import LearnUseRef from "../components/LearnUseRef";
// import LearnEffectReact from "../components/LearnEffectReact";

function Home() {
  return (
    <div>
      <LearnReactHooks/>
      <LearnReactEffect/>
      <LearnUseRef/>
      {/* <HelloComponent/> */}
      {/* <LearnEffectReact/> */}
    </div>
  )
}

export default Home;