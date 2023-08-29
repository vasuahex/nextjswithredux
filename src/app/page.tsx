"use client";
import { AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux/";
import { printingValue } from "@/redux/features/auth-slice";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const  {value}  = useSelector((store: any) => store.auth);

  return (
    <div>
      <h1 className="bg-yellow-600">{value}</h1>
      <button onClick={() => dispatch(printingValue("redux function call"))}>
        function
      </button>
    </div>
  );
};

export default Home;
