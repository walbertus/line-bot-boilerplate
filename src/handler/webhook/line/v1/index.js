const Bluebird = require('bluebird');
const _ = require('lodash');
const line = require('../../../../singleton/line');

module.exports

const handleEvent = (event) => {
    if (_.isEqual(event.type, 'message')) {
        const message = {
            type: 'text',
            text: event.message.text
        };
        return line.client.replyMessage(event.replyToken, message);
    }
    return Bluebird.resolve(null);
}