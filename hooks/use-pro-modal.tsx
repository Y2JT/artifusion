import { create }  from "zustand";  //lib for pro modal

interface userProModalStore {   //interface for pro modal
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useProModal = create<userProModalStore>((set) => ({    //create pro modal, giving us global state control for opening closing the modal from everywhere.
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

// TODO: Provide a way to close the modal from anywhere in the app, to avoid dreaded hyqdration error, thanks nextjs.