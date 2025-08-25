import { useEffect, useState, Dispatch, SetStateAction } from "react";
import LoadingScreen from "./LoadingScreen";

export default function LoadingWrapper({ setSetter }: { setSetter: (fn: Dispatch<SetStateAction<number>>) => void }) {

  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    setSetter(setProgress);
  }, [setSetter]);

  return <LoadingScreen progress={progress} />;

}