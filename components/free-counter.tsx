"use client"; // this is a client-side component, will throw err if server-side, w/o use client
import { useState } from "react";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";
interface FreeCounterProps {
    apiLimitCount: number;
    isCreator: boolean | undefined;
};

export const FreeCounter = ({
    apiLimitCount = 0,
    isCreator = false,
}: FreeCounterProps) => {
    const proModal = useProModal();
    const[mounted, setMounted] = useState(false);   // if hydration needed

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    if (isCreator) {
        return null;
    }

    return (
        <div className="px-3">
            <Card className="bg-white/10 border-0">
                <CardContent className="py-6">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p>
                            {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
                        </p>
                        <Progress
                            value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
                        />
                    </div>
                    <Button onClick={proModal.onOpen} className="w-full" variant="premium">
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                </CardContent>
            </Card>
        </div>
                
    )
}