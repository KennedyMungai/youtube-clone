export interface InitialState
{
    videos: HomePageVideos[]
    currentlyPlaying: CurrentPlaying | null
    searchTerm: string
    searchResults: []
    nextPageToken: string | null
    recommendedVideos: RecommendedVideos[]
}