import React, { DetailedHTMLFactory, FC } from "react";

const Shelfscan:FC = () => {
    return (
        <>
        <form action="http://127.0.0.1:5000" method="post" encType="multipart/form-data">
            <p/>
            <input type="file" accept="image/*"/>
            <p/>
            <button type="submit">Scan Shelf</button>
        </form>
        </>
    )
}

export default Shelfscan;