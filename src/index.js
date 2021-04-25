

const getResource = async (url) => {
    const resp = await fetch(url);
    const body = await resp.json();
    return body;
};

getResource('https://swapi.dev/api/people/1/')
    .then((body) => {
        console.log(body)
    });

