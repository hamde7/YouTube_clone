import axios from "axios";

const Base_url : string = 'https://youtube-v31.p.rapidapi.com'
type optionType={
    url:string,
    params:{
        maxResults:string;
    },
    headers:{
        'X-RapidAPI-Key': string;
        'X-RapidAPI-Host':string;
    }
}
const options :optionType= {
    url: Base_url,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'f1ff77277dmshc1905b59210a621p157419jsn897611e54f7e',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
export async function FetchFromApi(url:string){
    const {data} = await axios.get(`${Base_url}/${url}`,options);
    return data;
}