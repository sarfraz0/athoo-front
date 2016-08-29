import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const Intro = (props) => (
  <div className="intro">
    <Card>
      <CardHeader title={ JSON.stringify(props.taratata) } subtitle="full-stack developer" avatar="https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/005/010/356/11825cd.jpg" />
      <CardText>
Hi, I am Sarfraz
      </CardText>
    </Card>
    <Card>
      <CardHeader title="lol" />
      <CardText>
Test
      </CardText>
    </Card>
  </div>
);

export default Intro;
