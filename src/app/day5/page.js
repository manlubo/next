"use client";

import {useState} from "react";
import ProfileForm from "@/components/day5/ProfileForm";
import ProfileList from "@/components/day5/ProfileList";

export default function Page(){
  const [profiles, setProfiles] = useState([]);

  function handleSave(profile){
    setProfiles([...profiles, profile]);
  }

  return(
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Day 5 - state 심화 에제</h1>
      <ProfileForm onSave={handleSave}/>
      <ProfileList profiles={profiles} />
    </div>
  )
}