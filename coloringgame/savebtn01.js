window.addEventListener("load", Initiate);

function Initiate() {
  $("#preloader").delay(300).fadeOut(300);

  OnResize();
  window.addEventListener("resize", OnResize);
}

document
  .getElementById("ios-image-layer")
  .addEventListener("click", function () {
    $(this).fadeOut(200);
  });

//-------result functions--------//
const saveButton = document.getElementById("save-button");

document.getElementById("save-button").addEventListener("click", SaveResultImg);

function SaveResultImg() {
  console.log("save result image");
  RenderResult(document.getElementById("svg-image"));
}

function RenderResult(_result) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const svgImage = document.getElementById("svg-image");
  const svgData = new XMLSerializer().serializeToString(svgImage);
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  context.putImageData(imageData, 0, 0);

  const image = new Image();
  image.onload = function () {
    // 원래 크기의 3배로 설정
    canvas.width = image.width * 3;
    canvas.height = image.height * 3;
    // 안티앨리어싱 적용
    context.imageSmoothingEnabled = true;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    OpenAndDownload(canvas);
  };

  image.src = "data:image/svg+xml;base64," + btoa(svgData);
}

function OpenAndDownload(canvas) {
  console.log(canvas);
  const result_capture_src = canvas.toDataURL("image/jpeg", 1.0);

  let result_capture = new Image();
  result_capture.src = result_capture_src;
  result_capture.style.objectFit = "contain";
  result_capture.style.position = "absolute";
  result_capture.style.top = "50%";
  result_capture.style.left = "50%";
  result_capture.style.maxHeight = "90%";
  result_capture.style.maxWidth = "90%";
  result_capture.style.transform = "translate(-50%, -50%)";
  result_capture.alt = "멋진 여자 색칠공부";
  result_capture.title = "멋진 여자 색칠공부";

  let result_capture_wrapper = document.createElement("div");
  result_capture_wrapper.style.display = "flex";
  result_capture_wrapper.style.justifyContent = "center";
  result_capture_wrapper.style.position = "fixed";
  result_capture_wrapper.style.top = "0";
  result_capture_wrapper.style.left = "0";
  result_capture_wrapper.style.width = "100%";
  result_capture_wrapper.style.height = "100%";
  result_capture_wrapper.style.backgroundColor = "#f3f2ea";
  result_capture_wrapper.appendChild(result_capture);

  let w = window.open("");
  if (w) {
    w.focus();
    w.document.write(result_capture_wrapper.outerHTML);
    w.document.title = "멋진 여자 색칠공부";
    document.getElementById("ios-image-layer").appendChild(result_capture);
    $(document.getElementById("ios-image-layer")).fadeIn(200);
  } else {
    console.log("for some reason window not defined. open on a new layer");
  }

  if (!IOS()) {
    console.log("not ios. download image");
    document.getElementById("ios-image-layer").appendChild(result_capture);
    $(document.getElementById("ios-image-layer")).fadeIn(200);
    let downloader = document.createElement("a");
    downloader.href = result_capture_src;
    downloader.download = "멋진 여자 색칠공부";
    downloader.click();
  } else {
    console.log("IOS. open on a new layer");
    document.getElementById("ios-image-layer").appendChild(result_capture);
    $(document.getElementById("ios-image-layer")).fadeIn(200);
  }
}

function IOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}
