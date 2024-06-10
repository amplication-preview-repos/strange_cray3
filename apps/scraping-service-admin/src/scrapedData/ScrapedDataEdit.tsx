import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { KeywordTitle } from "../keyword/KeywordTitle";

export const ScrapedDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceInput source="keyword.id" reference="Keyword" label="Keyword">
          <SelectInput optionText={KeywordTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
