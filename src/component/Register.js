import {useRef, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Register() {
    const inputRef = useRef();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');


    const handleEmailChange = (e) => {

        setEmail(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/thanks', {state: {email}});
    };

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    console.log(email)
    return (
        <>
            <div className="mx-52 h-[560px]">
                <div className="my-10 text-4xl">
                    Register for Wizard Tech
                </div>
                <div>
                    <p className="font-light my-4">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia.
                    </p>

                    <form className="flex flex-col mx-72" onSubmit={handleSubmit}>
                        <label>Email :</label>
                        <input type="email" onChange={handleEmailChange}
                               className="w-full border py-1 mb-5 mt-2" ref={inputRef} required={true}/>
                        <button type="submit" className="bg-[#7CC1AE] text-white py-2">Submit
                        </button>
                    </form>

                </div>
            </div>
        </>

    )
}