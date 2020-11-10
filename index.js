var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var channelz = {
    1: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    2: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    3: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    5: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
};
var Videos = /** @class */ (function () {
    function Videos(TvInfo) {
        this.channel = 1;
        this.volume = 100;
        this.TvInfo = TvInfo;
        var video_ele = document.querySelector("#video");
        video_ele.style.width = this.TvInfo.disp_width;
        video_ele.style.height = this.TvInfo.disp_height;
        this.setChannel(this.channel);
        this.setVolume(this.volume);
        var previous = document.getElementById("prev");
        previous.onclick = this.previousChannel();
        var next = document.getElementById("next");
        next.onclick = this.nextChannel();
        var volumeUp = document.getElementById("vol_u");
        volumeUp.onclick = this.increaseVolume();
        var volumeDown = document.getElementById("vol_d");
        volumeDown.onclick = this.decreaseVolume();
    }
    Videos.prototype.setChannel = function (channel) {
        if (channel > 0 && channel <= 5) {
            this.channel = channel;
            var videoContainer = document.querySelector('.coz');
            var video_ele = document.createElement("video");
            video_ele.setAttribute("id", "video");
            video_ele.setAttribute("controls", "true");
            video_ele.style.width = this.TvInfo.disp_width;
            video_ele.style.height = this.TvInfo.disp_height;
            ;
            var vdeo = document.createElement("source");
            vdeo.setAttribute("src", channelz[this.channel]);
            vdeo.setAttribute("id", "vdeo");
            vdeo.setAttribute("type", "video/mp4");
            video_ele.append(vdeo);
            videoContainer.append(video_ele);
            document.body.append(videoContainer);
            this.displayInfo();
        }
    };
    Videos.prototype.setVolume = function (volume) {
        if (volume >= 0 && volume <= 100) {
            this.volume = volume;
            var videoVol = document.querySelector("#video");
            videoVol.volume = this.volume;
            this.displayInfo();
        }
    };
    Videos.prototype.previousChannel = function () {
        var _this = this;
        return function () {
            _this.setChannel(_this.channel - 1);
        };
    };
    Videos.prototype.nextChannel = function () {
        var _this = this;
        return function () {
            _this.setChannel(_this.channel + 1);
        };
    };
    Videos.prototype.increaseVolume = function () {
        var _this = this;
        return function () {
            if (_this.volume < 100) {
                _this.setVolume(_this.volume + 1);
            }
        };
    };
    Videos.prototype.decreaseVolume = function () {
        var _this = this;
        return function () {
            if (_this.volume > 0) {
                _this.setVolume(_this.volume - 1);
            }
        };
    };
    Videos.prototype.displayInfo = function () {
        var disp = document.getElementById('display');
        disp.innerHTML = "Channel Number:" + this.channel + " and Volume:" + this.volume;
    };
    return Videos;
}());
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung(TvInfo) {
        return _super.call(this, TvInfo) || this;
    }
    return Samsung;
}(Videos));
var mi = /** @class */ (function (_super) {
    __extends(mi, _super);
    function mi(TvInfo) {
        return _super.call(this, TvInfo) || this;
    }
    return mi;
}(Videos));
document.getElementById('play').addEventListener('click', function () {
    document.querySelector('video').play();
});
document.getElementById('pause').addEventListener('click', function () {
    document.querySelector('video').pause();
});
var change_tv = function () {
    var choose = document.getElementById("tv").value;
    switch (choose) {
        case "Samsung":
            new Samsung({
                brand: "Samsung",
                disp_width: "100%",
                disp_height: "100%"
            });
            break;
        case "mi":
            new mi({
                brand: "mi",
                disp_width: "150%",
                disp_height: "80%"
            });
            break;
        default:
            break;
    }
};
