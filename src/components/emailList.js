import React from 'react'
import Emailcard from './email-card';
import './emailList.css'
import Emailbody from './email-body';

const EmailList = ({emailListt}) => {
    const {total,list} = emailListt;

    const [emailDetail, setEmailDetail] = React.useState(null);
    
    const [show, setShow] = React.useState(false);

   const handleClick = (data)=>{
    setEmailDetail(data)
    console.log(emailDetail)
    setShow(true)
}



  return (
    <div className='container'>
   <div className='list'>
       { list.map((email)=>{
            return(
                <div className='item' key={email.id} onClick={()=>handleClick(email)}>
                    <Emailcard data={email}  />
                </div>
            );
           })}

   </div>
   
           {show &&  <Emailbody data={emailDetail} />}
  
   
    </div>
 
  

  )
}

export default EmailList