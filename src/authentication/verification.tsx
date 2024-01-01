import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase-config.ts";
import { useNavigate } from "react-router-dom";

const Verification: React.FC = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user && !user.emailVerified) {
            navigate("/verification");
        } else if (user && user.emailVerified) {
            navigate("/profile");
        }
    }, [user, navigate]);

    return (
        <div className="login">
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <h1 className="text-3xl font-semibold text-gray-900 dark:text-white font-black p-2">
                        Warnigo
                    </h1>
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Verification Page
                            </h1>
                            <p className={"text-white"}>Please check your email to verify your account.</p>
                            <button
                                className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={() => navigate("/")}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Verification;
