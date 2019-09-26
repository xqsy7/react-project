import styled from "styled-components";

export const HeadStyle = styled.div`
background:#1d1d1d;
#head{
    height: 1rem;
    width: 100%;
    background: #1d1d1d;
    position: fixed;
    top: 0;
    z-index: 10;
}
.headBox{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 .3rem;
    position:relative;
}
.classification-icon i{
    background: #ffffff;
    font-size: .4rem;
    font-weight: 900;
}
.classification{
    color: #ffffff;
    font-size: .3rem;
    font-weight: 900;
    margin:0 2.6rem;
}
.seach i{
    color: #ffffff;
    font-size: .4rem;
    font-weight: 600;
}
`