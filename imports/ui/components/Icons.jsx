import React from 'react';
// import { Badge } from 'reactstrap';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();
export const DenomSymbol = (props) => {
    switch (props.denom){
    case "steak":
        return '🥩';
    default:
        return '🍅';
    }
}


export const ProposalStatusIcon = (props) => {
    switch (props.status){
    case 'Passed':
        return <i className="fas fa-check-circle text-success"></i>;
    case 'Rejected':
        return <i className="fas fa-times-circle text-danger"></i>;
    case 'Removed':
        return <i className="fas fa-trash-alt text-dark"></i>
    case 'DepositPeriod':
        return <i className="fas fa-battery-half text-warning"></i>;
    case 'VotingPeriod':
        return <i className="fas fa-hand-paper text-info"></i>;
    default:
        return <i></i>;
    }
}

export const VoteIcon = (props) => {
    switch (props.vote){
    case 'yes':
        return <i className="fas fa-check text-success"></i>;
    case 'no':
        return <i className="fas fa-times text-danger"></i>;
    case 'abstain':
        return <i className="fas fa-user-slash text-warning"></i>;
    case 'no_with_veto':
        return <i className="fas fa-exclamation-triangle text-info"></i>;
    default:
        return <i></i>;
    }
}

export const TxIcon = (props) => {
    if (props.valid){
        return <span className="status"><i className="fas fa-check-circle"></i>Success</span>;
    }
    else{
        return <span className="text-danger ststus"><i className="fas fa-times-circle"></i>Failed</span>;
    }
}