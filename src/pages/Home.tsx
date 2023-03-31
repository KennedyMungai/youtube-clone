import React from 'react'
import Navbar from '../components/Navbar'

type Props = {}

const Home = (props: Props) =>
{
    return (
        <div className='max-h-screen overflow-hidden'>
            <Navbar />
        </div>
    )
}

export default Home