import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../../../context/global-context";
import willpower from "../../../../assets/willpower.svg";

const ResourceSupport = () => {
    const { Aside, PageTitle } = useContext(GlobalContext);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            Aside.update("resources-support");
            PageTitle.set('Resources & Support');
        }
    }, []);
    return (
        <>
            <div className="grid grid-cols-12 gap-3 mt-16">
                <img className="col-span-4" src={willpower} />
                <div className="col-span-8 flex flex-col gap-3 mt-5">
                    <div className="text-4xl font-bold">
                        Breaking Silence, Sparking Justice. <br />
                        [Name],
                    </div>
                    <div className="ml-6 text-lg leading-6">
                        You have made the right decision to speak out.
                        You have shattered the chains of fear and embraced the path of healing and justice.
                        We want to let you know that your voice matters, your story matters,
                        and your journey matters. Your unwavering determination inspires us all.
                        Your decision to not remain silent has the power to ignite hope in others,
                        encouraging them to step out of the shadows. We stand beside you,
                        offering unwavering support. You are not alone;
                        you are part of a community that believes in transformation.
                    </div>
                </div>
            </div>
            <div className="text-2xl font-bold mt-7 ml-3">
                Resources you may find benificial
            </div>
        </>
    )
}

export default ResourceSupport;