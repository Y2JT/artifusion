import Image from "next/image";

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="relative animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900">
                <Image
                    alt="logo"
                    layout="fill"
                    src="/loader.png"
                    objectFit="contain"
                />
            </div>
            <p className="text-sm text-muted-foreground">
                The Mastermind is thinking...
            </p>
      </div>
    )
};