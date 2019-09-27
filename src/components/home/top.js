import React,{Fragment} from "react";
import { Header, LogoImg,Search,SearchBox,Span,BannerBox,Bannerbox } from "./style/topstyle";

class Top extends React.Component{
   
    render() {
        return (
            <Fragment>
                <Header>
                <LogoImg ></LogoImg>
                </Header>
                <SearchBox>
                    <Search>
                    <span className="iconfont">&#xe678;</span>
                    <Span>T恤</Span>
                    </Search>
                </SearchBox>
                <BannerBox>
                    <Bannerbox>
                        
                    </Bannerbox>
                </BannerBox>
            </Fragment>
        )
    }
}

export default Top;