import Form from '../components/Form';

export default function Contact(){
    return (
        <div>
            <h1>Contact David O'Brien</h1>
            <p>mobile: 651-253-0677</p>
            <div>
                <Form />
            </div>
            <div>
                <p>For more information:</p>
                <ul>
                    <li><a href="mailto:dmobrienllc@gmail.com" target="_blank" rel="noreferrer">Gmail</a></li>
                    <li><a href="https://www.linkedin.com/in/dmobrienllc" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/dmobrienllc" target="_blank" rel="noreferrer">GitHub</a></li>
                    <li><a href="https://stackoverflow.com/users/15960204/dmobrien8485" target="_blank" rel="noreferrer">StackOverflow</a></li>
                </ul>
            </div>
        </div>
    )
}