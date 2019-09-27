import http from "@utils/http";
import axios from "axios";

axios.get("/api/mobile/home").then((data) => {
    console.log(data)
})


// export const homeDate = () => http.get("/api/mobile/home")
// http.get("/api/mobile/home").then((data) => {
//     console.log(data)
// })


export const listDateOne = () => http.get("./api/mobile/skulist?page=1")
export const listDateTwo=()=>http.get("./api/mobile/skulist?page=2")