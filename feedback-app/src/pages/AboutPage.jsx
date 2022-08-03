import Card from "../components/shared/card";

function AboutPage() {
    return <Card>
        <div className={'about'}>
            <h1>About This Project</h1>
            <p>This is a React app to leave feedback for a product or Service</p>
            <p>Version: 1.0.0</p>

            <p>
                <a href={'/'}>Back to Home</a>
            </p>
        </div>
    </Card>

}

export default AboutPage