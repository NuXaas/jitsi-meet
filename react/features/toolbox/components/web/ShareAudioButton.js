// @flow

import { translate } from '../../../base/i18n';
import { IconShareAudio } from '../../../base/icons';
import { AbstractButton, type AbstractButtonProps } from '../../../base/toolbox/components';

type Props = AbstractButtonProps & {

    /**
     * External handler for click action.
     */
     handleClick: Function
};

/**
 * Implementation of a button for sharing audio.
 */
class ShareAudioButton extends AbstractButton<Props, *> {
    accessibilityLabel = 'toolbar.accessibilityLabel.shareaudio';
    icon = IconShareAudio;
    label = 'toolbar.shareaudio';
    tooltip = 'toolbar.shareaudio';

    /**
     * Handles clicking / pressing the button, and opens the appropriate dialog.
     *
     * @protected
     * @returns {void}
     */
    _handleClick() {
        this.props.handleClick();
    }
}

export default translate(ShareAudioButton);
