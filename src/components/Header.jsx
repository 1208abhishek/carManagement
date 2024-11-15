import { UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';
import { Button } from './ui/button';

function Header() {
    const { user, isSignedIn } = useUser();  

    return (
        <div className='flex justify-between items-center shadow-sm ps-6'>
            <img src="./logo.svg" width={50} height={50} /> 
            <ul className='hidden md:flex gap-16'> 
                <li className='font-medium hover:scale-125 transition-all cursor-pointer hover:text-primary'>Home</li>
                <li className='font-medium hover:scale-125 transition-all cursor-pointer hover:text-primary'>Search</li>
                <li className='font-medium hover:scale-125 transition-all cursor-pointer hover:text-primary'>New</li>
                <li className='font-medium hover:scale-125 transition-all cursor-pointer hover:text-primary'>Owned</li>
            </ul> 
            {
                isSignedIn ? 
                <div className='flex items-center gap-5'> 
                    <UserButton /> 
                    <Button>Submit Listing</Button>
                </div>
                : null
            } 

            


        </div>  

    ); 


}

export default Header;

