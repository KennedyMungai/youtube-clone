import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from ".."
import axios from 'axios'


const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY

export const getHomePageVideos = createAsyncThunk("youtubeApp/HomePageVideos", async (isNext: boolean, { getState }) => 
{
    const {
        youtubeApp: {
            nextPageToken: nextPageTokenFromState,
            videos
        }
    } = getState() as RootState;

    const {
        data: {
            items,
            nextPageToken
        }
    } = await axios.get(`${}`)
})