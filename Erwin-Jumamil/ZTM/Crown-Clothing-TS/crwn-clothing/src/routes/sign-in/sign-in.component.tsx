import { signInWithGooglePopup } from "../../utils/firebase/firebase.util";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In on Google</button>
    </div>
  );
};
