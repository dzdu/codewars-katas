function time(distance, boatSpeed, stream) {
    let arr = stream.split(" ")
    if (stream.toLowerCase().includes("down")) {
        let res = distance / (boatSpeed + +arr[1])
        return Math.round(res * 100) / 100;
    }
    else if (stream.toLowerCase().includes("up")) {
        let res = distance / (boatSpeed - + arr[1])
        return Math.round(res * 100) / 100;
    }
}
