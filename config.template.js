/* eslint-disable no-unused-vars, no-var */

var config = {
  hosts: {
    domain: "jitsi.${DOMAIN}",
    muc: "conference.jitsi.${DOMAIN}",
  },
  bosh: "//jitsi.${DOMAIN}/http-bind",
  clientNode: "http://jitsi.${DOMAIN}/jitsimeet",
  testing: {
    p2pTestMode: false,
  },
  enableNoAudioDetection: true,
  enableNoisyMicDetection: true,
  channelLastN: -1,
  enableWelcomePage: true,
  p2p: {
    enabled: true,
    stunServers: [{ urls: "stun:meet-jit-si-turnrelay.jitsi.net:443" }],
  },
  analytics: {},
  deploymentInfo: {},
  mouseMoveCallbackInterval: 1000,
  makeJsonParserHappy: "even if last key had a trailing comma"
};

/* eslint-enable no-unused-vars, no-var */


