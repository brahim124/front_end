import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Loginhome  ()  {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loader, setShowHideLoader] = useState(false);

  const formValidation = () => {
    let isValid = true;

    if (!userName) {
        toast.warn('Username is required');
        isValid = false
    }

    if (!userPassword) {
        toast.warn('User password is required');
        isValid = false
    }

    return isValid
}

  const submitUserLogin =  async() => {
    try {
        // before submit, we need to check validation
        if (formValidation()) {

            // we need to add loading spinner to wait server to response.
            // let create loader component
            setShowHideLoader(true);
            const reqBody = {
                "username": userName,
                "password": userPassword
            }
            const response = await axios.post('mongodb://127.0.0.1:27017/coatching', reqBody);
            if (response) {

                // here we need to store data as temp and navigate to home page
                navigate.push({
                    pathname: '/home',
                    state: { userData: response.data }
                });

                // now we navigated to home but with static data.
                // let us go to home page.
                // data will go to home page as props.
            }
        }

    }
    catch (e) {
        // log error in case of invalid user login username and password
        // we will use Toaster to show the error to user
        toast.error(e.response.data.message);
    }
    finally {
    }

  }

 return (
    <div className='login-screen'>
    <div className='login-form'>
        <div className='left-part' />
        <div className='right-part'>
            <h3>Login Account</h3>
            <div className='input-group'>
                <label>Username</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter username'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className='input-group'>
                <label>Password</label>
                <input
                    type='password'
                    className='form-control'
                    placeholder='Enter password'
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
            </div>
            <div className='submit-action'>
                        <button className='submit-btn' onClick={() => submitUserLogin()}  >Login</button>
                    </div>
        </div>
    </div>

</div>
)
}

export default Loginhome