import { createAsyncThunk } from "@reduxjs/toolkit"

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY

export const getHomePageVideos = createAsyncThunk("youtubeApp/HomePageVideos", async (isNext: boolean, { getState }) => 
{

})