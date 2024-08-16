import InfoCard from "./InfoCard";

const About = () => {
    return(
        <div className="mx-96 text-center">
            <h1 className="text-4xl font-bold my-10">About Us</h1>
            <h3 className="mb-3 font-medium text-lg">Following is my info card</h3>
            <br></br>
            <InfoCard name="Yug Agarwal" location="Lucknow" email="agarwal.yug1976@gmail.com" phNo="8299099721"/>
        </div>
    )
}

export default About;