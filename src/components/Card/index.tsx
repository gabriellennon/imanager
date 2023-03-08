import { ArrowCircleRight } from "@phosphor-icons/react";
import { ContainerCard, Content } from './styles';

interface ICardProps {
    title: string;
    description: string;
    goToUrl: string;
}

export const Card = ({ title, description, goToUrl }: ICardProps) => {
    return (
        <ContainerCard to={goToUrl}>
            <Content>
                <h5>{title}</h5>
                <p>{description}</p>
            </Content>
            <ArrowCircleRight size={25} color="#134E87" />
        </ContainerCard>
    )
}