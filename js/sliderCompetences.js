const track = document.getElementById("cards");

// initialize dataset defaults so slider starts at first card
track.dataset.mouseDownAt = "0";
track.dataset.prevPercentage = "0";
track.dataset.percentage = "0";

const handleOnDown = (e) =>
    track.dataset.mouseDownAt = e.clientX;

const handleOnUp = ()=> {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = (e) =>{
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth;

    // reduce sensitivity (0.7) so dragging is less jumpy
    const sensitivity = 0.7;
    const percentage = (mouseDelta / maxDelta) * (-100) * sensitivity;

    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;

    // compute minimum percentage based on content overflow so we don't over-scroll
    const overflowPx = Math.max(track.scrollWidth - window.innerWidth, 0);
    const minPercentage = overflowPx === 0 ? 0 : - (overflowPx / track.scrollWidth) * 100;

    // clamp between minPercentage and 0
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), minPercentage);

    track.dataset.percentage = nextPercentage;
    track.animate({
        transform: `translateX(${nextPercentage}%)`
    },{duration:300, fill:"forwards"});


}

window.onmousedown = (e) => handleOnDown(e)
window.ontouchstart = (e) => handleOnDown(e.touches[0])
window.onmouseup = (e) => handleOnUp(e)
window.ontouchend = (e) => handleOnUp(e.touches[0])

window.onmousemove = (e) => handleOnMove(e)
window.ontouchmove = (e) => handleOnMove(e.touches[0])