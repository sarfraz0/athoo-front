import React from 'react';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const SavoirFaire = (props) => (
  <div className="savoir-faire">
    <Card>
      <CardHeader title="Without Avatar"subtitle="Subtitle" />
      <CardText>
Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
    <Card>
      <CardHeader title="Without Avatar"subtitle="Subtitle" />
      <CardText>
Lorem ipsum dolor sit
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
    <Card>
      <CardHeader title="Without Avatar"subtitle="Subtitle" />
      <CardText>
Lorem ipsum dolor
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
    <Card>
      <CardHeader title="Without Avatar"subtitle="Subtitle" />
      <CardText>
Lorem ipsum dolor
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  </div>
);

export default SavoirFaire;
