import React from "react";
import { createContext } from "react";
// import HelloComponent from "../components/HelloComponent";
import LearnReactHooks from "../components/LearnReactHooks";
import LearnReactEffect from "../components/LearnReactEffect";
import LearnUseRef from "../components/LearnUseRef";
import LearnUseCallback from "../components/LearnUseCallback";
import LearnUseMemo from "../components/LearnUseMemo";
import LearnUseContext from "../components/LearnUseContext";
import ThemeProvider from "../context/theme";
// import LearnEffectReact from "../components/LearnEffectReact";

export const UserContext = createContext({
  id: '123wefdsf4',
  name: "Thariq Agfi Hermawan",
  email: 'thoriq.aghfi60@gmail.com',
  
});

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <LearnReactHooks/>
        <LearnReactEffect/>
        <LearnUseRef/>
        <LearnUseCallback/>
        <LearnUseMemo/>
        <LearnUseContext/>
        {/* <HelloComponent/> */}
        {/* <LearnEffectReact/> */}
      </ThemeProvider>
    </>
  )
}