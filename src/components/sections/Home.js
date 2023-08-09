import Container from "react-bootstrap/esm/Container";
import pfpPath from "../../assets/pfp.jpeg";

const Home = () => {
    return ( 
        <section className="home">
            <Container>
                <div className='profile-wrapper'>
                    <img className='pfp' src={pfpPath} alt="Profile"/>
                    <div className="description ps-md-5">
                        <div className="description__name">Spencer Josi</div>
                        <div className="description__title">Full-Stack Software Engineer</div>
                    </div>
                </div>
            </Container>
            
            
            
        </section>
     );
}
 
export default Home;