import React from "react";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the school application</p>
            <p>
                <a href="/students">See all students</a>
            </p>
            <p>
                <a href="/classes">See all classes</a>
            </p>
        </div>
    )
}