import { UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';
import { Button } from './ui/button';

function Header() {
    const { user, isSignedIn } = useUser();  

    return (
        <div className='flex justify-between items-center shadow-sm ps-6'>
            <img src="./logo.svg" width={50} height={50} /> 
            <ul className='hidden md:flex gap-16'> 
                <li>Home</li>
                <li>Search</li>
                <li>New</li>
                <li>Owned</li>
            </ul> 
            {
                isSignedIn ? 
                <div> 
                    <UserButton /> 
                    <Button>Submit Listing</Button>
                </div>
                : null
            }


        </div>  

    ); 


}

export default Header;
