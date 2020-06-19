import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

class userHeader extends React.Component {


    render() {
        const { user } = this.props
        if (!user)
            return null
        return <div>{user.name}</div>
    }
};

const mapStateToProps = (state, ownProps) => {
    return { user: state.user.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(userHeader);