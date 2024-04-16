import Link from "next/link";
import "./navbar-link.css"

export default function NavbarLink(props) {
    return <Link className="navbar-link duration-300" {...props}>
        <span>[</span>
        {props.children}
        <span>]</span>
    </Link>
}