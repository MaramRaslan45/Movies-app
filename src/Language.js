import { useContext } from "react";
import { languagecontext } from "./context/language";
import  React from "react";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

 function  ChangeLanguage () {
  const {langcontext, setlangcontext} = useContext(languagecontext);
  return (
   
   <Button color="inherit" onClick={() => setlangcontext(langcontext === "ar" ? "en" : "ar")}>
            {langcontext}
   </Button>
  
  );
};
export default ChangeLanguage;


