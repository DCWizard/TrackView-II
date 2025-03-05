// PlaySample.js
// NO USE NOT WORTH THE TROUBLE... 
// NO SPEED GAIN.
self.onmessage          = function (ThisEvent){ 
  let ThisData          = ThisEvent.data;

  if(ThisData         !== undefined){ 
    let ThisCmd         = ThisData.CMD;
    switch(ThisCmd){
    case "Init":
      console.log(ThisCmd);
      self.postMessage({CMD:"Running"}); 
      break;
    case "PlaySample":
      self.postMessage({CMD:"PlaySample"});
      break;
    }
  } 
}
