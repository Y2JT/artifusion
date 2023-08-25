"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";

interface SubscriptionButtonProps {
    isCreator: boolean | undefined;
};


export const SubscriptionButton = ({
    isCreator = false
}: SubscriptionButtonProps) => {

    const [loading, setLoading] = useState(false);

    const onClick = async() => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url;
            
        } catch (error) {
            console.log("BILLING_ERROR", error)
        } finally {
            setLoading(false);
        }
    }


    return (
        <Button disabled={loading} variant={isCreator ? "default" : "premium"} onClick={onClick}>
            {isCreator ? "Manage Subscription" : "Upgrade"}
            {!isCreator && <Zap className="w-4 h-4 ml-2 fill-white" size={16} />}
        </Button>
    );
}