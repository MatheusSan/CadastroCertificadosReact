import React, { useContext } from "react";
import { FaAngleRight } from "react-icons/fa";

import Input from "../../simples/input";
import Button from "../../simples/button";
import { ValidationsContext } from "../../../contexts/ValidationsProvider";
import { StateFormContext } from "../../../contexts/StateFormProvider";
import { InfosContext } from "../../../contexts/InfosProvider";

function FormSocial() {
  const { validationWithName, haveError } = useContext(ValidationsContext);
  const { nextStateForm } = useContext(StateFormContext);
  const { linkedin, setLinkedin, github, setGithub } = useContext(InfosContext);

  function submitForm(event) {
    event.preventDefault();
    if (!haveError() && github !== "") {
      nextStateForm();
    }
  }

  return (
    <form onSubmit={submitForm}>
      <Input
        name="linkedin"
        text="LinkedIn"
        type="text"
        placeHolder="https://www.linkedin.com/in/foo-bar-3a0560104/"
        id="linkedin"
        required={false}
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
        validation={(e) =>
          validationWithName("complete", e.target.value, e.target.name)
        }
      />
      <Input
        name="github"
        text="GitHub *"
        type="text"
        placeHolder="https://github.com/foobar"
        id="github"
        required
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        validation={(e) =>
          validationWithName("complete", e.target.value, e.target.name)
        }
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

export default FormSocial;
