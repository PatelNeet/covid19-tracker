import React from 'react';
import style from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png';
//sortcut via component's index.js
import { Cards, Chart, CountryPicker, Aside, Prevention, Footer } from './components';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
        // console.log(data);
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
        // console.log(country)
        // console.log(fetchedData);
        //fetch the data
        //set the state
    }

    render() {
        const { data, country } = this.state;

        return (
            <>
                <div className={style.left_right}>

                    <div className={style.container}>
                        <img className={style.image} src={coronaImage} alt="viruse" />

                        <h2 className={style.live}><span>🔴</span>Live</h2>

                        <CountryPicker handleCountryChange={this.handleCountryChange} />

                        <Cards data={data} />

                        <Chart data={data} country={country} />

                        
                    </div>

                    <Aside/>
                </div>
                
                <Prevention/>

                <Footer />

            </>

        )
    }
}

export default App;