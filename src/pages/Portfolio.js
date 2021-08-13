import { Container, Row, Col } from 'react-bootstrap';
import CardItem from '../components/CardItem';

export default function Portfolio() {

    const styles = {
        container: {
            paddingLeft: 0,
            paddingRight: 0,
            marginLeft: 2,
            marginRight: 2
        },
        row: {
            marginLeft: 0,
            marginRight: 0
        },
        col: {
            paddingLeft: 0,
            paddingRight: 0,
            marginLeft: 2,
            marginRight: 2
        }
    };

    return (
        <div>
            <h2>Portfolio - Click on the links to view item or repository.</h2>

            <Container fluid style={styles.container}>
                <Row style={styles.row}>
                    <Col style={styles.col}>
                        <CardItem title="ride-bot()"
                            text="Automated gear selection application for cyclists!"
                            appUrl="https://dmobrienllc.github.io/p1-dress-my-ride/"
                            gitRepoUrl="https://github.com/dmobrienllc/p1-dress-my-ride"
                            imgSrc={process.env.PUBLIC_URL + '/images/rock-n-roll-monkey.jpg'}
                            imgAltTitle="Let ride-bot() pimp your ride.." />
                    </Col>
                    <Col style={styles.col}>
                        <CardItem title="Note Taker"
                            text="Simple But Effective Note-Taker Application!"
                            appUrl="https://polar-dusk-69527.herokuapp.com/"
                            gitRepoUrl="https://github.com/dmobrienllc/hw11-note-taker-app"
                            imgSrc={process.env.PUBLIC_URL + '/images/Notes.jpeg'}
                            imgAltTitle="Easy To Use Note-Taker Application" />
                    </Col>
                    <Col style={styles.col}>
                        <CardItem title="Fitness Tracker"
                            text="Track your workouts with Fitness Tracker!"
                            appUrl="https://floating-reef-04864.herokuapp.com/"
                            gitRepoUrl="https://github.com/dmobrienllc/hw18-workout-tracker"
                            imgSrc={process.env.PUBLIC_URL + '/images/bike-builder.jpeg'}
                            imgAltTitle="Fitness is important, keeping track of workouts helps!" />
                    </Col>
                    <Col style={styles.col}>
                        <CardItem title="Tech Blog"
                            text="Visit my technology blog site"
                            appUrl="https://murmuring-fortress-02491.herokuapp.com/"
                            gitRepoUrl="https://github.com/dmobrienllc/hw14-mvc-tech-blog"
                            imgSrc={process.env.PUBLIC_URL + '/images/technologyblog.jpeg'}
                            imgAltTitle="Let ride-bot() pimp your ride.." />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}