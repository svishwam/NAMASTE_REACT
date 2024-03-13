import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count1:0,
            count2:1,
        };
    }
    render(){
        const {name,location}=this.props;
        const {count1,count2} = this.state;
        return(
            <div>
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
            <h2>Count1:{count1}</h2>
            <button onClick={
                ()=>{
                    this.setState({
                        count1:count1+1,
                    });
                }
            }>Count Increase</button>
            <h2>Count2:{count2}</h2>
        </div>
        );
    }
}
export default UserClass;