"use client"

import LinkButton from "@/components/button/link";
import Layout from "@/components/layout/Layout";
import TotalSearch from "@/components/search/TotalSearch";
import { AppContext } from "@/providers/AppProvider";
import { AuthContext } from "@/providers/AuthProvider";
import { DataContext } from "@/providers/DataProvider";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Home() {

  const { loading, setLoading } = useContext(AppContext)
  const { user } = useContext(AuthContext)
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
    else{
      console.log(user)
      setLoading(false)
    }
  }, [user, loading]);

  if (loading || !user) {
    return null;
  }


  return (
    <Layout>
      <div className="">
        <div className="flex flex-col  p-2 mt-4">
          <div className="flex justify-center items-center">
            <div className="max-w-2xl flex border rounded-2xl border-white/25 w-full p-8 flex-col divide-y-1 divide-gray-30">
              <div className="flex justify-between w-full py-2">
                <p>Name :</p>
                <p className="text-white">{user.displayName}</p>
              </div>
              <div className="flex justify-between w-full py-2">
                <p>Email :</p>
                <p className="text-white">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
