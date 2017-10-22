import React from 'react';
import { Tooltip } from 'reactstrap';

const MoreToolTip = props => (
    <Tooltip placement="top" isOpen={this.props.tooltipOpen} target={"more"+this.props.listing.id.toString()} toggle={this.props.toggleTooltip}>
        {
            !this.props.toggleMore? "More" : "Hide"
        }
    </Tooltip>
)

export default MoreToolTip;