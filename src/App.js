import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsContent from './components/NewsContent/NewsContent';
import axios from "axios";
import apikey from "./data/config";
import Footer from './components/Footer/Footer';

function App() {

  const [category, setCategory] = useState("Technology");
  const [NewsArray, setNewsArray] = useState([]);
  const [NewsResults, setNewsResults] = useState();


  const newsApi = async () => {
    try {
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}`);
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }

  };

useEffect(() => {
  newsApi();
}, [NewsResults, category]);

  return (
    <div className="App">
      <Navbar setCategory = {setCategory}/>
      <NewsContent NewsArray = {NewsArray} NewsResults = {NewsResults} />
      <Footer />
    </div>
  );
}

export default App;
