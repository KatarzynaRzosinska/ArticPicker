export const BaseUrls = {
    artwork: (id:number) => `https://api.artic.edu/api/v1/artworks/${id}`,
    image: (id: string) => `https://api.artic.edu/api/v1/images/${id}`,
    imageUrl: (id: string) => `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`,
    artist: 'https://api.artic.edu/api/v1/agents/search',
    artistById: (id: number) => `https://api.artic.edu/api/v1/agents/${id}`,
}