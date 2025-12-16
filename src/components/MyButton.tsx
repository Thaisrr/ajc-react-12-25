import "../styles/MyButton.css";
import {type ButtonHTMLAttributes, type JSX, useState} from "react";

type MyButtonProps = {
    children: string | JSX.Element;
    onClick: () => void;
    level?: 'primary' | 'secondary' | 'tertiary';
    color?: 'main' | 'success' | 'danger';
} & ButtonHTMLAttributes<HTMLButtonElement>;
const MyButton = ({
                      children,
                      onClick,
                      level = 'primary',
                      color = 'main',
                      className,
                      ...otherProps
    } : MyButtonProps) => {
    const [loading, setLoading] = useState<boolean>(false);

    const action = () => {
        setLoading(true);
        onClick();
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    return (
        <button className={`${level} ${color} btn ${className}`} onClick={action} {...otherProps}>
            {!loading ? children : "..."}
        </button>
    )
}

export default MyButton;