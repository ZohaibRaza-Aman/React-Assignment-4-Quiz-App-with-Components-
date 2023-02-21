import React from "react";

function Result(props){
    return(
        <div className="showresult">
            <p className="box">Your Score:  {props.score}<br/></p>
            <p className="box">Your totalscore:  {props.totalscore}<br/></p>
            <p className="box">Your percentage:  %{props.percentage}<br/></p>
            <p className="box">Your wrongAnware:  {props.wronganware}<br/></p>
        </div>
    )
}
export default Result;