import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
    const apiLimitCount = await getApiLimitCount();
    const isCreator = await checkSubscription();

    return (
        <div className="flex items-center p-4">
            <MobileSidebar isCreator={isCreator} apiLimitCount={apiLimitCount}/>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    );  
} 

export default Navbar;