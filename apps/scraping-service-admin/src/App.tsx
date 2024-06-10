import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { KeywordList } from "./keyword/KeywordList";
import { KeywordCreate } from "./keyword/KeywordCreate";
import { KeywordEdit } from "./keyword/KeywordEdit";
import { KeywordShow } from "./keyword/KeywordShow";
import { ScrapedDataList } from "./scrapedData/ScrapedDataList";
import { ScrapedDataCreate } from "./scrapedData/ScrapedDataCreate";
import { ScrapedDataEdit } from "./scrapedData/ScrapedDataEdit";
import { ScrapedDataShow } from "./scrapedData/ScrapedDataShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Scraping Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Keyword"
          list={KeywordList}
          edit={KeywordEdit}
          create={KeywordCreate}
          show={KeywordShow}
        />
        <Resource
          name="ScrapedData"
          list={ScrapedDataList}
          edit={ScrapedDataEdit}
          create={ScrapedDataCreate}
          show={ScrapedDataShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
