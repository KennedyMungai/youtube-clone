export interface InitialState
{
    videos: HomePageVideos[]
    currentlyPlaying: CurrentPlaying | null
    searchTerm: string
    searchResults: []
    nextPageToken: string | null
    recommendedVideos: RecommendedVideos[]
}

export interface HomePageVideos
{ }

export interface CurrentPlaying
{ }

export interface RecommendedVideos
{ }