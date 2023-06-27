import './UserAndPassWord.css'
import React from 'react'
import { Link } from 'react-router-dom'

const UserAndPassword = () => {
    return (
        <>
            <div className="signupFrm">
                <form action="" className="forml">
                    <h1 className="title">Registro</h1>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a"/>
                            <label for="" className="label">Correo electronico</label>
                    </div>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a"/>
                            <label for="" className="label">Nombre o alias</label>
                    </div>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a"/>
                            <label for="" className="label">Contraseña 8 a 16 digitos</label>
                    </div>
                    <div className="inputContainer">
                        <input type="text" className="input" placeholder="a"/>
                            <label for="" className="label">Confirm Password</label>
                    </div>
                    <Link > Si ya tienes cuenta presiona aqui </Link>
                    <input type="submit" className="submitBtn" value="Sign up"/>
                </form>
            </div>
        </>
    )
}

export default UserAndPassword