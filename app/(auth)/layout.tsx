const AuthLayout = ({ children }) => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-white-smoke">
            <div className="w-full max-w-[400px] mx-auto">{children}</div>
        </div>
    )
}

export default AuthLayout;