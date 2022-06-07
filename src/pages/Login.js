import { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { User } from "../Main"

const mock = {
    username: 'shay glik',
    password: '123',
    playlist: ['1', '2', '3', '4'],
    userid: '10',
    token: '101'
}

export default function Login() {
    const Navigation = useNavigate()

    // const nap = useContext(User)

    // function inputHandler(e) {
    //     e.preventDefault();
    // nap(e.target.elements.username.value)
    // }

    return (

        <form onSubmit={login}>
            <input type="text" name="username" required pattern=".* .*" placeholder="Username" />
            <br />
            <input type="text" name="userpassword" required pattern=".*" placeholder="Password" />
            <br />
            <input type='submit' />
        </form>
    )

    function login(e) {
        e.preventDefault();
        const username = e.target.elements.username.value
        const password = e.target.elements.userpassword.value

        if (username === "shay glik" && password === "123") {

            Navigation('/List');

            console.log({ ...mock });
            return (
                { ...mock }


            )
        }

    }
}