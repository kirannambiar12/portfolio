import React, { useEffect } from 'react'
import styled from "styled-components";
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Lottie from 'react-lottie';
import animationData from '../../../assets/images/lottieFiles/cantFind.json'

const Wrapper = styled.section`
    .mars-img {
        height: 100%;
        max-height: 350px;
        object-fit: cover;
        width: 100%;

        @media (max-width: 600px) {
            max-height: 150px;
        }
    }

    #slct{
        width: 250px;
        height: 50px;
        padding-left: 10px;
        font-family: 'Poppins',sans-serif;
        outline: none;
    }

    .MuiInputBase-input {
        width: 100%;
        max-width: 300px;
        height: 40px;
        background: white;
        padding-left: 10px;
    }

    .MuiInputLabel-formControl {
        display: none;
    }

    label + .MuiInput-formControl {
        margin-top: 0px;
    }

    .filter-section {
        @media (max-width: 600px) {
            display: block;
            flex-direction: column;
        }
    }
`;

const useStyles = makeStyles((theme) => ({
    textField: {
        width: 250,
    },
}));

const RangeRoverImages = () => {

    const [marsImages, setMarsImages] = React.useState();
    const [cameraType, setCameraType] = React.useState("MAHLI");
    const [selectedDate, setSelectedDate] = React.useState(moment("2019-06-03").format("YYYY-MM-DD"));

    useEffect(() => {
        const fetchImages = async () => {
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate}&camera=${cameraType}&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
                .then(res => res.json())
                .then(data => setMarsImages(data))
                .catch((error) => {
                    console.log("Oppsss..Something went wrong! Please try again.")
                });
        }
        fetchImages();
    }, [selectedDate, cameraType])

    const classes = useStyles();

    console.log(marsImages)

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <Wrapper>
            <div className="container" id="#marsImages">
                <div className="row">
                    <div className="col-12">
                        <div className="color-white my-5 text-center">
                            <h3>Fond of <span className="color-red"> space? </span> </h3>
                            <p >Want to look what Mars Rover captured in mars?</p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-around filter-section mb-5">
                        <div>
                            <label className="color-white" htmlFor="slct"> Camera Type:</label> <br />
                            <select onChange={(e) => setCameraType(e.target.value)} name="slct" id="slct">
                                <option value="FHAZ">FHAZ</option>
                                <option value="RHAZ">RHAZ</option>
                                <option value="MAST">MAST</option>
                                <option value="CHEMCAM">CHEMCAM</option>
                                <option selected value="MAHLI">MAHLI</option>
                                <option value="MARDI">MARDI</option>
                                <option value="NAVCAM">NAVCAM</option>
                                <option value="PANCAM">PANCAM</option>
                                <option value="MINITES">MINITES</option>
                            </select>
                        </div>
                        <div>
                            <label className="color-white" htmlFor="slct"> Select Date:</label> <br />
                            <TextField
                                id="date"
                                label="select date"
                                type="date"
                                defaultValue="2019-06-03"
                                className={classes.textField}
                                onChange={(e) => setSelectedDate(e.target.value)}
                            />
                        </div>
                    </div>
                    {marsImages?.photos?.length === 0 && (
                        <div className="d-flex flex-column justify-content-center w-100">
                        <Lottie options={defaultOptions}
                        height={250}
                        width={250}
                        className="mx-auto d-block"
                        />
                        <div>
                        <h6 className="color-white text-center my-5 mx-auto">There is no image from your provided data. Trying changing the date or camera type.</h6>
                        </div>
                        </div>
                    )
                    }
                    {React.Children.toArray(marsImages?.photos?.map((image) => (
                        <div className="col-6 col-md-4 my-3">
                            <img className="img-fluid mars-img" src={image.img_src} alt="" />
                        </div>
                    )))}
                </div>
            </div>
        </Wrapper>
    )
}

export default RangeRoverImages;
