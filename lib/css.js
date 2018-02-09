var gkaUtils = require('gka-utils');

function getConfig(frame, i) {
    var {
        width,
        height,
        offX,
        offY,
        file,
        x,
        y,
    } = frame;

    file = './img/' + frame.file;

    return {
        width: `${width}px`,
        height: `${height}px`,
        'background-image': `url("${file}")`,
        'background-position': `${-x}px ${-y}px`,
    }
}

module.exports = function css(data, opts) {
    return gkaUtils.css.getKeyframesCSS(data, opts, {
        getConfig
    });
}
