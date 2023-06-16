import Link from "next/link";
import style from '../style/A.module.css';

export default function A ({text, href}) {
    return (
        <Link href={href}>
           <p className={style.link}>{text}</p> 
        </Link>
    )
}