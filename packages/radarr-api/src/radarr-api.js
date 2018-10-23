// @flow

import fetch from 'cross-fetch';

const radarrApi = async (url: string) => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        // eslint-disable-next-line
        console.error(error);
    }
};

export default radarrApi;
