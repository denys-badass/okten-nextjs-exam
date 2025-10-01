export const getPosterUrl = (url: string, type: string): string => {
    const movieImageBaseUrl = process.env.MOVIE_IMAGE_URL;

    if (!movieImageBaseUrl) {
        throw new Error("MOVIE_IMAGE_URL is not defined in environment variables");
    }

    return movieImageBaseUrl + "/" + type + url;
}