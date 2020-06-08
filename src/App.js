import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import { fetchData } from './api';
import virus from './images/virus.svg'

class App extends React.Component{
    state = {
        data:{},
        country:''
    }
    async  componentDidMount(){
        const fetchedData = await fetchData(); 
        this.setState({data: fetchedData});
    }
    countryChangeHandler = async (country) =>{
        const fetchedData = await fetchData(country); 
        this.setState({data: fetchedData, country: country})     
    } 
    render(){
    const {data, country} = this.state;        
        return(
         <div>
                <div className = {styles.container}>
                <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target = "__blank"><h1>C<span><img src= {virus} alt = "Virus" className={styles.logo}/></span>VID - 19</h1></a>
                <Cards data = {data} />
                <CountryPicker countryChangeHandler = {this.countryChangeHandler}/>
                <Chart data = {data} country = {country} />
            </div>
            <Footer />
         </div>
        )
    }
}

export default App;