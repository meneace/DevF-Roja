colors2 = {
    "aliceblue": [240, 248, 255, 1],
    "antiquewhite": [250, 235, 215, 1],
    "aqua": [0, 255, 255, 1],
    "aquamarine": [127, 255, 212, 1],
    "azure": [240, 255, 255, 1],
    "beige": [245, 245, 220, 1],
    "bisque": [255, 228, 196, 1],
    "black": [0, 0, 0, 1],
    "blanchedalmond": [255, 235, 205, 1],
    "blue": [0, 0, 255, 1],
    "blueviolet": [138, 43, 226, 1],
    "brown": [165, 42, 42, 1],
    "burlywood": [222, 184, 135, 1],
    "cadetblue": [95, 158, 160, 1],
    "chartreuse": [127, 255, 0, 1],
    "chocolate": [210, 105, 30, 1],
    "coral": [255, 127, 80, 1],
};

for (let key in colors2) {

    if (colors2[key][1] > 240) {

        console.log(key + "   " + colors2[key]);
    }
}