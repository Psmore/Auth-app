import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

export default function SignIn() {
    const  [formData, setFromData] = useState({});
    const { loading, error } = useSelector((state) => state.user)
    //const [error, setError] = useState(false);
    //const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFromData({ ...formData, [e.target.id]: e.target.value });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //setLoading(true);
            dispatch(signInStart());
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            
            //setLoading(false);
            if (data.success === false) {
                //setError(true);
                dispatch(signInFailure(data));
                return;
            }
            dispatch(signInSuccess(data));
            //setError(false);
            navigate("/");
        } catch (error) {
            //setLoading(false);
            //setError(true);
            dispatch(signInFailure(error));
        };
    };
    return (
        <>
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-samibold
            my-7">Sign In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="email" placeholder="Email"
                id="email" className="bg-slate-100 p-3 rounded-lg" 
                onChange={handleChange}/>
                <input type="password" placeholder="Password"
                id="password" className="bg-slate-100 p-3 rounded-lg" 
                onChange={handleChange}/>
                <button disabled={loading} className="bg-slate-700 text-white p-3
                rounded-lg uppercase hover:opacity-95 
                disabled:placeholder-opacity-80">
                    {loading ? "Loading..." : "Sign In" }
                </button>
                <OAuth/>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Don't have an account?</p>
                <Link to="/signup">
                    <span className="text-blue-500">Sign up</span>
                </Link>
            </div>
            <p className="text-red-700 mt-5">
                { error ?    error.message || "something went wrong!" : "" }
            </p>
        </div>
        </>
    );

}