import React from 'react'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from '@/components/header'
function Home() {
  return (
    <div>
        
        {/* <SignInButton mode='modal' forceRedirectUrl='/'>
        <Button>Sign in </Button>
        </SignInButton> */}

            {/* Header  */}
            <Header></Header>
            {/* Hero*/}

    </div>
  )
}

export default Home