import React, { useEffect, useRef, useState } from "react";
import Aside from "./components/dashboard/aside";
import Navbar from "./components/dashboard/navbar";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import Preloader from "../components/preloader";
import { readContract } from "@wagmi/core";
import { contract_abi, contract_address } from "../constants";
import { wagmiConfig } from "../hooks/wagmi-config";
const AdminPage = (props) => {
  const [view, setView] = useState("loading");
  const isMounted = useRef(false);
  const { address, isConnected } = useAccount();
  const navigate = useNavigate();
  useEffect(() => {
    if (!address && !isConnected) {
      navigate("/");
    }
  }, [address, isConnected]);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      // setTimeout(() => setView("content"), 5000)
      getUserData();
    }
  }, []);
  async function getUserData() {
    const userData = await readContract(wagmiConfig, {
      abi: contract_abi,
      address: contract_address,
      functionName: "getUser",
      args: [address],
    });
    userData.id = parseInt(userData.id)
    localStorage.authUser = JSON.stringify(userData);
    setView('content')
  }
  return (
    <>
      <div className="flex">
        <div className="bg-[#0e0e0e] h-screen fixed w-64 border-r-[1px] border-r-[#0d0101] md:block hidden">
          <div className="overflow-auto h-screen sticky top-0 hide-scrollbar">
            <Aside />
          </div>
        </div>
        <div className="md:ml-64 w-full">
          <Navbar />
          {(view == "loading" && <Preloader />) || (
            <div className="mx-4">{props.children}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
