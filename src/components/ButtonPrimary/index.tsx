import { Button } from "./styles"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    isLoading?: boolean;
}

export const ButtonPrimary = (props: IButtonProps) => {
    return (
        <Button {...props}>{props.isLoading ? <>carregando</> : props.title}</Button>
    )
}