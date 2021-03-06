var config= require('./config')
var express = require('express'),
app=express(),
server=require('http').createServer(app),
cons=require('consolidate'),
path= require('path');
app.engine('.html',cons.jade);
app.set('view engine','html');
app.use(express.static('./public'));
app.get('/',function(req,res){
    res.render("index")
})
app.get('/descargar/:idFile/:idFileName',function(req,res){
    // Validar que el archivo exista
    const file={
        idFile,
        idFileName
      } = req.params
    const pathFileWithExt=path.join(config.files_path,file.idFile)
    const fileComponents= path.parse(pathFileWithExt);
    console.info("Ruta y archivo por descargar: ",pathFileWithExt)
    console.log("Componentes del archivo x descargar:",fileComponents )
    //res.attachment(__dirname+'/uploadedFiles/'+file.idFile);
    //res.end('Downloaded', 'UTF-8')
    //res.type="text/csv"
    // config.files_path+'/'+
    res.download(pathFileWithExt,file.idFileName);
});

server.listen(config.port,() =>{
    console.log("Servidor en el puerto:", config.port)
    console.log("files_path: ", config.files_path)
    console.info("Ruta del aplicativo:", __dirname)
});

