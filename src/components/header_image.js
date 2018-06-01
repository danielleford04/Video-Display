import React, { Component } from 'react';

class HeaderImage extends Component {

  renderHeaderImage() {
   if (this.props.termInfo) {
     return (

         <div>
           <img src={this.props.termInfo.termImages.hero.hero_1070x300} alt="Mountain Sunset" />
           <div className="header-image-text">
             <h2>{this.props.termInfo.name}</h2>
               <p>{this.props.termInfo.body}</p>
           </div>
         </div>
 )
       }
     };


  render() {
    return(
      <div className="header-image-container">
        {this.renderHeaderImage()}
      </div>
    );
  }
}

export default HeaderImage;
