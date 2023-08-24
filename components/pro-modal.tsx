"use client";

import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog"; //constant rerouting imports is a pain in the vein.
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "@/components/ui/badge";

export const ProModal = () => {
    const ProModal = useProModal();


    return(
        <Dialog open={ProModal.isOpen} onOpenChange={ProModal.onClose}>
            <DialogContent>
                <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                    <div className="flex items-center gap-x-2 font-bold py-1">
                        Upgrade to 
                        <Badge className="bg-green-500 text-white    text-sm py-1">
                            Fusion++
                        </Badge>
                    </div>
                </DialogTitle>
            </DialogContent>
        </Dialog>
    )
}