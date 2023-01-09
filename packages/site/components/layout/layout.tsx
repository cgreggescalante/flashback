import { Card, Container } from "react-bootstrap";

import Header from "../header/header";
import style from "./layout.module.scss";

const MAIN = [
  { path: "/", name: "Home" },
  { path: "/track", name: "Top Tracks" },
  { path: "/artist", name: "Top Artists" },
  { path: "/listeningTime", name: "Listening Time" }
];

// eslint-disable-next-line react/display-name
const Layout =
  (links: any[]) =>
  ({ children }: { children: any }) =>
    (
      <div className={style.layout}>
        <Header links={links} />
        <Container className={style.container}>
          <Card className={style.card}>
            <main>{children}</main>
          </Card>
        </Container>
      </div>
    );

export default Layout(MAIN);
