import { useEffect, useState } from "react";

export default function useTest() {
    const [number, setNumber] = useState<number>(0);

    function inc() {
        setTimeout(() => {
            setNumber(prev => prev + 1)
        }, 500)
    }

    return {number, inc};
}


// const [number,inc]=useTest() as [number,()=>void];