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
            <p>As a remembrance symbol, the Yellow Square pays tribute to parents, partners, siblings, family members and friends lost to Covid19. </p>
            <p>As an awareness symbol, the Yellow Square reminds us that a growing number of real people from our communities are dying of this disease. By wearing the square, you can help address growing apathy in your local community. </p>
            <p>Covid is not a challenge to be overcome by "other" people. Covid is a challenge that is relevant to every individual. We should all remain vigilant. </p>
      </Segment>
      <Segment vertical>
        <Header as="h2">
          <Header.Content>
            The story
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>As we learned more about Covid, it was apparent that we had to shield mom! Mom had upper respiratory as well as other significant health issues. Given the initial mortality data, she was a high-risk individual.</p>
        <p>My dad tested positive for Covid in late Dec 2020. My heart sank. Not for him, but for the risk it posed to my mom. I was pleased with the daily update report from home: All was well with Dad.  He was symptomatic, but he was doing well. I expected him to push through. After all, he celebrated his 63rd birthday in September 2020. Dad had no preexisting health conditions, and he regularly exercised. </p>
        <p>My heart sank when I got the news that mom tested positive also. Her fate seemed so inevitable. Yet dad was doing well, and mom was still asymptomatic. There was still hope! I regularly inquired to how mom was feeling. </p>
        <p>Early January, Dad was admitted to the hospital for oxygen.  "He looked a bit pale", Mom said. We were not allowed to visit but the nurses seemed satisfied with his progress upon telephone inquiry.</p>
        <p>"All is fine", I thought. Mom was still doing well.</p>
        <p>Over the next three days, Dad rapidly deteriorated. He was moved to the intensive care unit and placed onto a ventilator. The doctors induced a coma to allow incubation. </p>
        <p>Dad passed early morning on 15 January 2021. </p>
        <p>Mom is doing well. She is yet to show any symptoms. </p>
        <p>The thing that struck me in all the subsequent conversations with family, friends and neighbours was that, despite the growing incidence of Covid deaths, there seemed to be a prevailing sense of apathy. The consensus seemed to be that only "other" people were at risk. </p>
        <p>What is apathy? Apathy is the person not wearing a mask at the local grocery store, or the person queueing up behind you at the post office mask half-down-the-chin. Apathy is the person who do not sanitise their hands regularly or the person that touches every avocado on the shelf before deciding to buy the premade guacamole instead.</p>
        <p>I'll admit it:  I was not taking this pandemic too seriously either. "As long as Mom is careful", I thought. </p>
        <p>The reality is that those hollow numbers reported on the media cycle represent real people. Our people. My dad. Maybe your brother. The child of the woman in front of you in the checkout queue. Your already financially strained taxi driver's wife. The people that are passing are local community members. Not just a number.</p>
        <p>If each person that has lost a parent, a partner, a family member or a friend wears a Yellow Square to show their first-degree loss, then that will make the magnitude of the total cumulative loss to this disease more visible. Making the impact of this disease more visible (or concrete)  will help to keep us vigilant. </p>
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
        <p> Yellow daffodil for Macmillan cancer awareness </p>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
