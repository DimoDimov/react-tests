import { useEffect } from "react";

interface WelcomeMessageProps {
  name: string;
}

export const WelcomeMessage = ({ name }: WelcomeMessageProps) => {
  useEffect(() => {
    console.log("Welcome message", name);
  }, [name]);
  return <h1>Welcome, {name}!</h1>;
};
