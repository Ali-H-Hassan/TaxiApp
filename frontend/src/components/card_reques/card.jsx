import './card.css'
import Index from '../input/index'
import Button from '../buttons'
import axios from 'axios';
import { useState } from 'react';

export default function Card() {
   
    const [isValidForm, setIsValidForm] = useState(true);
    console.log(isValidForm)
    const [input, setInput] = useState({ 
        start_location: '',
        end_location: '',
        start_time: ''
    });
    const [error, setError] = useState({
       start_location: '',
        end_location: '',
        start_time: ''
    });

    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }));

       setIsValidForm(true)
    };
    

    const onSubmit = async () => {
        try {
            if(input["start_location"] === ''|| input["end_location"] === ''|| input["start_time"] === ''){
                console.log(isValidForm)
                setIsValidForm(false);
                return;
            }
            const updated_data = await axios.post("http://127.0.0.1:8000/api/create_ride", {
                start_location: input["start_location"],  
                end_location:  input['end_location'],
                start_time: input['start_time'],
            },
            {
                headers: {
                  "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzAyNTA5MzgwLCJleHAiOjE3MDI1MTI5ODAsIm5iZiI6MTcwMjUwOTM4MCwianRpIjoiZWNpUXRPQkxRUUs0SEFlSyIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3IiwiZW1haWwiOiJyYW16aXJpY2hlQGdtYWlsLmNvbSIsInJvbGUiOjF9.Ws47-QIAXJ0hblNQ1cWzZkTt2JyhgnBwHMFcWFUbHtM"
                }
            });
           
            console.log(updated_data);
            } catch (error) {
                console.log(error.message);
            }
    };

    return (
    <div className='request-ride-container flex flex-column'>
        <div className='title'>
            <p>Request a <span className="green">ride</span> now</p>
        </div>


            <Index placeHolder={"Pick up location"} onChange={handleChange} name='start_location'
             value={input.start_location} ></Index>
            <Index placeHolder={"Destination"} onChange={handleChange} name='end_location'
                value={input.end_location} ></Index>
            <Index placeHolder={"Destination"} type='datetime-local' onChange={handleChange}
                name='start_time' value={input.start_time}  ></Index>
            {isValidForm ?  "": <div className='red'>Please fill all fields</div>}
            <Button variant={"primary"} onClick={onSubmit} label={"Login"}></Button>
        
    </div>
    )
}


// const SERVER_URL = "http://127.0.0.1:8000/api/";
// export const LOGIN_URL = SERVER_URL+"";
