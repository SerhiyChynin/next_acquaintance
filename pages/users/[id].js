import { useRouter } from 'next/router';
import style from '../../style/users.module.scss';
import MainContainer from '../../components/mainContainer';



export default function  User({user}) {
    const {query} = useRouter();
    return (
        <MainContainer keywords={user.name}>
            <div className={style.users}>
                <h1> User: id {query.id} </h1>
                <div>User name: {user.name}</div>
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}
    }
}