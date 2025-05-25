import { useUser } from "@clerk/clerk-react"

export default function Onboarding() {


  const { user } = useUser();
  console.log(user);

  return (
    <div>
      on Boarding
    </div>
  )
}
