import React, { createContext, useState } from "react";

export const InfosContext = createContext({});

export const InfosProvider = ({ children }) => {
  //First Tab
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState("");
  const [checked, setChecked] = useState(false);
  //Second Tab
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  //Third Tab
  const [certificates, setCertificates] = useState([{fav: false, text: ""}]);
  const [teamName, setTeamName] = useState("");
  const [institution, setInstitution] = useState("");
  const [graduation, setGraduation] = useState("");

  return (
    <InfosContext.Provider
      value={{
        name,
        setName,
        nickname,
        setNickname,
        email,
        setEmail,
        phone,
        setPhone,
        day,
        setDay,
        month,
        setMonth,
        year,
        setYear,
        age,
        setAge,
        checked,
        setChecked,
        linkedin,
        setLinkedin,
        github,
        setGithub,
        certificates,
        setCertificates,
        teamName,
        setTeamName,
        institution,
        setInstitution,
        graduation,
        setGraduation,
      }}
    >
      {children}
    </InfosContext.Provider>
  );
};
