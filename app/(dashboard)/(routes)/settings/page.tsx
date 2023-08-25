import { Settings } from "lucide-react";
import { Heading } from "@/components/heading";
import { checkSubscription } from "@/lib/subscription";
import { SubscriptionButton } from "@/components/subscription-button";


const SettingsPage = async () => {
    const isCreator = await checkSubscription() ?? false;
    
    return (
        <div>
            <Heading
                title="Settings"
                description="Manage your account settings and set e-mail preferences."
                icon={Settings}
                iconColor="text-gray-500"
                bgColor="bg-gray-500/10"
             />
             <div className="px-4 lg:px-8 space-y-4">
                <div className="text muted-forground text-sm">
                    {isCreator ? "You are currently on a Creator plan." : "You are currently on a free plan."}
                </div>
                <SubscriptionButton isCreator={isCreator} />
             </div>
        </div>
    );
}

export default SettingsPage;
    