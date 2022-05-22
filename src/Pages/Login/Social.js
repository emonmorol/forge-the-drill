import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../Components/Loading/Loading";
import auth from "../../firebase.init";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <Loading />;
  }
  if (user) {
    console.log(user);
  }

  return (
    <div className="w-full px-10 mb-10">
      {error && <p className="error my-5">{error.message}</p>}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline my-5 w-full border-primary hover:border-0 bg-transparent hover:bg-primary text-white uppercase"
      >
        <i class="fa-brands fa-google mr-2"></i> Continue With Google
      </button>
    </div>
  );
};

export default Social;
