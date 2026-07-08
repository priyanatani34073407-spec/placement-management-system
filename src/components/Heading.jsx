//My Second component
//props:properties
//ue de-structuring
const Heading = function({name,Year}){
  return(
    //can write js in html
    <div>
      <h2>Welcome  {name}</h2>
      <h2>Passing Year {Year}</h2>
    </div>
  )
};
export default Heading