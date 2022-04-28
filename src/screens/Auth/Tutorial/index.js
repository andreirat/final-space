import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TutorialState from '../../../redux/modules/Tutorial';
import Tutorial from './tutorial';

const mapActionsToProps = dispatch =>
  bindActionCreators(
    {
      setStep: TutorialState.actions.setStep,
    },
    dispatch,
  );

const mapStateToProps = state => ({
  step: TutorialState.selectors.step(state),
});

export default connect(mapStateToProps, mapActionsToProps)(Tutorial);
