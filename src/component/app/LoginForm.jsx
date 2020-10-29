import React from 'react';
import ReactDOM from 'react-dom';

import img_avatar2 from "./../../assets/images/img_avatar2.png"

class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <h2>Login Form</h2>

                <form action="./action_page.html" method="get">
                    <div className="imgcontainer">
                        <img src={img_avatar2} alt="Avatar" class="avatar" />
                    </div>

                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                    </div>

                    <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
                        <button type="button" onClick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                        <span class="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;