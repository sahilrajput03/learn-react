import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import styles from "./app.module.scss";
import { Container, Segment, Menu, Icon, Button } from "semantic-ui-react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu inverted color="purple" fixed="top" className={styles.menu}>
        <Menu.Item header>
          <Icon name="folder" />
          <Icon name="file alternate" />
          Recursive rendering
        </Menu.Item>
      </Menu>
      <Container className={styles.container}>
        <Segment className={styles.segment}>
          <Component {...pageProps} />
        </Segment>
        <div style={{ textAlign: "center" }}>
          <a href="https://gerardvanderput.com" target="_blank">
            <Button icon size="mini" labelPosition="left">
              <Icon name="heart" color="red" />
              Gerard van der Put.com
            </Button>
          </a>
        </div>
      </Container>
    </>
  );
}

export default MyApp;
