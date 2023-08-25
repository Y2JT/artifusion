"use client";

import { Menu } from "lucide-react"; 

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

interface MobileSidebarProps {
    apiLimitCount: number;
    isCreator: boolean | undefined;
};

const MobileSidebar = ({
     apiLimitCount = 0, 
     isCreator = false,
    }: MobileSidebarProps) => {    // MobileSidebar component
    const [isMounted, setIsMounted] = useState(false); // isMounted state to deal with hydration errors

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar isCreator={isCreator} apiLimitCount={apiLimitCount}/>
            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;  // Path: components/mobile-sidebar.tsx