import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const ActualHeader = () => {
    return (
        <header>
            <motion.h1 whileHover={{ scale: 1.1 }} tabIndex={-1}
            whileTap={{ scale: 0.9 }}className="title" ><a href="/" style={{color:"white", textDecoration:"none"}}>The Best Blog</a></motion.h1>
            <nav>
                <motion.h3 whileHover={{ scale: 1.1 }} tabIndex={-1}
                whileTap={{ scale: 0.9 }}
            className="home"><Link to="/" style={{color:"white", textDecoration:"none"}}>Home</Link></motion.h3>
            </nav>
        </header>
    )
}

export default ActualHeader