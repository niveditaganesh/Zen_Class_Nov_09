interface TvDetails{
    brand:string;
    disp_width:string;
    disp_height:string;
}
var channelz = {
    1: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    2: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    3: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    5: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"}

class Videos{
    TvInfo:TvDetails
    channel:number;
    volume:number;
    constructor(TvInfo:TvDetails){
this.channel=1;
this.volume=100;
this.TvInfo=TvInfo;
let video_ele = <HTMLVideoElement>document.querySelector("#video");
    video_ele.style.width = this.TvInfo.disp_width;
    video_ele.style.height = this.TvInfo.disp_height;
    this.setChannel(this.channel);
    this.setVolume(this.volume);
    let previous = <HTMLButtonElement>document.getElementById("prev");
    previous.onclick = this.previousChannel();
    let next = <HTMLButtonElement>document.getElementById("next");
    next.onclick = this.nextChannel();
    let volumeUp = <HTMLButtonElement>document.getElementById("vol_u");
    volumeUp.onclick = this.increaseVolume();
    let volumeDown = <HTMLButtonElement>document.getElementById("vol_d");
    volumeDown.onclick = this.decreaseVolume();
    }

    setChannel(channel:number):void{
        if(channel>0 && channel<=5){
        this.channel=channel;
        var videoContainer=(<HTMLDivElement>document.querySelector('.coz'))
        var video_ele = document.createElement("video");
        video_ele.setAttribute("id", "video");
        video_ele.setAttribute("controls", "true");
        video_ele.style.width = this.TvInfo.disp_width;
        video_ele.style.height = this.TvInfo.disp_height;;
      var vdeo = document.createElement("source");
      vdeo.setAttribute("src", channelz[this.channel]);
      vdeo.setAttribute("id", "vdeo");
      vdeo.setAttribute("type", "video/mp4");
      video_ele.append(vdeo);
    videoContainer.append(video_ele);
      document.body.append(videoContainer)
      this.displayInfo();
    }
}
    setVolume(volume:number){
        if (volume >= 0 && volume <= 100) {    
            this.volume=volume;
            let videoVol = <HTMLVideoElement>document.querySelector("#video");
            videoVol.volume = this.volume;
            this.displayInfo();
          }
        
    }
    previousChannel(): () => void {
        return () => {
          this.setChannel(this.channel - 1);
        };
      }
      nextChannel(): () => void {
        return () => {
          this.setChannel(this.channel + 1);
        };
      }
      increaseVolume(): () => void {
        return () => {
          if (this.volume < 100) {
            this.setVolume(this.volume + 1);
          } 
        }
      }
      decreaseVolume(): () => void {
        return () => {
          if (this.volume > 0) {
            this.setVolume(this.volume - 1);
          } 
        }
      }
    
    displayInfo(){
        let disp=(<HTMLParagraphElement>document.getElementById('display'));
        disp.innerHTML=`Channel Number:${this.channel} and Volume:${this.volume}`
    }

}
class Samsung extends Videos {
    constructor(TvInfo:TvDetails) {
      super(TvInfo);
    }
  }
  
class mi extends Videos {
    constructor(TvInfo:TvDetails) {
      super(TvInfo);
    }
  }
  
document.getElementById('play').addEventListener('click', () => {
   (<HTMLVideoElement> document.querySelector('video')).play()
});

document.getElementById('pause').addEventListener('click', () => {
    (<HTMLVideoElement> document.querySelector('video')).pause()
});

 let change_tv=()=>{
    let choose = (<HTMLSelectElement>document.getElementById("tv")).value;
    switch (choose) {
      case "Samsung":
        new Samsung({
          brand: "Samsung",
            disp_width: "100%",
            disp_height: "100%",
          
        });
        break;
      case "mi":
        new mi({
          brand: "mi",
            disp_width: "150%",
            disp_height: "80%",
        });
        break;
      default:
          break;
    }
  
  };
