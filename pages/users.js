import Link from "next/link";
import { useEffect, useState } from "react";
import MainContainer from "../components/mainContainer";

const users = ({users}) => {
    // const [users, setUsers] = useState([
    //     {id: 1, name: 'Kolya'},
    //     {id: 2, name: 'Misha'},
    //     {id: 3, name: 'Petyz'}
    // ]); 


    return (
        <MainContainer keywords={'users js next'}>
            <h1>User list</h1>
            <ul>
                {users.map(item => 
                     <li key={item.id}>
                        <Link href={`/users/${item.id}`}>
                            {item.name}
                        </Link>
                    </li>
                    
                )}
            </ul>
        </MainContainer>
    )
}

export default users;

export async function getStaticProps() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()
    return {
        props: {users}
    }
}