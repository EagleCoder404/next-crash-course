import Link from "next/link"
import navStyles from "../styles/Nav.module.css"

export default function Nav() {
    return(
        <nav className={navStyles.nav}>
            <ul className={navStyles.navlist}>
                <li className={navStyles.navlink}>
                    <Link href="/">Home</Link>
                </li>
                <li className={navStyles.navlink}>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}