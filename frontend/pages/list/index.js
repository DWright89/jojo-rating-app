import { React, useState, useEffect } from "react";

const BaseUrl = "http://localhost:8000";

const JojoListPage = (props) => {
  const [jojoList, setJojoList] = useState([]);

  const getJojos = async () => {
    try {
      const response = await fetch(`${BaseUrl}/jojos/list`);
      const jojoData = await response.json();
      console.log(jojoData);
      setJojoList(jojoData);
    } catch (error) {
      console.error("lmao", error);
    }
  };
  useEffect(() => {
    getJojos();
  }, []);

  const jojoDisplay = jojoList.map((jojo) => {
    return (
      <ul>
        <li key={jojo.name}>Name: {jojo.name}</li>
        <li>Age: {jojo.age}</li>
        <li>Abs: {jojo.pack} pack</li>
        <li>Luck: {jojo.luck}</li>
        <img src={jojo.image} />
      </ul>
    );
  });

  return (
    <div>
      <p>
        This will be a stylish list of the different Jojos with a link to click
        to go to the Jojo rating part
      </p>
      <p>jojo list here</p>

      {jojoDisplay}
    </div>
  );
};

export default JojoListPage;
