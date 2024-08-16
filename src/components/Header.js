import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () =>{

    //let btnName = "Login";
    const [loginBtnName, setLoginBtnName] = useState("Log In");

    const cartItem = useSelector((store) => store.cart.items);

    return(
        <div className="sticky z-50 w-full top-0 h-48 flex bg-gray-100 justify-between">
            <div>
                <img className="h-full ml-80" src={LOGO_URL} />
            </div>
            <div className="self-center">
                <ul className="flex self-center">
                    <Link className="headerLink" to="/"><li className="cursor-pointer mr-10 text-xl px-4 py-2 text-center border-2 rounded-3xl border-black border-solid">Home</li></Link>
                    <Link className="headerLink" to="/about"><li className="cursor-pointer mr-10 text-xl px-4 py-2 text-center border-2 rounded-3xl border-black border-solid">About Us</li></Link>
                    <Link className="headerLink" to="/contact"><li className="cursor-pointer mr-10 text-xl px-4 py-2 text-center border-2 rounded-3xl border-black border-solid">Contact Us</li></Link>
                    <Link to="/cart"><li className="cursor-pointer mr-10 text-xl px-4 py-2 text-center border-2 rounded-3xl border-black border-solid">{"cart("+cartItem.length+")"}</li></Link>
                    <button className="mr-80 text-xl px-4 py-2 text-center border-2 rounded-3xl border-black border-solid" onClick={() => {
                        if(loginBtnName === "Log In") setLoginBtnName("Log Out");
                        else setLoginBtnName("Log In");
                    }}>{loginBtnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;