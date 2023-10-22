import React from "react";
import axios from "axios";
import './emailBody.css';

const emailURL = "https://flipkart-email-mock.now.sh/?id=";

const Emailbody = ({data:{ id, date, subject,from:{name} }}) => {
  const [emailData, setEmailData] = React.useState(null);
  let character = name[0].toUpperCase();


  const datee = new Date(date);
  let formatedD = datee.getDate() + '/' +(datee.getMonth() + 1) + '/' + datee.getFullYear() + '  ' + datee.getHours() + ':' + datee.getMinutes() + ':' + datee.getSeconds();  


  React.useEffect(() => {
    axios.get(emailURL+id).then(res=>res.data).then(data=>setEmailData(data.body));  }, [date]);

  return (
    <article>
    <div className="header">
        <div> <figure className='avatar'>
        <div><span>{character}</span></div>    
        </figure></div>
          <div>
              <h2>{subject}</h2>
              <h4>{formatedD}</h4>
          </div>
    </div>
      <p>{emailData}</p>
    </article>
  );
};

export default Emailbody;
