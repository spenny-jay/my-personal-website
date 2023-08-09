import Container from 'react-bootstrap/esm/Container';
import Experience from '../Experience';

import psPath from "../../assets/ps.jpeg";
import ccPath from "../../assets/cc.jpeg";
import elPath from  "../../assets/ellucian.jpeg";

const experience_list = [
    {
        id: 0,
        imgPath: psPath,
        company: "Publicis Sapient",
        title: "Junior Software Engineer",
        startDate: "Feb 2023",
        endDate: "Present",
        accomplishments: [
            "Contributing towards a national debt management web application for the Federal Reserve, aimed to generate several interest rates for securities and provide economic analysis",
            "Led the development of a daily feed to retrieve the latest financial data via API calls from sources including Bloomberg and Haver Analytics to chart economic insights on the platform",
            "Enhanced a robust quality assurance tool to verify critical data stored across development environments were consistent prior to a new release",
        ]
    },
    {
        id: 1,
        imgPath: psPath,
        company: "Publicis Sapient",
        title: "Software Engineer Intern",
        startDate: "Jun 2022",
        endDate: "Aug 2022",
        accomplishments: [
            "Collaborated amongst a team of 6 interns on a web-application aimed to schedule and modify in-store ads for a nationwide grocery chain",
            "Developed an interactive dashboard where users can view all ad playlists on a weekly calendar, filter the scheduled playlists shown, and query store availabilities",
            "Incorporated user login functionality to maintain user sessions and provide additional security to HTTP requests",
            "Participated in an Agile environment and demoed my work and findings"
        ]
    },
    {
        id: 2,
        imgPath: ccPath,
        company: "Case Consulting",
        title: "Full-Stack Software Engineer Intern",
        startDate: "May 2021",
        endDate: "Aug 2021",
        accomplishments: [
            "Worked amongst a team of 5 interns on a company web application to manage employee data, company expenses, and track employee skills",
            "Utilized Vue.js, Node.js, DynamoDB and Lambda to develop and deploy new features throughout the internship",
            "Led the design of an interactive Statistics Dashboard, a collection of customized charts illustrating company-wide data utilizing VueChart.js",
            "Developed a resume parser to quickly scrape resume data to automatically update employee proﬁles using AWS AI services including Textract and Comprehend",
            "Team utilized the agile methodology, Scrum, holding weekly sprint review and aprint planning sessions to demo new features and discuss prioritization of future sprints",
            "Led weekly demos to Product Owner and stakeholders"
        ]
    },
    {
        id: 3,
        imgPath: elPath,
        company: "Ellucian",
        title: "R&D Software Engineer Intern",
        startDate: "May 2020",
        endDate: "Aug 2020",
        accomplishments: [
            "Created a large-scale automation tool to confirm and correct Ellucian Analytics charts' formatting data to save countless hours of manual QA review",
            "Assisted in the development of highly readable, automated test reports, obtaining the results of unit tests covering API calls",
            "Refactored a Jenkins job intended to test the functionality of API calls and the service's UI",
            "Participated in an Agile environment and demoed my work and findings"
        ]
    },
]
const Experiences = () => {
    return ( 
        <section id="experience" className="section">
            <Container className="experience_list">
                <h3 className="header">Experiences</h3>
                {experience_list.map(exp => <Experience key={exp.id} exp={exp} />)}
            </Container>
        </section>
     );
}
 
export default Experiences;