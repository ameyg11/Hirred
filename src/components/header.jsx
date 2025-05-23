import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
            <img src='/logo.png' className="h-20 ml-3"/>
        </Link> 

        <div variant="outline"className="flex items-center justify-center px-4 py-2 h-auto">
        <div className="w-full flex justify-center items-center">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

        
      </nav>
    </>
  )
}

export default Header
