import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId = "959647849030-5lrli8u42k7j0p7i7tqvuoruv1uogg4i.apps.googleusercontent.com";

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSuccess = (response) => {
        console.log("Google login success:", response);
        setIsLoggedIn(true);
        onSuccess(response);
    };

    const handleFailure = (error) => {
        console.error("Google login failure:", error);
        onFailure(error);
    };

    const handleLogoutSuccess = () => {
        console.log("Google logout success");
        setIsLoggedIn(false);
    };

    return (
        <div id="signInButton">
            {isLoggedIn ? (
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={handleLogoutSuccess}
                />
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={handleSuccess}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        </div>
    );
};

export default GoogleLoginButton;
