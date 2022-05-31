import { useState, useContext } from "react";
import { User } from "../Main"

const mock = {
    username: 'shay glik',
    password: '123',
    playlist: ['1', '2', '3', '4'],
    userid: '10',
    token: '101'
}

function login(e) {
    e.preventDefault();
    const username = e.target.elements.username.value
    const password = e.target.elements.userpassword.value

    if (username === "shay glik" && password === "123") {


        console.log({ ...mock });
        return (
            { ...mock }


        )

    }
}

export default function Login() {

    // const nap = useContext(User)

    // function inputHandler(e) {
    //     e.preventDefault();
    // nap(e.target.elements.username.value)
    // }

    return (

        <form onSubmit={login}>
            <input type="text" name="username" required pattern=".* .*" placeholder="Username" />
            <input type="text" name="userpassword" required pattern=".*" placeholder="Password" />
            <input type='submit' />
        </form>
    )

}