import {useState} from "react";

export const useMouseLocation = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function update(e: MouseEvent) {
        setX(e.x);
        setY(e.y);
    }

    window.addEventListener('mousemove', update);

    return {x, y}
}