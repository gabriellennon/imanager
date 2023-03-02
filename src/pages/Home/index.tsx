import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const infoUserStorage = localStorage.getItem('@userInformationAccount');

        if(infoUserStorage){
            console.log(infoUserStorage)
        } else {
            navigate('/login')
        }
    },[])

    return (
        <div>Home</div>
    )
}