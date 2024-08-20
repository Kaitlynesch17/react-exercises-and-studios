import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = 'https://thewholescoopblog.com/sweet-and-spicy-tofu/';
    let authorPhoto = 'https://i0.wp.com/thewholescoopblog.com/wp-content/uploads/2021/05/stella-portrait.jpg?resize=600%2C800&ssl=1';
    let authorName = 'Stella';

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Stella's Headshot" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>The Whole Scoop Blog</a> 
           </div>
        </div>
     );

};

class RecipeDescription extends React.Component {
    render() {
      
       return (
        <div> 
        <div>
           <h1>Sweet and Spicy Tofu</h1>
           <p>Baked to a crisp and then lathered in a homemade glaze, this sweet and spicy tofu makes the perfect protein option for any dish!</p>
        </div>
        <RecipeAuthor />
     </div>
       );

    }
 }

export default RecipeDescription;