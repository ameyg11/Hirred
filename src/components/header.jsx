import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/clerk-react"
import { PenBox } from "lucide-react"
import { useState } from "react"

const Header = () => {

  const [showSignIn, setShowSignIn] = useState(false);
  
  const handleOverlayClick = (e) => {
    if(e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  }

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
            <img src='/logo.png' className="h-20 ml-3"/>
        </Link> 

        <div variant="outline"className="flex items-center justify-center px-4 py-2 h-auto">
        <div className="w-full flex justify-center items-center gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>Login</Button>
          </SignedOut>
              {/* add a condition here */}
              <Button variant="destructive" className="rounded-full">
                <PenBox size={20} className="mr-2"/>
                Post a Job
              </Button>
          <SignedIn>
            <Link to="/post-job">
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      </nav>

      {showSignIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        onClick={handleOverlayClick}
        >
        <SignIn 
          signUpForceRedirectUrl="/onboarding"
          fallbackRedirectUrl="/onboarding"
        />
        </div>
      )}
    </>
  )
}

export default Header
