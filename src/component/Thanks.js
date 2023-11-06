import {useRef, useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function Thanks() {
    const location = useLocation();
    const { email } = location.state;
    return (
        <>
            <div className="ml-[470px] h-[560px]">
                <div className="my-10 text-4xl">
                    Thank You !
                </div>
                <div>
                    <p className="font-light my-4">
                        You're now register  for Wizard Tech .
                    </p>

                    <p className="font-light">
                        We've sent more details to
                        <span className="font-bold"> {email}</span>
                    </p>
                </div>
            </div>
        </>

    )
}