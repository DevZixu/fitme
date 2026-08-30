// Data fetcher
const fetchData = async (id, url) => {
    const res = await fetch(url)
    const data = res.json()
    console.log(data)
};
export {fetchData};