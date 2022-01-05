var global = {}

function REGISTER_ALGO(f) {
    console.log("registering : ", f)
    global["1"] = f
}