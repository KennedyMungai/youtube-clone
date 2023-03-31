import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'


const Home = () =>
{
    const dispatch = useAppDispatch()
    const videos = useAppSelector((state) => state.youtubeApp.videos)

    useEffect(() =>
    {

    }, [])


    return (
        <div className='max-h-screen overflow-hidden'>
            <div style={{ height: "7.5vh" }}>
                <Navbar />
            </div>
            <div
                className="flex"
                style={{ height: "92.5vh" }}
            >
                <Sidebar />
            </div>
        </div>
    )
}

export default Home