import styled from "styled-components";

import logo from "./logo.jpg";

export const Header = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
min-height: 1.5rem;
-webkit-box-sizing: border-box;
box-sizing: border-box;
`
export const LogoImg = styled.span`
position: relative;
top:.2rem;
    display:inline-block;
    width:.72rem;
    height:.72rem;
    background:url(${logo}) no-repeat;
    
`
export const SearchBox = styled.div`
background:white;
    position: -webkit-sticky;
    position: sticky;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 6;
    /* padding: .2rem; */
`
export const Search = styled.div`
   
    padding: 2px 10px;
    min-height: .7rem;
    background: #f5f5f5;
    border: 1px solid #e9e9e9;
    border-radius: .55rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`
export const Span = styled.span`
    color: #b3b3b3;
    font-size: .3rem;
    margin-left: .4rem;
`
export const BannerBox = styled.div`
    width: 100%;
    margin-top: .3rem;
    height: 3.5rem;

    text-align:center;
    
`
export const Bannerbox = styled.div`
    width: 92%;
    height: 3rem;
    background:blue;
    text-align:center;
    margin-left:4%;

    border-bottom:1px solid #9e9e9e;
`






