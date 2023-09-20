type VideoPlayerElements = {
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
};

interface VideoPlayerProtocol {
    playToogle(): void;
    stop(): void;
    initialEvent(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
    private videoPlayer: HTMLVideoElement;
    private playButton: HTMLButtonElement;
    private stopButton: HTMLButtonElement;

    constructor(videoPlayerElements: VideoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }

    playToogle(): void {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = "Pause";
        } else {
            this.videoPlayer.pause();
            this.playButton.innerText = "Play";
        }
    }
    stop(): void {
        //
    }
    initialEvent(): void {
        // se eu passar uma function dentro de uma class do add event, ele passa a ser o botão
        this.playButton.addEventListener("click", () => {
            this.playToogle();
        });

        this.stopButton.addEventListener("click", () => {
            this.videoPlayer.pause();
            this.videoPlayer.currentTime = 0;
            this.playButton.innerText = "Play";
        });
    }
}

const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector(".video") as HTMLVideoElement,
    playButton: document.querySelector(".play") as HTMLButtonElement,
    stopButton: document.querySelector(".stop") as HTMLButtonElement,
});

videoPlayer.initialEvent();
