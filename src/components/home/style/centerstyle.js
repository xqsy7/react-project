import styled from "styled-components";

export const SelectOne = styled.div`
    position:relative;
    width:100%;
    height:6.5rem;
    // background:blue;
    
`
export const SelectOneImg = styled.img.attrs({
    src: "https://resource.smartisan.com/resource/e6f7b32e4a942fd4a8c436495febd022.png?x-oss-process=image/resize,w_700/format,webp",
    alt: "",
})`
    height:1.8rem;
    width:97%;
    padding-left:3%;
`

export const SelectOneBanner = styled.div`

display:flex;
    height:4.6rem;
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    margin-bottom: -.2rem;
    // background:yellow;
    position:absolute;
    top:1.5rem;
`
export const SelectA = styled.div`
    margin-left:3%;
    border-radius:10px;
    display:inlin-block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40%;
    flex: 0 0 40%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    // background:silvery;
    background:#f8f8f8;
    height:100%;
    width:38%;
`
export const SelectABoxImg = styled.span`
    border-radius:10px;
    width:100%;
    height:65%;
    display: block;
    margin: 0 auto;
    overflow: hidden;
    background: rgba(0,0,0,.03);
    mix-blend-mode: multiply;

`
export const SelectAImg = styled.img.attrs({
    src: "https://resource.smartisan.com/resource/6e96ccea3bd56bdd2243eb20330cec30.jpg?x-oss-process=image/format,webp",
    alt: "商品图片"
})`
    border-radius:10px;
    width:100%;
    height:100%;
    // mix-blend-mode :multiply;
`

export const SelectABottom = styled.div`
    width:100%;
    background:white;
    height:35%;
`
export const SelectABottomName = styled.span`
    padding-top:.25rem;
    font-size: .3rem;
    font-weight:bolder;
    color: rgba(0,0,0,.7);
    width: 100%;
    margin: 0;
    white-space: wrap;
    text-overflow: ellipsis;
    overflow: hidden;
    height:60%;
   display:inline-block;
  
    /* margin-bottom:.15rem; */
`
export const SelectABottomMoney = styled.div`
font-family: Arial;
    font-size: .3rem;
    font-weight: bolder;
    color: #d44d44;
   margin-bottom:.3rem;
`
export const SelectABottomMoneyA = styled.span`

    font-weight: bolder;
    color: #d44d44;
    padding-bottom:.3rem;
`
export const SelectABottomMoneyB = styled.span`

    font-weight: bolder;
    color: #d44d44;
    padding-bottom:.3rem;
`
// 点线

export const Ellipsis = styled.div`
    height:.1rem;
    width:94%;
    margin-left:3%;
    margin-bottom:.4rem;
    border-bottom:1px dotted #ccc;
`

// ariticle

export const Article = styled.div`

padding-left:.4rem;
    cursor: dotted;
margin-bottom:.2rem;
`
export const ArticleTitle = styled.span`
font-size: .4rem;
font-weight: 700;
color: rgba(0,0,0,.8);
`

export const ArticleList = styled.div`
    width:100%;
    padding-left:3%;
    padding-right:3%;

    >div{
        float:left;
    }
`
export const ArticleContent = styled.div`
    width:48%;
    margin-left:1%;
    margin-right:1%;
   background:#f8f8f8;
   border-radius:.3rem;
    >span{
        border-radius:.3rem;
   
        height:65%;
        width:100%;
        mix-blend-mode: multiply;
        .image{   
            display: inline-block;
            width:100%;
            width:100%;
            border-radius:.3rem;
        }
    }
       
        h2{
            background:white;
            font-size: .3rem;
            font-weight:600;
            line-height: .5rem;
            color: rgba(0,0,0,.7);
            width: 100%;
            margin: 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

        
}

`
export const ArticleMoney = styled.div`
   background:white;
    height:35%;
    width:100%;
    display:flex;
    justify-content: space-between;
    padding-bottom:.3rem;
`
export const Price = styled.div`
    display:inline-block;
    span:nth-of-type(1){
        font-family: Arial;
        font-size: .3rem;
        font-weight: bolder;
        color: #d44d44;
    }
    span:nth-of-type(2){
    
    margin-left: 5px;
    font-size: .1rem;
    color: #ccc;
    font-weight: 400;
    }

`



export const Activity = styled.div`
    display:inline-block;
    padding: .1rem ;
    border-radius: .2rem;
    color: #d56159;
    background: #f6ebea;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size:.2rem;
    font-weight:700;
`




export const Footer = styled.div`
    height:2rem;
`