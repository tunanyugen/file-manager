export default function getMaxHeight(element: HTMLElement){
    let clone = element.cloneNode(true) as HTMLElement;
    clone.style.height = "auto";
    clone.style.transition = "0s";
    clone.style.position = "fixed";
    clone.style.pointerEvents = "none";
    clone.style.opacity = "0";
    document.body.append(clone);
    let maxHeight = clone.offsetHeight;
    console.log(maxHeight);
    clone.remove();
    return maxHeight;
}