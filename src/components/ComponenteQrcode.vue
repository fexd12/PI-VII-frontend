<template>
  <div class="scanner-container">
    <div v-show="!isLoading">
      <video poster="data:image/gif,AAAA" ref="scanner"></video>
      <div class="overlay-element"></div>
      <div
        class="laser"
        :style="[
          { 'background-color': laserColor },
          { 'box-shadow': `0 0 4px ${laserShadow}` },
        ]"
      ></div>
    </div>
  </div>  
</template>

<script>
import { BrowserMultiFormatReader } from "@zxing/library";

export default {
  name: "stream-barcode-reader",
  props: {
    laserColor: {
      type: String,
      default: "tomato",
    },
    laserShadow: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      isLoading: true,
      codeReader: new BrowserMultiFormatReader(),
      isMediaStreamAPISupported:
        navigator &&
        navigator.mediaDevices &&
        "enumerateDevices" in navigator.mediaDevices
    };
  },
  mounted() {
    // if (!this.isMediaStreamAPISupported) {
    //     // alert('ativar a camera para acessar o scanner')
    //   throw new Exception("Media Stream API is not supported");
    //   // return;
    // }
    //this.start();
    this.mountButton()
    this.$refs.scanner.oncanplay = () => {
      this.isLoading = false;
      this.$emit("loaded");
    };
  },
  beforeDestroy() {
    this.codeReader.reset();
  },
  methods: {
    start() {
      this.codeReader.decodeFromVideoDevice(
        undefined,
        this.$refs.scanner,
        (result) => {
          if (result) {
            this.$emit("decode", result.text);
          }
        }
      );
    },
    mountButton(){
        navigator.mediaDevices.getUserMedia({
            video: {
            facingMode: "environment"
            }
        }).then(()=> {
            // scanning = true;
            // qrResult.hidden = true;
            // btnScanQR.hidden = true;
            // canvasElement.hidden = false;
            //video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen

            // video.srcObject = stream;
            // video.play();
            // tick();
            this.start()
            // scan();
        });
    },
    stopDecode() {
      this.codeReader.stopContinuousDecode();
    },
    reset() {
      this.codeReader.reset();
    },
  },
};
</script>

<style scoped>
video {
  width: 55%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 450px) {
  video {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.scanner-container {
  padding: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30%;
}
@media (max-width: 450px) {
  .scanner-container {
    padding: unset;
    padding-top: 50%;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0%;
  }
}

.overlay-element {
  top: 0;
  width: 50%;
  height: 50%;
  background: rgba(30, 30, 30, 0.5);
  -webkit-clip-path: polygon(
    0% 0%,
    0% 100%,
    20% 100%,
    20% 20%,
    80% 20%,
    80% 80%,
    20% 80%,
    20% 100%,
    100% 100%,
    100% 0%
  );
  clip-path: polygon(
    0% 0%,
    0% 100%,
    20% 100%,
    20% 20%,
    80% 20%,
    80% 80%,
    20% 80%,
    20% 100%,
    100% 100%,
    100% 0%
  );
}

.laser {
  position: absolute;
  width: 30%;
  margin-left: -10%;
  height: 1px;
  margin-top: 15%;
  left: 50%;
  top: 10%;
  z-index: 1;
  -webkit-animation: scanning 2s infinite;
  animation: scanning 2s infinite;
}
@media (max-width: 450px) {
  .laser {
    position: absolute;
    width: 70%;
    margin-left: 0%;
    height: 1px;
    margin-top: 70%;
    left: 15%;
    top: 0%;
    z-index: 1;
    -webkit-animation: scanning 2s infinite;
    animation: scanning 2s infinite;
  }
}
@-webkit-keyframes scanning {
  50% {
    -webkit-transform: translateY(75px);
    transform: translateY(75px);
  }
}
@keyframes scanning {
  50% {
    -webkit-transform: translateY(75px);
    transform: translateY(75px);
  }
}
</style>