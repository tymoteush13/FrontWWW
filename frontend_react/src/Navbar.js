import {Link, useMatch, useResolvedPath} from 'react-router-dom';

export default function Navbar() {
    return ( 
    <nav className="navbar">
        <div className="nav-left">
            <Link to="/" className="site-title"> Home </Link>
                <ul className="nav-links">
                    <CustomLink to="/categories">Kategorie </CustomLink>
                    <CustomLink to="/highlights">Highlights </CustomLink>
                    <CustomLink to="/new">Stwórz </CustomLink>
                </ul>
        </div>
            <ul className="nav-right">
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
    </nav>
    
    )
}

function CustomLink({to, children,...props}) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li> 
    )
}
