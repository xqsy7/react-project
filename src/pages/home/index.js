import React,{Component} from "react";
import Top from "@components/home/top";
import Center from "@components/home/center";
import {listDateOne} from "@api/home";
class Home extends Component{
    render(){
        return (
            <div>
                <Top />
                <Center />
             
            </div>
        )
    }
     componentDidMount() {
        listDateOne().then((date) => {
            console.log(date);
         });
        
    }
}

export default Home;