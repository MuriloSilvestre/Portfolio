import React from "react";
import "./Cards.css";

export default (props) => {
    return (
        <div class="Card">
            <div class="Title">{props.titulo}</div>
            <div class="Content">
                {props.children}
            </div>
        </div>
    )
}
