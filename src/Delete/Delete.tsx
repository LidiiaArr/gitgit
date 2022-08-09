import React from "react";

function Welcome(props:any) {
    return <h1>Привет, {props.name}</h1>;
}

Welcome('anything')