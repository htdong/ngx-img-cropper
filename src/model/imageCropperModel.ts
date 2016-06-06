import {PointPool} from "./pointPool";
import {CornerMarker} from "./cornerMarker";
import {DragMarker} from "./dragMarker";

export class ImageCropperModel {
    protected canvas:HTMLCanvasElement;
    protected x:number;
    protected y:number;
    protected width:number;
    protected height:number;
    protected canvasWidth:number;
    protected canvasHeight:number;
    protected keepAspect:boolean;
    protected touchRadius:number;
    protected currentDragTouches:Array<any>;
    protected isMouseDown:boolean;
    protected ratioW:number;
    protected ratioH:number;
    protected fileType:string;
    protected imageSet:boolean;
    protected pointPool:PointPool;
    protected buffer:HTMLCanvasElement;
    protected cropCanvas:HTMLCanvasElement;
    tl:CornerMarker;
    tr:CornerMarker;
    bl:CornerMarker;
    br:CornerMarker;
    markers:Array<CornerMarker>;
    protected center:DragMarker;
    protected ctx:any;
    protected aspectRatio:number;
    protected currentlyInteracting:boolean;
    protected srcImage:ImageData;
    protected vertSquashRatio:number;
    protected minXClamp:number;
    protected minYClamp:number;
    protected maxXClamp:number;
    protected maxYClamp:number;
    protected minHeight:number;
    protected minWidth:number;
    protected cropWidth:number;
    protected cropHeight:number;
    protected croppedImage:HTMLImageElement;
}