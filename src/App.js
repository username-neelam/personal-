import  'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from  "./img/alexa.png";
import CortanaImage from "./img/cortana.png";
import SiriImage from "./img/siri.png";

function App(){
    return(
        <div>
            <section className = "hero is-primary ">
                <div className ="hero body">
                    <p className ="title">
                    <h1> Personal Digital Assistant</h1>
                    </p>
                </div>
            </section>
            <div className = "container">
                <section className = "section">
                    <div className = "column">
                        <div className = "column is-3">
                          <ProfileCard title = "Alexa"
                           handle = "@alexa99"
                           image={AlexaImage}
                           description = "Alexa was created by amazon and it helps to buy things"
                            />
                           </div>
                            <div className = "column is-3">
                                 <ProfileCard title = "cortana" 
                                 handle = "@cortana32" 
                                 image = {CortanaImage}
                                 description = "Cortana was created by microsoft .who know whats it works?"
                                 />
                                 </div>
                                 <div className = "column is-3">
                                    <ProfileCard title = "siri"
                                     handle = "@siri01" 
                                     image = {SiriImage}
                                     description = "Siri was created by apple and being phased out"
                                     />
                                 </div>
                             </div>
                             </section>
                        </div>
                    </div>
  
      
    )
} 
export default App