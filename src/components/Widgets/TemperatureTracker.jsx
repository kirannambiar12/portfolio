import React from 'react'
import styled from "styled-components";
import weather from "../../assets/images/weather.jpg"
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import moment from 'moment';

const Wrapper = styled.section`

  background-image: url(${weather});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;

  #outlined-basic {
      background-color: white;
      border-radius: 50px;
      border: none;
  }

  .MuiFormControl-root {
    width: 100%;
    max-width: 700px;
    margin: auto;
    display: block;

    .MuiFilledInput-input {
        padding: 30px 53px 10px;
    }

    .MuiFilledInput-root {
        transition: unset;
        background-color: unset;
    }

    .MuiFilledInput-underline:before, .MuiFilledInput-underline:after {
        border-bottom: none;
    }

    .MuiFilledInput-underline {
        width: 100%;
        border: none;
        background-color: none !important;
    }

    .MuiOutlinedInput-notchedOutline {
        border: none;
    }
  }

  .MuiInputLabel-filled {
      margin-left: 40px;
  }

  .search-bar-column {
      margin-top: 100px;
  }
.MuiInputAdornment-positionStart {
    position: absolute;
    right: 50px;
    margin-top: 0;
}

.MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel) {
    margin-top: 0px !important;
    cursor: pointer;
}

.city-name {
    font-size: 48px;
}

.transparent-card {
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
}

.weather-checker {
    text-align: center;
    position: relative;
    top: -30px;
}

.wc-before {
    position: relative;
    top: 100px;
}

.wc-after {
    position: relative;
    top: 0px;
    transition: top 500ms ease-in-out;
}
`;

const TemperatureTracker = () => {

    const [city, setCity] = React.useState("");
    const [tempData, setTempData] = React.useState("");

    const findTemperature = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data.cod === 200) {
                    setTempData(data)
                } else {
                    alert("We couldn't find the city you were looking for!! Please try again.")
                }
            })
            .catch((error) => {
                alert("Oppsss..Something went wrong! Please try again.")
                console.log(error);
            });
    }

    var sunrise = moment.unix(tempData?.sys?.sunrise).format('h:mm:ss A');
    var sunset = moment.unix(tempData?.sys?.sunset).format('h:mm:ss A');
    var currentDate = moment().format("MMMM, Do YYYY hh:mm a")

    return (
        <Wrapper >
            <div className="container" id="weather">
                <div className="row search-bar-row">
                    <div className="col-12 search-bar-column">
                        <h4 className="color-white weather-checker">Weather App</h4>
                        <TextField
                            className={`${tempData ? "wc-after" : "wc-before" }`}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon onClick={() => findTemperature()} />
                                    </InputAdornment>
                                )
                            }}
                            onChange={(e) => setCity(e.target.value)}
                            id="outlined-basic" label="Enter City" variant="filled" />
                    </div>
                    {tempData &&
                        <div className="col-12">
                            <h2 className="mt-5 color-white text-center mx-auto ">{tempData?.name}, {tempData?.sys?.country}</h2>
                            <h4 className="date-time color-white text-center">{currentDate}</h4>
                        </div>}
                    <div className="col-12 col-md-6 my-4">
                        {tempData &&
                            <div className="transparent-card">
                                <h2 className="color-white temp city-name">{tempData?.main?.temp} &#176;</h2>
                                <span className="color-white text-capitalize">Feels Like: {tempData?.main?.feels_like} &#176;</span>
                                <p className="color-white text-capitalize">{tempData?.weather[0].description}</p>
                            </div>
                        }
                    </div>
                    <div className="col-12 col-md-6 my-4">
                        {tempData &&
                            <div className="transparent-card">
                                <div className="d-flex justify-content-around color-white mb-3">
                                    <div>
                                        <p className="mb-0 text-center">{tempData?.main?.temp_max} &#176;</p>
                                        <p className="mb-0 text-center">Max</p>
                                    </div>
                                    <div>
                                        <p className="mb-0 text-center">{sunrise}</p>
                                        <p className="mb-0 text-center">Sunrise</p>
                                    </div>
                                    <div>
                                        <p className="mb-0 text-center">{tempData?.main?.humidity}</p>
                                        <p className="mb-0 text-center">Humidity</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around color-white">
                                    <div>
                                        <p className="mb-0 text-center">{tempData?.main?.temp_min} &#176;</p>
                                        <p className="mb-0 text-center">Min</p>
                                    </div>
                                    <div>
                                        <p className="mb-0 text-center">{sunset} </p>
                                        <p className="mb-0 text-center">Sunset</p>
                                    </div>
                                    <div>
                                        <p className="mb-0 text-center">{tempData?.wind?.speed} kmph </p>
                                        <p className="mb-0 text-center">Wind</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}

export default TemperatureTracker;
