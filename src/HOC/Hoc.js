import React from "react";
import { Component } from "react";

const Hoc=(Component)=>{
    return(
        class extends React.Component{
            state={
                auth:true
            }
            render(){
                return(
                    <div>
                       {this.state.auth? <Component name="Naveen"/>:<h2>Login Page</h2>}
                    </div>
                )
            }
        }
    )
}
export default Hoc;