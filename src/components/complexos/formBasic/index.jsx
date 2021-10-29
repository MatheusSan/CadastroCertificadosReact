import React, { useContext, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import styled from "styled-components";

import Colors from "../../../assets/Colors";
import Input from "../../simples/input";
import Select from "../../simples/select";
import Checkbox from "../../simples/checkbox";
import Button from "../../simples/button";
import { ValidationsContext } from "../../../contexts/ValidationsProvider";
import { StateFormContext } from "../../../contexts/StateFormProvider";
import { InfosContext } from "../../../contexts/InfosProvider";

const Division = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: -30px 0;
`;
const Text = styled.h2`
  font-size: 18px;
  line-height: 16px;
  color: ${Colors.grayDarkText};
  font-weight: 400;
  margin: 30px 0 10px 0;
`;

function FormBasic() {
  const [firstMounting, setFirstMounting] = useState(false);
  const { validationWithName, haveError } = useContext(ValidationsContext);
  const { nextStateForm } = useContext(StateFormContext);
  const {
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
  } = useContext(InfosContext);

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

  async function submitForm(event) {
    event.preventDefault();
    if (
      !haveError() &&
      validationWithName("checkbox", checked, "terms") &&
      validationWithName("empty", name, "name") &&
      validationWithName("empty", email, "email") &&
      validationWithName("empty", age, "age")
    ) {
      nextStateForm();
    }
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
        Math.trunc(
          (new Date().getTime() -
            new Date(`${month} ${day}, ${year}`).getTime()) /
            (1000 * 60 * 60 * 24 * 365)
        ).toString()
      );
    }
  }, [day, month, year]);

  useEffect(() =>{
    if (firstMounting){
      validationWithName("empty", age, "age");
    }
    setFirstMounting(true);
  }, [age]);

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
        validation={(e) =>
          validationWithName("empty", e.target.value, e.target.name)
        }
      />

      <Division>
        <Input
          name="email"
          text="Email *"
          type="email"
          placeHolder="foo@bar.com"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          validation={(e) => [
            validationWithName("empty", e.target.value, e.target.name),
            validationWithName("complete", e.target.value, e.target.name),
          ]}
          width="50%"
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
          width="45%"
        />
      </Division>

      <Text>Birthday *</Text>
      <Division>
        <Select
          name="day"
          text="Day"
          type="text"
          id="day"
          required
          onChange={(e) => setDay(e.target.value)}
          value={day}
          options={days}
          width="23%"
        />
        <Select
          name="month"
          text="Month"
          type="text"
          id="month"
          required
          onChange={(e) => setMonth(e.target.value)}
          value={month}
          options={months}
          width="23%"
        />
        <Select
          name="year"
          text="Year"
          type="text"
          id="year"
          required
          onChange={(e) => setYear(e.target.value)}
          value={year}
          options={years}
          width="23%"
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
          width="23%"
        />
      </Division>

      <Checkbox
        id="terms"
        texto="I accept the terms and privacy"
        name="terms"
        value={checked}
        onChange={(e) => [
          setChecked(!checked),
          validationWithName("checkbox", e.target.checked, e.target.name),
        ]}
      />

      <Button
        text={
          <React.Fragment>
            Next <FaAngleRight />
          </React.Fragment>
        }
        type="submit"
      />
    </form>
  );
}

export default FormBasic;
