import React from 'react'
import { SignIn, SignUp,  SignInButton, SignOutButton, UserButton, useUser} from "@clerk/nextjs";

const Navbar = () => {
  const user = useUser()

  return (
    <>
    {user.isSignedIn && <SignOutButton />}
          {!user.isSignedIn && <SignInButton />}
    </>
  )
}

export default Navbar