# HeartBeat

A small NodeJS express server to check the archivenode Nethermind API for the block number. If the request fails, return a HTTP 503, else HTTP 200.

## Install and run

* Run `npm install` to install dependancies
* Rename `.env.example` to `.env` in this root directory and put in the correct API key
* Run `npm run run:server` - this will run the express server on port 3000 - You will get output saying "App listening at ..:3000"

#### Success Response

```shell
curl -v http://localhost:3000/heartbeat
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 3000 (#0)
> GET /heartbeat HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.64.1
> Accept: */*
> 
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 45
< ETag: W/"2d-TQErqtKBPEVRSsSHbk392x85sMw"
< Date: Sun, 09 Aug 2020 15:19:39 GMT
< Connection: keep-alive
< 
* Connection #0 to host localhost left intact
{"jsonrpc":"2.0","id":83,"result":"0xa225c9"}* Closing connection 0
```


#### Error Response

```shell
curl -v http://localhost:3000/heartbeat
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 3000 (#0)
> GET /heartbeat HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.64.1
> Accept: */*
> 
< HTTP/1.1 503 Service Unavailable
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 29
< ETag: W/"1d-/IWDs9BdsunNsCp741xWKhwOYq0"
< Date: Sun, 09 Aug 2020 15:20:38 GMT
< Connection: keep-alive
< 
* Connection #0 to host localhost left intact
{"error":"API not reachable"}* Closing connection 0
```