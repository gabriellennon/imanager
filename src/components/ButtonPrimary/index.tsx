import { Button } from "./styles"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export const ButtonPrimary = ({ title }: IButtonProps) => {
    return (
        <Button>{title}</Button>
    )
}