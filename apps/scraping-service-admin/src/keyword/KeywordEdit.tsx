import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScrapedDataTitle } from "../scrapedData/ScrapedDataTitle";

export const KeywordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="keyword" source="keyword" />
        <ReferenceArrayInput
          source="scrapedDataItems"
          reference="ScrapedData"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScrapedDataTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
