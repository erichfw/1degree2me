import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  GridColumn,
} from "semantic-ui-react";
import YellowSquare from "../components/YellowSquare";

const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Grid stackable className="square" verticalAlign="middle" centered >
        <Grid.Row stretched columns={2}>
          <Grid.Column width={4} >
            <YellowSquare size="200px" className="squareIcon"></YellowSquare>
          </Grid.Column>
          <Grid.Column width={8}>
              <Container className="squareText">
                <Header inverted as="h3">1degree2me.com</Header>
                <Header inverted as="h1">not just a number</Header>
                <Header inverted as="h3">A parent, a partner, a sibling, a family member or a friend</Header>
                <Header inverted as="h3">Wear a yellow square to make your loss visible</Header>
                <Header inverted as="h2">Apathy Kills</Header>
                <Header inverted as="h3">#1degree2me #wearasquare #covid19</Header>
              </Container>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </Segment>

     {/* About this starter */}
     <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
          <Grid.Row>
            <Grid.Column >
              <Header  as="h1">Yellow Square Remembrance and Awareness symbol</Header>
            <p>As a remembrance symbol, the Yellow Square pays tribute to parents, partners, siblings, family members and friends lost to Covid19. </p>
            <p>As an awareness symbol, the Yellow Square reminds us that a growing number of real people from our communities are dying of this disease. By wearing the square, you can help address growing apathy in your local community. </p>
            <p>Covid is not a challenge to be overcome by "other" people. Covid is a challenge that is relevant to every individual. We should all remain vigilant. </p>
            </Grid.Column>
          </Grid.Row>
      </Grid>
      </Segment>

    {/* Quotes */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" verticalAlign="middle" divided stackable className="container">
        <Grid.Row>
          <Grid.Column class="quote">
            <p>Hate is not the opposite of love; apathy is.</p>
            <p>~ Rollo May</p>
          </Grid.Column>
          <Grid.Column class="quote">
            <p>Science may have found a cure for most evils; but it has found no remedy for the worst of them all-the apathy of human beings.</p>
            <p>~ Helen Keller</p>
          </Grid.Column>
          <Grid.Column class="quote">
            <p>A lot of you cared, just not enough.</p>
            <p>~ Jay Asher, Thirteen Reasons Why</p>
          </Grid.Column>
          </Grid.Row>
          </Grid>
        </Segment>
  </div>;

export default withLayout(IndexPage);
