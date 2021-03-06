import React, { useContext } from "react";
import { FaCheck, FaPlus } from "react-icons/fa";

import Input from "../../simples/input";
import InputCertificates from "../../simples/inputCertificates";
import Button from "../../simples/button";
import { ValidationsContext } from "../../../contexts/ValidationsProvider";
import { StateFormContext } from "../../../contexts/StateFormProvider";
import { InfosContext } from "../../../contexts/InfosProvider";

function FormCertificates() {
  const { validationWithName, haveError } = useContext(ValidationsContext);
  const { setFinish } = useContext(StateFormContext);
  const {
    certificates,
    setCertificates,
    teamName,
    setTeamName,
    institution,
    setInstitution,
    graduation,
    setGraduation,
  } = useContext(InfosContext);

  function submitForm(event) {
    event.preventDefault();
    if (
      !haveError() &&
      validationWithName("empty", teamName, "team name") &&
      validationWithName("empty", institution, "institution") &&
      validationWithName("empty", graduation, "graduation")
    ) {
      setFinish(true);
    }
  }
  function moreCertificates() {
    if (certificates.length < 5) {
      setCertificates(certificates.concat({ fav: false, text: "" }));
    }
  }
  function modifyCertificates(index, change) {
    let aux = [].concat(certificates);
    aux[index].text = change;
    setCertificates(aux);
  }
  function favorite(i) {
    let aux = [].concat(certificates);
    aux[i].fav = !aux[i].fav;
    setCertificates(aux);
  }

  return (
    <React.Fragment>
      <form onSubmit={submitForm}>
        {certificates.map((value, index) => {
          return (
            <InputCertificates
              key={index}
              name="certificates"
              text="Certificates"
              type="text"
              placeHolder="https://www.linkedin.com/in/foo-bar-3a0560104/"
              id={`certificates-${index + 1}`}
              required={false}
              value={value.text}
              fav={value.fav}
              onFavorite={() => favorite(index)}
              onChange={(e) => modifyCertificates(index, e.target.value)}
              validation={(e) =>
                validationWithName("complete", e.target.value, e.target.id)
              }
            />
          );
        })}
        {certificates.length < 5 && certificates[certificates.length - 1].text !== "" && (
          <Button
            text={
              <React.Fragment>
                <FaPlus style={{ marginRight: 5 }} /> More
              </React.Fragment>
            }
            onClick={moreCertificates}
            type="button"
          />
        )}
        <Input
          name="team name"
          text="Team Name *"
          type="text"
          placeHolder="https://www.linkedin.com/in/foo-bar-3a0560104/"
          id="teamName"
          required
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          validation={(e) => [
            validationWithName("empty", e.target.value, e.target.name),
            validationWithName("complete", e.target.value, e.target.name),
          ]}
        />
        <Input
          name="institution"
          text="Institution *"
          type="text"
          placeHolder="Universidade Federal da Para??ba"
          id="institution"
          required
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          validation={(e) => [
            validationWithName("empty", e.target.value, e.target.name),
            validationWithName("complete", e.target.value, e.target.name),
          ]}
        />
        <Input
          name="graduation"
          text="Graduation *"
          type="text"
          placeHolder="Ci??ncia da Computa????o"
          id="graduation"
          required
          value={graduation}
          onChange={(e) => setGraduation(e.target.value)}
          validation={(e) => [
            validationWithName("empty", e.target.value, e.target.name),
            validationWithName("complete", e.target.value, e.target.name),
          ]}
        />

        <Button
          text={
            <React.Fragment>
              <FaCheck style={{ marginRight: 5 }} /> Finish
            </React.Fragment>
          }
          type="submit"
        />
      </form>
    </React.Fragment>
  );
}

export default FormCertificates;
