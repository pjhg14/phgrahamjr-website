export default function LandingPage() {
    return(
        <main className="landing centered">
            <h1 className="main-title">My name is</h1>
            <h1 className="name-title">Paul Graham Jr.</h1>
            <h2 className="sub-title">Welcome to my website</h2>

            {/* content should change based on screen size */}
            <p className="instructions">Click on {"\">\""} to navigate through the site</p>
            <p className="mobile-instructions">Click on the icons at the bottom to navigate through the site</p>
        </main>
    )
}