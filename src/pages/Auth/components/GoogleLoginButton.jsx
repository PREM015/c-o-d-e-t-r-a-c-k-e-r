import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google user:", result.user);
      // Optionally: redirect or set context
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  return (
    <Button
      variant="outlined"
      fullWidth
      startIcon={<GoogleIcon />}
      onClick={handleGoogleLogin}
      sx={{
        py: 1.5,
        fontWeight: "bold",
        mt: 1,
      }}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleLoginButton;
