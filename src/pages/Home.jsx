import React from 'react'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from '@/components/header'
import Hero from '@/components/Hero'

function Home() {
  return (
    <div>
        
        {/* <SignInButton mode='modal' forceRedirectUrl='/'>
        <Button>Sign in </Button>
        </SignInButton> */}

            {/* Header  */}
            <Header></Header>
            {/* Hero*/}
            <Hero></Hero>

    </div>
  )
}

export default Home