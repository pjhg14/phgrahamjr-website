export default function AboutPage() {
    return(
        <main className="about">
            <h2>About me</h2>
            <div className="about-content"> 
                <div className="profile-card">
                    <div className="profile-card-content">
                        <div className="profile-card-front">
                            <img  src="/assets/PG-profile-pic.jpg" alt="card front"/>
                        </div>

                        <div className="profile-card-back">
                            <img src="/assets/Card-back.png" alt="card back"/>
                        </div>
                    </div>
                </div>
                <div className="summary">
                    <p>
                        I am a software developer specializing in the development of frontend, backend, and fullstack web applications 
                            as well as fullstack and monolithic desktop applications. 
                        I greatly enjoy the act of creating useful, in-depth applications that aid in the day to day for the end user 
                            and further enjoy the mitigation of menial tasks through effieient automation and other techniques
                        I have also graduated from Flatiron School and have my associates degree from Brookdale Community College; 
                            with experience from both and my background in customer service, I strive to provide the best and brightest 
                            for those I work for and work with
                    </p>
                    <p className="technologies">
                        Java
                        JavaScript
                        HTML
                        CSS
                        Ruby
                        Rails
                        React
                        Node.js
                        MySQL
                        PostreSQL
                    </p>
                </div>
            </div>
        </main>
    )
}

/*
    <div className="about"> 
        <img className="profile-pic skele-bg" src="/assets/PG-profile-pic-city.png" alt="profile-pic" />
        <section className="overview">
            <p className="summary">
                I am a software developer specializing in the development of frontend, backend, and fullstack web applications 
                    as well as fullstack and monolithic desktop applications. 
                I greatly enjoy the act of creating useful, in-depth applications that aid in the day to day for the end user 
                    and further enjoy the mitigation of menial tasks through effieient automation and other techniques
                I have also graduated from Flatiron School and have my associates degree from Brookdale Community College; 
                    with experience from both and my background in customer service, I strive to provide the best and brightest 
                    for those I work for and work with
            </p>
            <h3>I have experience with:</h3>
            <p className="technologies">
                Java
                JavaScript
                HTML
                CSS
                Ruby
                Rails
                React
                Node.js
                MySQL
                PostreSQL
            </p>
        </section>
    </div>
*/