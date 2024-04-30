import React from "react";
import NavBar from "./NavBar";

function Login(){
    return(
        <>
        <header>
            <NavBar />
        </header>  
        <main>
            <h1>Login</h1>
            <form>
                <div>
                    <label for="username">username:</label>
                    <input id="username" type="text" name="username" placeholder="username" />
                </div>
                <br />
                <div>
                    <label for="password">Pasword:</label>
                    <input id="password" type="text" name="password" placeholder="password" />
                </div>
                <br/>
                <button type="submit">submit</button>
            </form>
        </main>
        </>
    )
}

export default Login;