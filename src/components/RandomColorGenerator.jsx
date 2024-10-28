import React, { useEffect, useState } from 'react'

const RandomColorGenerator = () => {
    const [color, setColor] = useState("hex");
    const [contentColor, setContentColor] = useState("#000000")

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length)
    }

    const generateRandomHexColor = () => {
        const colorArr = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += colorArr[randomColorUtility(colorArr.length)];
        }
        setContentColor(hexColor);
        console.log("hex");
    }
    const generateRandomRgbColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setContentColor(`rgb(${r},${g},${b})`);
        console.log("rgb");

    }

    useEffect(() => {
        if (color === "rgb") generateRandomRgbColor();
        else generateRandomHexColor();
    }, [color]);

    return (
        <>

            <div style={{

                width: "100vw",
                height: "100vh",
                backgroundColor: contentColor


            }}>
                <button onClick={() => setColor("hex")}>HEX Color</button>
                <button onClick={() => setColor("rgb")}>RGB Color</button>
                <button onClick={() => color === "hex" ? generateRandomHexColor() : generateRandomRgbColor()}>Generate Random Color</button>
                <div style={{
                    display: 'flex',
                    width: "100vw",
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "50px",
                    fontSize: "30px",
                    color: "#fff"
                }}>
                    <h3>{color === "hex" ? "Hex" : "RGB"} Color</h3>
                    <h1>{contentColor}</h1>
                </div>
            </div>
        </>
    )
}

export default RandomColorGenerator
