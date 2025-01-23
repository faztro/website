import { Toaster } from "react-hot-toast";
import Home from "../components/Home";

export default function Page() {
  return (
    <>
      <Toaster
        containerClassName="w-[80%] md:w-full md:mx-8 lg:mx-auto max-w-6xl"
        position="top-center"
        reverseOrder={false}
      />
      <Home />
    </>
  );
}
