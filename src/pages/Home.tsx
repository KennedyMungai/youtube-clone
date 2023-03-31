import React from 'react'
import Navbar from '../components/Navbar'

type Props = {}

const Home = (props: Props) =>
{
    return (
        <div className='max-h-screen overflow-hidden'>
            <div style={{ height: "7.5vh" }}>
                <Navbar />
            </div>
        </div>
    )
}

export default Home