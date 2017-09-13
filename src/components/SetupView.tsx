import * as React from 'react';
import {RouteComponentProps} from "react-router";
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

interface ISetupState {
  finished: boolean,
  stepIndex: number,
}

export default class SetupView extends React.Component<RouteComponentProps<{}>, ISetupState> {
  constructor(props: any) {
    super(props);
    this.state = {stepIndex: 0, finished: false};
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return <h3>Upload and edit entities</h3>;
      case 1:
        return <h3>Upload and edit accounts</h3>;
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    return <div className="setup-view">
      <h1>Setup</h1>
      <div>
        <div className="stepper" style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>ENTITIES</StepLabel>
            </Step>
            <Step>
              <StepLabel>ACCOUNTS</StepLabel>
            </Step>
            <Step>
              <StepLabel>ACTUALS</StepLabel>
            </Step>
          </Stepper>
        </div>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <div>
              <p>{this.getStepContent(stepIndex)}</p>
              </div>
              <div style={{marginTop: 12, float: 'right'}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onClick={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>;
  }

}
