import axios from 'axios';

const api = 'http://api.giphy.com/v1/gifs';
const key = 'sCcQEbrKGZPm4fZ7SU01ZLcKGDjYIuIy';

export const fetchGif = async (name, kind, limit = 12, offset = 0) => {
    let dataParams = {
        api_key: key,
        q: name,
        limit,
        offset,
    };
    const {data} = await axios.get(api + '/' + kind, {
        params: dataParams,
    });
    return data;
};
