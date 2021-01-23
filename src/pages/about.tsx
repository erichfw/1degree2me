import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Header.Content>
            About Yellow Square awareness campaigns
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p> Coming soon </p>
      </Segment>
      <Segment vertical>
        <Header as="h2">
          <Header.Content>
            The story
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p> Coming soon </p>
      </Segment>
      <Segment vertical>
        <Header as="h2">
          <Header.Content>
            Related awareness campaings
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p> Red AIDS awareness ribbon </p>
        <p> Red WII rememberance Poppy flower </p>
        <p> Yellow daffodil for macmillan cancer awareness </p>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
