import {useParams} from "react-router-dom";
import {getSession} from "./api.js"
import {useCallback, useEffect, useState} from "react";

export default function Session() {
    const {idcat, idsession} = useParams()
    const getSess = useCallback(getSession, [idcat, idsession]);
    const [session, setSession] = useState()
    useEffect(() => {
        const sessionData = getSess({ catId: idcat, sessionId: idsession });
        setSession(sessionData)
    }, [getSess,idcat, idsession]);

    console.log(session)

    return (
        session && session.speaker &&
        <>
            <div className="">
                <div className="my-5 text-4xl text-gray-600 ">
                    {session.name}
                </div>
                <div className="flex flex-col font-light w-3/4">

                        <div className="my-5"  >
                           {session.desc}
                        </div>

                    <div className="text-1xl font-semibold  text-gray-600 "  >
                        {session.speaker.name}
                    </div>

                    <div className="font-extralight" >
                       <span>{session.speaker.title}</span> at <span>{session.speaker.org}</span>

                    </div>
                    <div className="mt-5" >
                        {session.speaker.bio}

                    </div>
                </div>
            </div>
        </>


    )
}
