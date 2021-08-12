import { Card } from "react-bootstrap"


export default function CardItem(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imgSrc} alt={props.imgAltTitle} title={props.imgAltTitle}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={props.appUrl}>{props.title} Application</Card.Link>
                <Card.Link href={props.gitRepoUrl}>{props.title} GitHub Repo</Card.Link>
            </Card.Body>
        </Card>
    )
}

