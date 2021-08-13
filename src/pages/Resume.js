import Button from 'react-bootstrap/Button'

{/* <Button><a href={process.env.PUBLIC_URL + '/DAVIDMOBRIENRESUME.docx'} download="DAVID M OBRIEN RESUME.docx">Download</a></Button> */}

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <p>Click here to download my resume.</p>
            <Button variant="outline-dark"><a href={process.env.PUBLIC_URL + '/resources/DAVIDMOBRIENRESUME.docx'} download="DAVID M OBRIEN RESUME.docx">Download</a></Button>
        </div>
    );
}