import React, { useContext, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

import Input from "../../simples/input";
import Select from "../../simples/select";
import Checkbox from "../../simples/checkbox";
import Button from "../../simples/button";
import { ValidationsContext } from "../../../contexts/ValidationsProvider";

function FormBasic() {
  const { validationWithName } = useContext(ValidationsContext);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState("");
  const [checked, setChecked] = useState(false);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [];
  var years = [];

  function submitForm(event) {
    event.preventDefault();
    console.log("Submeter form");
  }

  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }
  for (
    let i = new Date().getFullYear();
    i >= new Date().getFullYear() - 100;
    i--
  ) {
    years.push(i);
  }
  useEffect(() => {
    if (day && month && year) {
      setAge(
        (
          new Date().getFullYear() -
          new Date(`${month} ${day}, ${year} 00:00:00 `).getFullYear()
        ).toString()
      );
    }
  }, [day, month, year]);

  return (
    <form onSubmit={submitForm}>
      <Input
        name="name"
        text="Full Name *"
        type="text"
        placeHolder="Foo Bar"
        id="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        validation={(e) => [
          validationWithName("empty", e.target.value, e.target.name),
          validationWithName("complete", e.target.value, e.target.name),
        ]}
      />
      <Input
        name="nickname"
        text="Nickname"
        type="text"
        placeHolder="Juanito"
        id="nickname"
        required={false}
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        validation={(e) => validationWithName(e.target.name, e.target.value)}
      />

      <Input
        name="email"
        text="Email *"
        type="email"
        placeHolder="foo@bar.com"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        validation={(e) => validationWithName(e.target.name, e.target.value)}
      />
      <Input
        name="phone"
        text="Phone"
        type="text"
        placeHolder="(83) 00000-0000"
        id="phone"
        required={false}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Select
        name="day"
        text="Day"
        type="text"
        placeHolder=""
        id="day"
        required
        onChange={(e) => setDay(e.target.value)}
        value={day}
        options={days}
      />
      <Select
        name="month"
        text="Month"
        type="text"
        placeHolder="Foo Bar"
        id="month"
        required
        onChange={(e) => setMonth(e.target.value)}
        value={month}
        options={months}
      />
      <Select
        name="year"
        text="Year"
        type="text"
        placeHolder="Foo Bar"
        id="year"
        required
        onChange={(e) => setYear(e.target.value)}
        value={year}
        options={years}
      />
      <Input
        name="age"
        text="Age"
        type="text"
        readonly
        placeHolder="18"
        id="age"
        required
        value={age}
      />

      <Checkbox
        id="terms"
        texto="I accept the terms and privacy"
        nome="Terms"
        value={checked}
        onChange={() => setChecked(!checked)}
      />

      <Button
        texto={
          <React.Fragment>
            Next <FaAngleRight />
          </React.Fragment>
        }
        tipo="submit"
      />
    </form>
  );
}

export default FormBasic;
