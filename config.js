var config = {
    files_path:null,
    port:8080
};


config.files_path= process.env.FILES_LOCAL_PATH || '/opt/uploadFiles';
config.port= process.env.PORT || 8080;
module.exports = config;