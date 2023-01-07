// condition
if (env('server_mode') === 'EMR') {
    // Hide all console.log messages
    console.log = function () {};
}