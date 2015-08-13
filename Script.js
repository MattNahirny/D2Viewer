window.onload = init;
var inView;
var slotArray;
var helminfo
function init() {
    slotArray = ["herohelm"];
    helminfo = new Image();
    helminfo.src = "./D2 Stream/LightalsE/helminfo.png"








    var invCanvas = document.getElementById("inventory");
    var invCtx = invCanvas.getContext("2d");

    //Section for images at top
    var c1 = document.getElementById("char1");
    var ctx1 = c1.getContext("2d");
    var lightalse = new Image();
    inView = "none";
    lightalse.onload = function () {
        ctx1.drawImage(this, 0, 0);
    };
    c1.onselectstart = function () {
        return false;
    }
    c1.onclick = function () {
        inView = "LightalsE";
        var inv = document.getElementById("inventory");
        var invctx = inv.getContext("2d");
        var invimg = new Image();
        invimg.src = "./D2 Stream/LightalsE/LightalsEInventory.png"
        invctx.drawImage(invimg, 0, 0);
        setAllHovers(inView);
    };
    lightalse.src = "./D2 Stream/LightalsE/LightalsE.gif"

    var c2 = document.getElementById("char2");
    var ctx2 = c2.getContext("2d");
    var venalse = new Image();
    venalse.onload = function () {

        ctx2.drawImage(this, 0, 0);
    };
    c2.onselectstart = function () {
        return false;
    }
    c2.onclick = function () {
        inView = "VenalsE";
        var inv = document.getElementById("inventory");
        var invctx = inv.getContext("2d");
        var invimg = new Image();
        invimg.src = "./D2 Stream/VenalsE/VenalsEInventory.png"
        invctx.drawImage(invimg, 0, 0);
        setAllHovers(inView);
    };
    venalse.src = "./D2 Stream/VenalsE/VenalsE.gif"

    var c3 = document.getElementById("char3");
    var ctx3 = c3.getContext("2d");
    var falsmite = new Image();
    falsmite.onload = function () {
        ctx3.drawImage(this, 0, 0);
    };
    c3.onselectstart = function () {
        return false;
    }
    c3.onclick = function () {
        inView = "FalsmitE";
        var inv = document.getElementById("inventory");
        var invctx = inv.getContext("2d");
        var invimg = new Image();
        invimg.src = "./D2 Stream/FalsmitE/FalsmitEInventory.png"
        invctx.drawImage(invimg, 0, 0);
        setAllHovers(inView);
    };
    falsmite.src = "./D2 Stream/FalsmitE/FalsmitE.gif"

    function setAllHovers(char) {
        switch (char) {
            case "LightalsE":
                setHover(slotArray, helminfo, invCtx, invCanvas);
                break;
            case "VenalsE":

                break;
            case "FalsmitE":

                break;

        }
    }

}

//--------------------------
//Setting Hovers
//--------------------------


function setHover(slots, image, ctx, canvas) {
    for (var i = 0; i < slots.length; i++) {
        var div = document.getElementById(slots[i]);
        div.onmouseover = function () {
            displayInfo(image, ctx, canvas);
        };
        div.onmouseout = function () {
            removeInfo(ctx, canvas);
        };
    }
};

function displayInfo(image, ctx, canvas) {
    ctx.drawImage(image, 100, 100);
};

function getView() {
    return inView;
}

function removeInfo(ctx, canvas) {
    var state = getView();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (state) {
        case "LightalsE":
            var img = new Image();
            img.src = "./D2 Stream/LightalsE/LightalsEInventory.png";
            ctx.drawImage(img, 0, 0);
            break;
        case "VenalsE":
            var img = new Image();
            img.src = "./D2 Stream/VenalsE/VenalsEInventory.png";
            ctx.drawImage(img, 0, 0);
            break;
        case "FalsmitE":
            var img = new Image();
            img.src = "./D2 Stream/FalsmitE/FalsmitEInventory.png";
            ctx.drawImage(img, 0, 0);
            break;
        case "none":
            break;
    }
    ctx.restore();
};