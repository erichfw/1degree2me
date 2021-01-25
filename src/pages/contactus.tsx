import { OutboundLink } from "gatsby-plugin-google-gtag";
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
        <p> Join the conversation on <OutboundLink href="https://www.facebook.com/1degree2me-101131795329284/">Facebook</OutboundLink></p>
        <p> Join the conversation on <OutboundLink href="https://twitter.com/1degree2me">Twitter</OutboundLink></p>
        <p> Newsletter subscription coming soon </p>
        
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
