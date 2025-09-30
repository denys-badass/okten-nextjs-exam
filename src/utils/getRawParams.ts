import {SearchParams} from "next/dist/server/request/search-params";

export const getRawParams = (params: SearchParams): string => {
    const rawParams = new URLSearchParams(JSON.parse(JSON.stringify(params)));
    return rawParams.toString();
}