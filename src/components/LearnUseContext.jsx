
import TopBar from "./TopBar";
import { UserContext, ThemeContext } from "../container/Home";
import { useContext } from "react";

export default function LearnUseContext() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  console.log(theme);
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
      <p>Theme: {theme.theme}</p>
      <p>Color: {theme.primary}</p>
    </div>  
  );
}

// Test