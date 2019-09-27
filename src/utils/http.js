
import {fetch as fetchPro} from "whatwg-fetch";
import qs from "qs";

const get = (url,data)=>{
    if(data){
        let str = "";
        for(var key in data){
            str = "&"+key+"="+data[key];
        }
        url = url + "?" + str.slice(1);
    }

    var result = fetchPro(url,{
        credentials:"include",
        headers:{
            "conent-type":"application/json"
        }
    }).then(res => res.json());
    

    return result;
}


const post = (url,data)=>{
    var result = fetchPro(url,{
        method:"post",
        credentials:"include",
        headers:{
            "content-type":"application/x-www-form-urlencoded"
        },
        body:qs.stringify(data)
    })

    return result;
}


export default{
    get,
    post
}
