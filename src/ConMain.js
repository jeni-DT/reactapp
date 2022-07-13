import React from "react";
import FormPerson from "./Components/FormPersons";
import { ContextProvider } from "./Global/Context";

export default function Con() {
  return (
    <ContextProvider>
      <div>
        <FormPerson />
      </div>
    </ContextProvider>
  );
}
