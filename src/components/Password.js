import React, { useState } from "react";

const Password = () => {

    const [password, setPassword] = useState('************')

    const generator = () => {
        let newPassword = ''
        const chars='0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*(){}<>?,./'
        for (let i = 0; i < 12; i++) {
            newPassword += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        setPassword(newPassword)
    }

    return (
        <>
            <div className="wrapper">
                <div className="password">{password}</div>
                <div>
                    <button onClick={generator} className="generate-password">Сгенирировать</button>
                </div>
            </div>
        </>
    )
}

export default Password;