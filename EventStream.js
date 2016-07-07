/**
 * @author QTI3E
 * @license MIT
 */
var EventStream             = Object();
EventStream.server          = '';
EventStream.EventSource     = null;
EventStream.create      = function(server){
    EventStream.server  = server;
    EventStream.EventSource = new EventSource(server);
};
EventStream.send    = function(message){
    var req     = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState == XMLHttpRequest.DONE){
            if(req.status == 404){
                console.error('Server not found!');
            }
        }
    };
    req.open('GET',EventStream.server+'?s='+encodeURI(message));
    req.send();
};
EventStream.addFunction = function(name,func){
    EventStream.EventSource.addEventListener(name,func);
};