var YoutubeMp3Downloader = require('./lib/YoutubeMp3Downloader');

//Configure YoutubeMp3Downloader with your settings
var YD = new YoutubeMp3Downloader({
    "ffmpegPath": "/usr/bin/ffmpeg",        // Where is the FFmpeg binary located?
    "outputPath": "/mnt/c/Users/roberto.gatti/Music/",    // Where should the downloaded and encoded files be stored?
    "youtubeVideoQuality": "highest",       // What video quality should be used?
    "queueParallelism": 2,                  // How many parallel downloads/encodes should be started?
    "progressTimeout": 5000                 // How long should be the interval of the progress reports
});
 
//Download video and save as MP3 file
//YD.download("qmVn6b7DdpA?t=30", "1993_BlindMelon_No_Rain.mp3") ;
YD.download("6NXnxTNIWkc", "4noblondies_whats_up.mp3") ;
YD.download("ifXalt3MJtM", "rhcp_snow.mp3") ;

 
YD.on("finished", function(err, data) {
    console.log(JSON.stringify(data));
});
 
YD.on("error", function(error) {
    console.log(error);
});
 
YD.on("progress", function(progress) {
    console.log(JSON.stringify(progress));
});
