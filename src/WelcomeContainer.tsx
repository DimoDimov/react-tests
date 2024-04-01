import React, { useState, useEffect } from "react";
import axios from "axios";
import { WelcomeMessage } from "./WelcomeMessage";

export const WelcomeContainer = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchMyAPI() {
      const { data } = await axios.get("https://api.publicapis.org/entries");
      console.log("data", data);
      setName("brr");
    }

    fetchMyAPI();
  }, []);

  return <WelcomeMessage name={name} />;
};
