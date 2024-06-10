import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { KeywordTitle } from "../keyword/KeywordTitle";

export const ScrapedDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceInput source="keyword.id" reference="Keyword" label="Keyword">
          <SelectInput optionText={KeywordTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
