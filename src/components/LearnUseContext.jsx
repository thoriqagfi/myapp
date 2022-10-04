
import TopBar from "./TopBar";
import { UserContext } from "../pages/Home";
import { useContext } from "react";
import { useTheme } from "../context/theme";

export default function LearnUseContext() {
  const user = useContext(UserContext);
  const themeContext = useTheme();
  
  const { theme, setDarkTheme, setLightTheme } = themeContext;

  return (
    <div className="text-center bg-pink-400">
      <h1 className="text-3xl font-bold py-4">Learn Use Context</h1>
      <TopBar/>
      {/* Menggunakan useContext */}
      <h2 className="font-secondary text-3xl font-bold py-3">Using useContext</h2>
      <h3 className="font-secondary text-xl font-bold pt-1">USER</h3>
      <p>ID : {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <h3 className="font-secondary text-xl font-bold pt-1">THEME</h3>
      <p>Theme: {themeContext.theme}</p>
      <p>Color: {themeContext.primary}</p>

      <h3 className="text-xl font-bold py-2">THEME 2 : {theme}</h3>
      <button onClick={setDarkTheme} className='my-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800 mx-2'>Set Dark</button>
      <button onClick={setLightTheme} className='my-1 py-1 px-3 bg-lime-500 rounded-full border-2 hover:border-lime-800 mx-2'>Set Light</button>
    </div>  
  );
}