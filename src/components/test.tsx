import React, { memo, useContext, useEffect, useState } from 'react'
import { useTheme } from './Context/ThemeContext'


export default function Test() {
    const theme = useTheme()?.theme
    useEffect(() => {
        console.log(theme);
    }, [theme])
    return (
        <>
            <hr />
            {theme ? <p>Dark</p> : <p>Light</p>}
            <hr />
        </>
    )
}
