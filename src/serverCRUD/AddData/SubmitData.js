import React from 'react';
import PostApiCall from './PostApiCall';

function SubmitData(props) {
    console.log(props.PassValid);

    if((props.PassValid === "none") && (props.EmailValid === "none") && (props.PassValid === "none") && props.allOK)
    {
    return (
    <PostApiCall Name={props.Name} Email={props.Email} Gender={props.Gender} Pass={props.Pass}></PostApiCall>       
    )
}
else
return(<></>)
}

export default SubmitData;