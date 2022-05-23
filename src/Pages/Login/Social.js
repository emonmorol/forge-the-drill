import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import primaryAxios from "../../Api/primaryAxios";
import Loading from "../../Components/Loading/Loading";
import auth from "../../firebase.init";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      (async () => {
        const { data } = await primaryAxios.put("/user", {
          name: user?.user?.displayName,
          email: user?.user?.email,
        });
      })();
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (loading) {
    return <Loading />;
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
