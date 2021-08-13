import Form from '../components/Form';

export default function Contact(){
    return (
        <div>
            <h1>Contact David O'Brien</h1>
            <div>
                <Form />
            </div>
            <div>
                <p>For more information:</p>
                <ul>
                    <li><a href="mailto:dmobrienllc@gmail.com" target="_blank">Gmail</a></li>
                    <li><a href="https://www.linkedin.com/in/dmobrienllc" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/dmobrienllc" target="_blank">GitHub</a></li>
                    <li><a href="https://stackoverflow.com/users/15960204/dmobrien8485" target="_blank">StackOverflow</a></li>
                </ul>
            </div>
        </div>
    )
}