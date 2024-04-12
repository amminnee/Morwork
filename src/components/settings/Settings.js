import React, { createContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SettingsNav from "./SettingsNav";
import Header from "../navigation/Header";
import SettingsPage from "./SettingsPage";
import TextHeader from "../navigation/TextHeader";


export const HeaderContext = createContext()

export default function Settings() {
    const path = useLocation().pathname
    const [header, setHeader] = useState("")

    return (
        <>
            <Header isVisible={true} searchBar={false} />
            <div className="main-cont">
                <SettingsNav />
                <div>
                    <div className="settings-page elevation-1 radius">
                        <TextHeader title={header} />
                        <HeaderContext.Provider value={{header, setHeader}} >
                            {path === '/settings' ?
                                <SettingsPage />
                                :
                                <Outlet /> 
                            }
                        </HeaderContext.Provider>
                        
                    </div>
                </div>
                
            </div>
        </>
        
    )
}
