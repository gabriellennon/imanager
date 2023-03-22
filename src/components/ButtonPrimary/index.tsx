import { Button } from "./styles"
import ClipLoader from "react-spinners/ClipLoader";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    isLoading?: boolean;
}

export const ButtonPrimary = (props: IButtonProps) => {
    return (
        <Button {...props}>{props.isLoading ? <ClipLoader color="#FFF" loading={props.isLoading} size={12} /> : props.title}</Button>
    )
}