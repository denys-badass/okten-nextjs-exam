export const getPosterUrl = (url: string, type: string): string => {
    return url ? process.env.MOVIE_IMAGE_URL! + "/" + type + url : "";
}