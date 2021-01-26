import React, { useState, useEffect } from "react";
export function ApiTest() {
    const url = "https://sentinum-testing.herokuapp.com/twitter/";
    const [value, setValue] = useState("");
    const [result, setResult] = useState(0);
    const getResult = async() => {
        const res = await fetch(url + value);
        const val = await res.json();
        setResult(val.result);
    };
    return ( <
        >
        <
        input type = 'text'
        onChange = {
            (e) => {
                setValue(e.target.value);
            }
        }
        value = { value }
        />{" "} <
        button onClick = { getResult } > Fetch < /button> <
        h4 > Result: -{ result } < /h4> <
        />
    );
}