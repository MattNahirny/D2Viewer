

//-------------
//All images go here
//-------------
var LightalsEinvimg = new Image();
LightalsEinvimg.src = "./D2 Stream/LightalsE/LightalsEInventory.png";
var VenalsEinvimg = new Image();
VenalsEinvimg.src = "./D2 Stream/VenalsE/VenalsEInventory.png"
var FalsmitEinvimg = new Image();
FalsmitEinvimg.src = "./D2 Stream/FalsmitE/FalsmitEInventory.png"
var lightalse = new Image();
lightalse.src = "./D2 Stream/LightalsE/LightalsE.gif";
var venalse = new Image();
venalse.src = "./D2 Stream/VenalsE/VenalsE.gif";
var falsmite = new Image();
falsmite.src = "./D2 Stream/FalsmitE/FalsmitE.gif";

//VenalsE gear
var VenalsEhelm = new Image();
VenalsEhelm.src = "./D2 Stream/VenalsE/GearInfo/herohelm.png";
var VenalsEammy = new Image();
VenalsEammy.src = "./D2 Stream/VenalsE/GearInfo/heroammy.png";
var VenalsEwep1 = new Image();
VenalsEwep1.src = "./D2 Stream/VenalsE/GearInfo/herowep1.png";
var VenalsEarmor = new Image();
VenalsEarmor.src = "./D2 Stream/VenalsE/GearInfo/heroarmor.png";
var VenalsEwep2 = new Image();
VenalsEwep2.src = "./D2 Stream/VenalsE/GearInfo/herowep2.png";
var VenalsEgloves = new Image();
VenalsEgloves.src = "./D2 Stream/VenalsE/GearInfo/herogloves.png";
var VenalsEring1 = new Image();
VenalsEring1.src = "./D2 Stream/VenalsE/GearInfo/heroring1.png";
var VenalsEbelt = new Image();
VenalsEbelt.src = "./D2 Stream/VenalsE/GearInfo/herobelt.png";
var VenalsEring2 = new Image();
VenalsEring2.src = "./D2 Stream/VenalsE/GearInfo/heroring2.png";
var VenalsEboots = new Image();
VenalsEboots.src = "./D2 Stream/VenalsE/GearInfo/heroboots.png";

//Venalse Charms
var VenalsEcharm1 = new Image();
VenalsEcharm1.src = "./D2 Stream/VenalsE/GearInfo/charm1.png";
var VenalsEcharm2 = new Image();
VenalsEcharm2.src = "./D2 Stream/VenalsE/GearInfo/charm2.png";
var VenalsEcharm3 = new Image();
VenalsEcharm3.src = "./D2 Stream/VenalsE/GearInfo/charm3.png";
var VenalsEcharm4 = new Image();
VenalsEcharm4.src = "./D2 Stream/VenalsE/GearInfo/charm4.png";
var VenalsEcharm5 = new Image();
VenalsEcharm5.src = "./D2 Stream/VenalsE/GearInfo/charm5.png";
var VenalsEcharm6 = new Image();
VenalsEcharm6.src = "./D2 Stream/VenalsE/GearInfo/charm6.png";
//Venalse Merc
var VenalsEmercwep1 = new Image();
VenalsEmercwep1.src = "./D2 Stream/VenalsE/GearInfo/mercwep1.png";
var VenalsEmerchelm = new Image();
VenalsEmerchelm.src = "./D2 Stream/VenalsE/GearInfo/merchelm.png";
var VenalsEmercarmor = new Image();
VenalsEmercarmor.src = "./D2 Stream/VenalsE/GearInfo/mercarmor.png";

$(document).ready(function init() {




    //Section for images at top
    if ($("#char1").length)
        var ctx1 = $("#char1").get(0).getContext("2d");
    if ($("#char2").length)
        var ctx2 = $("#char2").get(0).getContext("2d");
    if ($("#char3").length)
        var ctx3 = $("#char3").get(0).getContext("2d");

    $(window).load(function () {
        if ($("#inventory").length)
            var invCtx = $("#inventory").get(0).getContext("2d");

        ctx1.drawImage(lightalse, 0, 0);
        ctx2.drawImage(venalse, 0, 0);
        ctx3.drawImage(falsmite, 0, 0);


        $("#char1").click(function () {
            $("#heroSelectText").text("LightalsE");
            invCtx.drawImage(LightalsEinvimg, 0, 0);
            setAllHovers(getWhichChar());

        });

        $("#char2").click(function () {
            $("#heroSelectText").text("VenalsE");
            invCtx.drawImage(VenalsEinvimg, 0, 0);
            setAllHovers(getWhichChar());
        });


        $("#char3").click(function () {
            $("#heroSelectText").text("FalsmitE");
            invCtx.drawImage(FalsmitEinvimg, 0, 0);
            setAllHovers(getWhichChar());
        });


        function setAllHovers(char) {
            var slots;
            switch (char) {
                case "LightalsE":

                    break;
                case "VenalsE":
                    slots = ["herohelm"];
                    setHover(slots, VenalsEhelm, invCtx);
                    slots = ["heroammy"];
                    setHover(slots, VenalsEammy, invCtx);
                    slots = ["herowep1"];
                    setHover(slots, VenalsEwep1, invCtx);
                    slots = ["heroarmor"];
                    setHover(slots, VenalsEarmor, invCtx);
                    slots = ["herowep2"];
                    setHover(slots, VenalsEwep2, invCtx);
                    slots = ["herogloves"];
                    setHover(slots, VenalsEgloves, invCtx);
                    slots = ["heroring1"];
                    setHover(slots, VenalsEring1, invCtx);
                    slots = ["herobelt"];
                    setHover(slots, VenalsEbelt, invCtx);
                    slots = ["heroring2"];
                    setHover(slots, VenalsEring2, invCtx);
                    slots = ["heroboots"];
                    setHover(slots, VenalsEboots, invCtx);
                    slots = ["mercwep1"];
                    setHover(slots, VenalsEmercwep1, invCtx);
                    slots = ["mercarmor"];
                    setHover(slots, VenalsEmercarmor, invCtx);
                    slots = ["merchelm"];
                    setHover(slots, VenalsEmerchelm, invCtx);
                    slots = ["inv8", "inv18", "inv28"];
                    setHover(slots, VenalsEcharm1, invCtx);
                    slots = ["inv9", "inv19", "inv29"];
                    setHover(slots, VenalsEcharm2, invCtx);
                    slots = ["inv10"];
                    setHover(slots, VenalsEcharm3, invCtx);
                    slots = ["inv20"];
                    setHover(slots, VenalsEcharm4, invCtx);
                    slots = ["inv30", "inv40"];
                    setHover(slots, VenalsEcharm5, invCtx);
                    slots = ["inv38"];
                    setHover(slots, VenalsEcharm6, invCtx);
                    break;
                case "FalsmitE":

                    break;

            }
        }

    });

});

//--------------------------
//Setting Hovers
//--------------------------
function getWhichChar() {
    if ($("#heroSelectText").text() === "Select a hero")
        return "none";
    if ($("#heroSelectText").text() === "LightalsE")
        return "LightalsE";
    if ($("#heroSelectText").text() === "VenalsE")
        return "VenalsE";
    if ($("#heroSelectText").text() === "FalsmitE")
        return "FalsmitE";

    return;
}

function setHover(slots, image, ctx) {
    $(document).ready(function () {
        for (var i = 0; i < slots.length; i++) {
            $("#" + slots[i]).mouseover(function () {
                ctx.drawImage(image, $("#inventory").width() / 4, 100);
            });
            $("#" + slots[i]).mouseout(function () {
                removeInfo(ctx, getWhichChar());
            });
        }
    });
};


function removeInfo(ctx, view) {
    ctx.clearRect(0, 0, $("#inventory").width, $("#inventory").height);
    switch (view) {
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