import React from "react";
import axios from "axios";
import "./App.css";
import EmailList from "./components/emailList";

const getEmailURL = "https://flipkart-email-mock.now.sh";

function App() {
  const [emailList, setEmails] = React.useState(null);

  React.useEffect(() => {
    axios.get(getEmailURL).then(res=>res.data).then((data)=>setEmails(data));
  },[]);

  if(!emailList) return null;

  return(
   <EmailList emailListt={emailList} />
  )
}

export default App;
