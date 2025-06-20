import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";

import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  // This is how we did it at first, without using our custom hook
  // const queryClient = useQueryClient();
  // const {
  //   mutate: signupMutation,
  //   isPending,
  //   error,
  // } = useMutation({
  //   mutationFn: signup,
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  // });

  // This is how we did it using our custom hook - optimized version
  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8"
      data-theme="forest"
    >
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center gap-2">
            <ShipWheelIcon className="size-7 text-primary" />
            <span className="text-2xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Streamify
            </span>
          </div>

          {/* ERROR MESSAGE IF ANY */}
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSignup} className="flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div>
                <h2 className="text-xl font-semibold">Create an Account</h2>
                <p className="text-sm opacity-70">
                  Join Streamify and start your language learning adventure!
                </p>
              </div>

              {/* FULL NAME */}
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text text-sm">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered input-sm"
                  value={signupData.fullName}
                  onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text text-sm">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="john@gmail.com"
                  className="input input-bordered input-sm"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text text-sm">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="input input-bordered input-sm"
                  value={signupData.password}
                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                  required
                />
                <p className="text-xs opacity-70 mt-1">
                  Password must be at least 6 characters long.
                </p>
              </div>
              {/* TERMS OF SERVICE */}
               <div className="form-control">
                <label className="flex cursor-pointer gap-2 items-start">
                  <input type="checkbox" className="checkbox checkbox-xs mt-0.5" required />
                  <span className="text-xs leading-tight">
                    I agree to the{' '}
                    <span className="text-primary hover:underline">terms of service</span> and{' '}
                    <span className="text-primary hover:underline">privacy policy</span>.
                  </span>
                </label>
              </div>
            </div>

            {/* SUBMIT */}
            <div className="mt-4 space-y-2">
              <button className="btn btn-primary w-full" type="submit">
                  {isPending ? (
                    <>
                      <span className="loading loading-spinner loading-xs"></span>
                      Loading...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>
              <p className="text-center text-xs">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE (Illustration) */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-sm p-6">
            <div className="relative aspect-square max-w-xs mx-auto">
              <img
                src="/i.png"
                alt="Language connection illustration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center space-y-2 mt-4">
              <h2 className="text-lg font-semibold">
                Connect with language partners worldwide
              </h2>
              <p className="opacity-70 text-sm">
                Practice conversations, make friends, and improve your language skills together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;