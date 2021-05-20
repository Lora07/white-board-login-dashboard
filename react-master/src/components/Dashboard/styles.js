import React from "react";
import { toast } from "react-toastify";

// const Dashboard = ({setAuth}) => {
//     const [name, setName] = useState("");
//     const getProfile = async () => {
//         try {
//             const res = await fetch("http://localhost:3001/dashboard/", {
//                 method: "GET",
//                 headers: { token: localStorage.token }
//             });
//
//             const parseData = await res.json();
//             setName(parseData.librarianname || parseData.studentname || parseData.lecturername || parseData.adminName   );
//             console.log(parseData);
//         } catch (err) {
//             console.error(err.message);
//         }
//     };
//     const logout = async e => {
//         e.preventDefault();
//         localStorage.removeItem("token");
//         setAuth(false);
//         toast.success("Logout successfully");
//
//     };
//
//
//
//     useEffect(() => {
//         getProfile();
//     }, []);
//
//     return (
//         <div>
//             <h1 className="mt-5">Dashboard</h1>
//             <h2>Welcome  {name}</h2>
//             <button onClick={e => logout(e)}>
//                 Logout
//             </button>
//         </div>
//     );
// };

import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    rootContainer:{
        marginTop:100,
        marginBottom:20
    },
    root:{
        flexGrow:1
    },
    paper:{
        display:'flex',
        flexDirection:'column',
        padding: theme.spacing(0),
        justifyContent:'center',

        width:theme.spacing(50),
        height:theme.spacing(25),
        margin:10
    },
    paper2:{
        display:'flex',
        flexDirection:'column',
        padding: theme.spacing(0),
        justifyContent:'center',
        color:"#fff",
        width:theme.spacing(117),
        height:theme.spacing(15),
        margin:10
    },
    paperDay:{
        padding: theme.spacing(0),
        justifyContent:'center',
        width:theme.spacing(20),
        height:theme.spacing(2),
        marginLeft:60,
        marginTop:38
    },
    paperUnit:{
        padding: theme.spacing(0),
        justifyContent:'center',
        width:theme.spacing(30),
        height:theme.spacing(2),
        marginRight:260,
        marginTop:38
    },
    paperlecturer:{
        padding: theme.spacing(0),
        justifyContent:'center',
        width:theme.spacing(30),
        height:theme.spacing(2),
        marginBottom:20,
        marginTop:38
    },
    paperColor1:{
        background:'#7C49AF'
    },
    paperColor2:{
        background:'#fff'
    },
    paperActionArea:{
        disableRipple:true,
        '&:hover $focusHighlight':{
            opacity:1
        }
    },
    title:{
        display:'none',
        [theme.breakpoints.up('sm')]:{
            display:'block'
        }
    },
    card:{
        //expand the cards width
        width:theme.spacing(120),
        height:650,
        padding: theme.spacing(0),
    },
    image:{
        width:theme.spacing(10),
        height:50
    }
}));
export default useStyles;