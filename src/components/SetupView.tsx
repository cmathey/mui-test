import * as React from 'react';
import {RouteComponentProps} from "react-router";
import TextMobileStepper from './mui/TextMobileStepper'
import Typography from "material-ui/Typography";

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
    return (
      <div className="setup-view">
        <Typography type="display1" color="inherit" noWrap>
          Setup
        </Typography>
        <div>
        <TextMobileStepper/>
        </div>
      </div>
    );
  }

}
