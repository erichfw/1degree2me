import * as React from "react";
import { Header, Container, Segment } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const ContactUs = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Header.Content>
            Join the movement
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p> Newsletter subscription coming soon </p>
        <p> Social media integration coming soon </p>
      </Segment>
      <Segment vertical>
        <Header as="h2">
          <Header.Content>
            Related awareness campaings
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p> AIDS awareness ribbon </p>
        <p> Poppy flower WII rememberance symbol </p>
        <p> Yellow daffodil for macmillan cancer </p>
      </Segment>
    </Container>
  );
};

export default withLayout(ContactUs);
