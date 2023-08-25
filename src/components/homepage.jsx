import { useEffect, useState } from "react";
import Header from "./header"
import Typewriter from "typewriter-effect";
import Footer from "./footer";
import { motion } from "framer-motion"

const Homepage = () => {
        const fadeInVariants = {
        hidden: { opacity: .2 },
        visible: { opacity: 1 }
      };
    const [data, setData] = useState([]);
        useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = "http://localhost:3000/posts";
                const response = await fetch(apiUrl);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error Fetching data: ", error);
            }
        };
    
        fetchData();
    }, []);
    return (
        <motion.div initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1 }}>
            <Header/> 
            <div className="home-section">
            <div className="text-container">
                <div className="title-sequence">
                <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome to the world's best blog!")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I hope you enjoy your stay!")
                        .start();
                }}
            />
                </div>
            </div>
            </div>
            <div className="blog-section" id="blog-section">
                <div className="blogs">
                    {data.map(item => (
                        item.is_published &&
                        <a key={item._id} href={`/${item._id}`}><motion.div tabIndex={-1}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="blog-post"  >
                        <div className="picture" style={{ backgroundImage: `url(${item.picture_url})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className="read">read</div>
                            <div className="blog-title">{item.title}</div>
                        </div>

                    </motion.div>
                    </a>
                    ))}
                </div>
            </div>
            <Footer />

        </motion.div>
    )
}

export default Homepage