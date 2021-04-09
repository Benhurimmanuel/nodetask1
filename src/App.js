import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Card from "./card";
import { useEffect, useState } from "react";

function App() {
  let [userList, setUserList] = useState([]);
  useEffect(async () => {
    let users = await axios.get("http://localhost:8080/");
    setUserList(users.data);
  }, []);

  return (
    <>
      {userList.map((item) => {
        return <Card folder={item}></Card>;
      })}
    </>
  );
}

export default App;
