# PHP-EventStream
A PHP library to create real-time web applications without expensive server and websocket

# How to do it?
You can write your real-time applications with this library so easily just take a look at this sample code:
```php
<?php
include 'EventStream_Server.php';
class app extends EventStream_Server{
	protected function onMessage($message){
		if($message == 'ping'){
            $this->send('callback','pong');
		}else{
            $this->send('callback',$message);		
		}
	}
	protected function connected() {
        $this->sendToAll('joined','New user joined!');
	}
}
$app = new app();
```
and here is client's javascript code:
```javascript
EventStream.create('app.php');
EventStream.addFunction('callback',function(e){
    /**
     * e is not directly returned data,
     *  returned data is e.data
     */
    alert(e.data);
});
EventStream.addFunction('joined',function(e){
    alert('New user joined!');
});
EventStream.send('ping');
EventStream.send('qti3e');
```