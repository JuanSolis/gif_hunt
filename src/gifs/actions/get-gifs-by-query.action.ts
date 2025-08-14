import type { Gif } from '../interfaces/gif.interface';
import type { GiphyResponse } from '../interfaces/giphy.response';
import { giphyApi } from '../api/giphy.api';

export const getGifsByQuery = async (query: string) : Promise<Gif[]>=>  {

    const reponse = await giphyApi<GiphyResponse>('/search', {
        params: {
            q: encodeURI(query),
            limit: 25,
            offset: 0,
            bundle: 'messaging_non_clips'
        }
    });


    return reponse.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: gif.images.original.width ? parseInt(gif.images.original.width) : 0,
        height: gif.images.original.height ? parseInt(gif.images.original.height) : 0
    }));
}