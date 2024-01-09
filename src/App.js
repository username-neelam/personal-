import ProfileCard from "./ProfileCard";
function App(){
    return(
        <div>
            <section class="hero is-link">
              <div class="hero-body">
                 <p class="title"> personal digital assistant</p>
            </div>
            </section>     
        <div className ="container">
            <section className ="section">
            <div className = "column">
                <div className = "column is -4">
                <ProfileCard title="siri"
                 handle = "siri45"></ProfileCard>
                    </div>
                    
                      <ProfileCard  title="cortana" handle = "cortana99"></ProfileCard>
                    <div className = "column is -4">
                    </div> 
                       <ProfileCard  title="alexa" handle = "alexa76"></ProfileCard>

                    <div className = "column is -4">
                </div>

                    </div>
          </section>
          </div>
        
        </div>
  
      
    )
} 
export default App