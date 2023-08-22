// Layout wrapper for authentication-related components
const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="flex items-center justify-center h-full">
            {children}
        </div> // renders children inside flex container
    );
}

export default AuthLayout;