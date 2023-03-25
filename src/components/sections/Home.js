import Container from "react-bootstrap/esm/Container";


const pfpPath = "https://media.licdn.com/dms/image/D4E03AQHNsNZNxysNcg/profile-displayphoto-shrink_400_400/0/1677715188805?e=1684972800&v=beta&t=R8igFPS7acVKre3b9JJCaBeNkVB9tucpybgIce2Qa0M";

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