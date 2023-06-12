import React from "react";
import WaterCounter from "./WaterCounter";
import PillReminder from "./PillReminder";
import EventReminders from "./EventReminder";
import MedicalReport from "./MedicalReport";

const Home=()=>{
    return(
        <>
        <WaterCounter/>
        <PillReminder/>
        <EventReminders/>
        <MedicalReport/>
        </>
    )
};
export default Home;