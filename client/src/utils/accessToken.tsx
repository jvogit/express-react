let ACCESS_TOKEN = "";

export const setAccessToken = (token: string) => {
    ACCESS_TOKEN = token;
};

export const getAccessToken = () => {
    return ACCESS_TOKEN;
};