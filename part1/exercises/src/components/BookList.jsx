export default function BookList() {
   let pageTitle = "Books I've Read this Month";
   let book1 = "https://booktrib.com/wp-content/uploads/2024/07/Reckless-Lauren-Roberts-Featured.webp";
   let book2 = "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8a/6c/42/8a6c42f8-8645-d46b-e1d0-74c59e6f4a88/rm_image.jpg/1200x1200wf.jpg";
   let book3 = "https://s3.amazonaws.com/media.thecrimson.com/photos/2024/02/12/214212_1368534.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img className="recklessBook" src={book1} alt="Reckless by Lauren Roberts" height={200} width={300}/>
         <img className="bloodAndAsh" src={book2} alt="Born of Blood and Ash by Jennifer L. Armentrout" height={300} width={300} />
         <img className="flameAndShadow" src={book3} alt="House of Flame and Shadow by Sarah J. Mass" height={200} width={300}/>
      </div>      
   );
}