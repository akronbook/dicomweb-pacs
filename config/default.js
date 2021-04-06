const config = {
    
    source: {
      aet: process.env.DICOMWEB_AET,
      ip: process.env.DICOMWEB_IP,
      port: process.env.DICOMWEB_PORT
    },
    peers: [
      {
        aet: process.env.PEER_AET,
        ip: process.env.PEER_IP,
        port: process.env.PEER_PORT
      }],
    logDir: "./logs",
    storagePath: "./data",
    webserverPort: process.env.PORT || 5000,
    qidoMinChars: 0, // do not issue c-find if search contains less characters
    qidoAppendWildcard: true, // auto append * for patient name query
    permissiveMode: true, // when set to false, all AETs able to query and push need to be in peers
    verboseLogging: false // enable verbose logging to std::out (contains DIMSE output)
};

module.exports = config;
