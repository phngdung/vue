export const getData = async () => {
    const data = await axios.get("http://localhost/boys")
    console.log(data.data);
    return data.data;
}

