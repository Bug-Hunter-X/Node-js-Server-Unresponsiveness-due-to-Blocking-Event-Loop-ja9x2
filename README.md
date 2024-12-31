# Node.js Server Unresponsiveness
This repository demonstrates a common Node.js issue: server unresponsiveness caused by a blocking operation within the request handler.  The `server.js` file contains the buggy code, resulting in the server becoming unresponsive after a request. The solution is provided in `serverSolution.js`.

## Problem
Node.js uses an event-driven, non-blocking I/O model.  When a long-running synchronous operation is executed within the request handler, it blocks the event loop, preventing the server from processing other requests. This leads to unresponsiveness and potentially crashes.

## Solution
The solution involves refactoring the code to use asynchronous operations or offloading the long-running task to a worker thread or other background process. This ensures that the event loop remains responsive.