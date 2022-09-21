import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Last extends Component {
    render () {
        const {text, valid} = this.props;
        return (
            <div>
                <h1>{text}</h1>
                <button onClick = {valid}>콘솔 메시지</button>
            </div>
        )
    }
}

Last.defaultProps = {
    text : '이건 기본 text props입니다.',
}
Last.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Last;