'use client'
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth,useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { GiPartyPopper } from "react-icons/gi";
import { GiBulb } from "react-icons/gi";
import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { IoReorderThreeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'; 
export default function CreateSocietyHeader(){
    const router = useRouter();
    const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut();  // Sign the user out
    router.push('/');
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return <header className="w-full border-b flex">
        <div className="wrapper flex items-center justify-between">
            <Link href={"/"}>
           <span className="font-light text-2xl md:text-3xl relative z-10"> IGDTUW Events </span> 
             </Link>

       <div className="flex items-center">
        <button className="block md:hidden rounded-full bg-indigo-300 p-2 z-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <IoReorderThreeOutline />
        </button>
        <div
    className={`${
      isMenuOpen ? "block" : "hidden"
    } items-center md:flex flex-col md:flex-row absolute md:static top-10 right-0 p-4 shadow-lg md:shadow-none bg-white z-20`}
  >
       <Link href="/events">
          <div className="flex items-center m-2 rounded-lg transition-shadow duration-200 ease-in-out w-full max-w-xs ">
           <GiPartyPopper className="mr-4 text-pink-500 text-4xl"></GiPartyPopper>
            <p className="text-lg font-semibold">Events</p>
          </div>
        </Link>
        <Link href="/societies">
          <div className="flex items-center p-4 m-2 rounded-lg transition-shadow duration-200 ease-in-out w-full max-w-xs ">
           <GiBulb className="mr-4 text-sky-500 text-4xl"></GiBulb>
            <p className="text-lg font-semibold">Societies</p>
          </div>
        </Link>
        <Link href={'/societies/createsociety'}>
        <Button type = "button" className="bg-black rounded-full text-white hover:bg-transparent hover:text-black hover:border-sky-400 hover:border-2 ">List New Society</Button>
        </Link>
        
        </div>
       </div>
        <div className="flex justify-end items-center gap-2 relative z-20">
            
            <SignedIn >
                <UserButton afterSignOutUrl="/">
                <button onClick={handleSignOut}>Sign Out</button>
                </UserButton>
            </SignedIn>
            <SignedOut>
               <div className="bg-gradient-to-r from-blue-500 to-blue-700 font-medium text-white py-2 px-4 rounded-full shadow-lg ">
                <SignInButton mode="modal" ></SignInButton>
                </div>
             </SignedOut>

        </div>
        </div>
    </header>
}