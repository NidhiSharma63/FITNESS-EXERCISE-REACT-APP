// import axios from 'axios';

export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48e78f5488msh599202ce5a94e33p126dc9jsn7a0635af5901',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
}

export const fetchData = async(url,options)=>{
    const res = await fetch(url,options);
    const data = await res.json();
    return data;
}