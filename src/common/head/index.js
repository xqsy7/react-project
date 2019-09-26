import React,{Component,Fragment} from "react";
import {HeadStyle} from './styled';
import ClassNav from "@components/classification/classNav";
class CommonHead extends Component{
    constructor(){
        super();
        this.clickHandler = this.clickHandler.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
        this.state = {
            show:false,
        }
    }
    render(){
        let {name,headTop} = this.props;
        let {show} = this.state;
        return (
            <Fragment>
            <ClassNav show={show}/>
            <HeadStyle onClick={this.closeHandler}>
            <div id="head">
                <div className="headBox">
                    <div 
                    onClick={this.clickHandler}
                    className="classification-icon" style={{display:headTop?"block":'none'}}>
                        <i className="iconfont">&#xe61a;</i>
                    </div>
                    <div className="classification">
                        {name}
                    </div>
                    <div className="seach" style={{display:headTop?"block":'none'}}>
                        <i className="iconfont">&#xe678;</i>
                    </div>
                </div>
            </div>
            </HeadStyle>
            </Fragment>
        )
    }
    clickHandler(e){
        e.stopPropagation();
        this.setState({
            show:true,
        })
    }
    closeHandler(){
        this.setState({
            show:false
        })
    }
}


export default CommonHead;