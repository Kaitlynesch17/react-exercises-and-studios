export default function HobbyLinks() {
    let hobbyLinks = ["https://yarnspirations.com/collections/patterns?filter.p.m.global.skill_type=Crochet", "https://www.barnesandnoble.com/", "https://www.michaels.com/shop/art-supplies/paint-painting-supplies/paint-by-number"];

    return(
       <div>
             <a href = {hobbyLinks[0]}> Free Crochet Patterns</a>
             <a href = {hobbyLinks[1]}> Barnes and Noble</a>
             <a href = {hobbyLinks[2]}> Paint by Number Kits</a>
       </div>
    );
 }