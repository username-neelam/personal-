function ProfileCard({title,handle,image}){
    return(
        <div ClassName = "card">
            <div ClassName = "card-image">
            <figure class="image is-4by3">    
             <img src= {image} alt="pda logo"/>
              </figure>
                </div>
                <div className="card-content"></div>
                <div class="media-content">
          <p className="title is-4" > {title}  </p>
           <p className="handle is -4">{handle}</p>
        </div>
        </div>
    )
}
export default ProfileCard