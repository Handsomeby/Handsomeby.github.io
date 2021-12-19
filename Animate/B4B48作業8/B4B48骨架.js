(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"B4B48骨架_atlas_1", frames: [[1119,517,333,314],[1119,833,104,274],[0,0,1117,1145],[1119,0,499,515]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_30 = function() {
	this.initialize(ss["B4B48骨架_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["B4B48骨架_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["B4B48骨架_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["B4B48骨架_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.燈本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈本體
	this.instance = new lib.CachedBmp_30();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈本體, new cjs.Rectangle(0,0,166.5,157), null);


(lib.燈下線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 燈下線
	this.instance = new lib.CachedBmp_29();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.燈下線, new cjs.Rectangle(0,0,52,137), null);


(lib.吊繩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 吊繩
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D70051").s().p("AifPUQALgPADghIABg3QgIBIgJAVQgNhPAYidIAciNIgKBmQAAAagEBCQAUjQARh/QBRnhAqjwQBJmdBGkyQgHAigLBOQgKBEgHAdIgvDVQgbB6gRBaQgrDig2FxQgpEbgeExQgFAyAABpIACAAIgIAGg");
	this.shape.setTransform(16.6747,98.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.吊繩, new cjs.Rectangle(0,0,33.4,197.9), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-113.35,-264.2,1,1,0,0,0,33.4,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-146.75,-66.35,1,1,0,0,0,87,2.2);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-142.8,86.25,1,1,0,0,0,25.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-142.8,y:86.25,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:0,x:-146.75,y:-66.35,regY:2.2}},{t:this.ikNode_1,p:{rotation:0,x:-113.35,y:-264.2,regY:0,regX:33.4}}]}).to({state:[{t:this.ikNode_4,p:{rotation:1.2311,x:-148.5,y:85.8,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:1.2311,x:-149.15,y:-66.8,regY:2.2}},{t:this.ikNode_1,p:{rotation:0.7283,x:-113.25,y:-264.2,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.4636,x:-154.3,y:85.3,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:2.4636,x:-151.7,y:-67.2,regY:2.2}},{t:this.ikNode_1,p:{rotation:1.4567,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.6955,x:-160.05,y:84.7,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:3.6955,x:-154.2,y:-67.75,regY:2.2}},{t:this.ikNode_1,p:{rotation:2.1853,x:-113.25,y:-264.2,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.9274,x:-165.85,y:84,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:4.9274,x:-156.65,y:-68.3,regY:2.2}},{t:this.ikNode_1,p:{rotation:2.9143,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.1589,x:-171.6,y:83.2,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:6.1589,x:-159.15,y:-68.7,regY:2.3}},{t:this.ikNode_1,p:{rotation:3.6429,x:-113.25,y:-264.2,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.3906,x:-177.35,y:82.3,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:7.3906,x:-161.65,y:-69.3,regY:2.3}},{t:this.ikNode_1,p:{rotation:4.3712,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.6222,x:-183.1,y:81.3,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:8.6222,x:-164.15,y:-70.05,regY:2.2}},{t:this.ikNode_1,p:{rotation:5.1002,x:-113.25,y:-264.2,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.8544,x:-188.8,y:80.2,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:9.8544,x:-166.6,y:-70.75,regY:2.2}},{t:this.ikNode_1,p:{rotation:5.8283,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:11.0867,x:-194.5,y:79,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:11.0867,x:-169.05,y:-71.4,regY:2.2}},{t:this.ikNode_1,p:{rotation:6.5573,x:-113.25,y:-264.2,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:12.3178,x:-200.15,y:77.7,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:12.3178,x:-171.45,y:-72.15,regY:2.2}},{t:this.ikNode_1,p:{rotation:7.2857,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:13.5504,x:-205.7,y:76.3,regX:26,regY:0}},{t:this.ikNode_2,p:{rotation:13.5504,x:-173.9,y:-72.75,regY:2.3}},{t:this.ikNode_1,p:{rotation:8.0144,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:14.7822,x:-211.4,y:74.75,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:14.7822,x:-176.4,y:-73.6,regY:2.3}},{t:this.ikNode_1,p:{rotation:8.7434,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:16.0137,x:-217.05,y:73.2,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:16.0137,x:-178.75,y:-74.5,regY:2.2}},{t:this.ikNode_1,p:{rotation:9.4721,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:17.2455,x:-222.6,y:71.5,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:17.2455,x:-181.15,y:-75.35,regY:2.2}},{t:this.ikNode_1,p:{rotation:10.2005,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:18.4772,x:-228.15,y:69.65,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:18.4772,x:-183.55,y:-76.25,regY:2.2}},{t:this.ikNode_1,p:{rotation:10.9289,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:19.7096,x:-233.65,y:67.8,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:19.7096,x:-185.95,y:-77.15,regY:2.2}},{t:this.ikNode_1,p:{rotation:11.6573,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:20.9411,x:-239.05,y:65.65,regX:25.9,regY:-0.1}},{t:this.ikNode_2,p:{rotation:20.9411,x:-188.3,y:-78.05,regY:2.2}},{t:this.ikNode_1,p:{rotation:12.3868,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:22.1727,x:-244.55,y:63.65,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:22.1727,x:-190.7,y:-78.9,regY:2.3}},{t:this.ikNode_1,p:{rotation:13.1147,x:-113.2,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:23.4047,x:-250,y:61.5,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:23.4047,x:-192.95,y:-80.05,regY:2.2}},{t:this.ikNode_1,p:{rotation:13.8437,x:-113.2,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:24.6363,x:-255.3,y:59.2,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:24.6363,x:-195.3,y:-81.1,regY:2.2}},{t:this.ikNode_1,p:{rotation:14.5725,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:25.8691,x:-260.65,y:56.8,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:25.8691,x:-197.6,y:-82.1,regY:2.2}},{t:this.ikNode_1,p:{rotation:15.301,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:27.1007,x:-265.95,y:54.35,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:27.1007,x:-199.95,y:-83.2,regY:2.2}},{t:this.ikNode_1,p:{rotation:16.0301,x:-113.2,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:28.3322,x:-271.15,y:51.8,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:28.3322,x:-202.2,y:-84.3,regY:2.2}},{t:this.ikNode_1,p:{rotation:16.7582,x:-113.2,y:-264.1,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:29.5641,x:-276.35,y:49.15,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:29.5641,x:-204.55,y:-85.5,regY:2.2}},{t:this.ikNode_1,p:{rotation:17.4872,x:-113.2,y:-264.1,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:30.7963,x:-281.5,y:46.35,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:30.7963,x:-206.8,y:-86.65,regY:2.2}},{t:this.ikNode_1,p:{rotation:18.2157,x:-113.15,y:-264.25,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:32.0284,x:-286.6,y:43.55,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:32.0284,x:-209,y:-87.85,regY:2.2}},{t:this.ikNode_1,p:{rotation:18.9442,x:-113.2,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:33.2599,x:-291.65,y:40.6,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:33.2599,x:-211.25,y:-89.1,regY:2.2}},{t:this.ikNode_1,p:{rotation:19.6725,x:-113.2,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:34.4917,x:-296.6,y:37.55,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:34.4917,x:-213.5,y:-90.35,regY:2.2}},{t:this.ikNode_1,p:{rotation:20.401,x:-113.25,y:-264.05,regY:0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:35.7242,x:-301.5,y:34.45,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:35.7242,x:-215.65,y:-91.6,regY:2.2}},{t:this.ikNode_1,p:{rotation:21.1304,x:-113.2,y:-264.1,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:34.5332,x:-296.75,y:37.5,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:34.5332,x:-213.55,y:-90.4,regY:2.2}},{t:this.ikNode_1,p:{rotation:20.4254,x:-113.2,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:33.3426,x:-291.95,y:40.4,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:33.3426,x:-211.35,y:-89.15,regY:2.2}},{t:this.ikNode_1,p:{rotation:19.7217,x:-113.2,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:32.1513,x:-287.05,y:43.25,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:32.1513,x:-209.25,y:-88,regY:2.2}},{t:this.ikNode_1,p:{rotation:19.0172,x:-113.2,y:-264.1,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:30.9602,x:-282.2,y:46,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:30.9602,x:-207.1,y:-86.8,regY:2.2}},{t:this.ikNode_1,p:{rotation:18.3125,x:-113.2,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:29.7693,x:-277.15,y:48.7,regX:26,regY:0}},{t:this.ikNode_2,p:{rotation:29.7693,x:-204.9,y:-85.65,regY:2.2}},{t:this.ikNode_1,p:{rotation:17.6083,x:-113.2,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:28.5791,x:-272.2,y:51.25,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:28.5791,x:-202.7,y:-84.55,regY:2.2}},{t:this.ikNode_1,p:{rotation:16.9042,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:27.3877,x:-267.15,y:53.75,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:27.3877,x:-200.45,y:-83.5,regY:2.2}},{t:this.ikNode_1,p:{rotation:16.1994,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:26.1967,x:-262.05,y:56.2,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:26.1967,x:-198.25,y:-82.45,regY:2.2}},{t:this.ikNode_1,p:{rotation:15.495,x:-113.2,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:25.0064,x:-256.95,y:58.5,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:25.0064,x:-196.05,y:-81.3,regY:2.3}},{t:this.ikNode_1,p:{rotation:14.7911,x:-113.2,y:-264.1,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:23.8158,x:-251.75,y:60.75,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:23.8158,x:-193.75,y:-80.35,regY:2.2}},{t:this.ikNode_1,p:{rotation:14.0869,x:-113.2,y:-264.1,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:22.6247,x:-246.55,y:62.85,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:22.6247,x:-191.5,y:-79.4,regY:2.2}},{t:this.ikNode_1,p:{rotation:13.3823,x:-113.2,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:21.4343,x:-241.3,y:64.95,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:21.4343,x:-189.2,y:-78.45,regY:2.2}},{t:this.ikNode_1,p:{rotation:12.6778,x:-113.2,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:20.2436,x:-236.05,y:66.9,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:20.2436,x:-186.95,y:-77.55,regY:2.2}},{t:this.ikNode_1,p:{rotation:11.9735,x:-113.3,y:-264.2,regY:0,regX:33.3}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:19.0526,x:-230.65,y:68.7,regX:25.9,regY:-0.1}},{t:this.ikNode_2,p:{rotation:19.0526,x:-184.6,y:-76.65,regY:2.2}},{t:this.ikNode_1,p:{rotation:11.2693,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:17.8615,x:-225.4,y:70.6,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:17.8615,x:-182.35,y:-75.65,regY:2.3}},{t:this.ikNode_1,p:{rotation:10.5651,x:-113.2,y:-264.2,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:16.6705,x:-220,y:72.3,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:16.6705,x:-180.05,y:-74.95,regY:2.2}},{t:this.ikNode_1,p:{rotation:9.8606,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:15.4804,x:-214.65,y:73.95,regX:25.9,regY:0.1}},{t:this.ikNode_2,p:{rotation:15.4804,x:-177.7,y:-74.2,regY:2.2}},{t:this.ikNode_1,p:{rotation:9.1559,x:-113.35,y:-264.15,regY:0,regX:33.3}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:14.289,x:-209.2,y:75.4,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:14.289,x:-175.35,y:-73.35,regY:2.2}},{t:this.ikNode_1,p:{rotation:8.4516,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:13.0985,x:-203.7,y:76.8,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:13.0985,x:-173,y:-72.65,regY:2.2}},{t:this.ikNode_1,p:{rotation:7.7478,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:11.9075,x:-198.25,y:78.15,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:11.9075,x:-170.65,y:-71.9,regY:2.2}},{t:this.ikNode_1,p:{rotation:7.0434,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.7172,x:-192.8,y:79.35,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:10.7172,x:-168.25,y:-71.2,regY:2.2}},{t:this.ikNode_1,p:{rotation:6.3383,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.5261,x:-187.25,y:80.5,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:9.5261,x:-165.9,y:-70.55,regY:2.2}},{t:this.ikNode_1,p:{rotation:5.6341,x:-113.25,y:-264.25,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.335,x:-181.7,y:81.55,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:8.335,x:-163.5,y:-69.9,regY:2.2}},{t:this.ikNode_1,p:{rotation:4.93,x:-113.25,y:-264.2,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.1446,x:-176.2,y:82.45,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:7.1446,x:-161.15,y:-69.3,regY:2.2}},{t:this.ikNode_1,p:{rotation:4.2257,x:-113.25,y:-264.2,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.9531,x:-170.65,y:83.35,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:5.9531,x:-158.75,y:-68.75,regY:2.2}},{t:this.ikNode_1,p:{rotation:3.5211,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.7624,x:-165.1,y:84.1,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:4.7624,x:-156.35,y:-68.2,regY:2.2}},{t:this.ikNode_1,p:{rotation:2.8172,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.572,x:-159.5,y:84.75,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:3.572,x:-153.95,y:-67.7,regY:2.2}},{t:this.ikNode_1,p:{rotation:2.1127,x:-113.25,y:-264.15,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.3813,x:-153.9,y:85.35,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:2.3813,x:-151.55,y:-67.2,regY:2.2}},{t:this.ikNode_1,p:{rotation:1.4086,x:-113.25,y:-264.2,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.19,x:-148.3,y:85.8,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:1.19,x:-149.1,y:-66.75,regY:2.2}},{t:this.ikNode_1,p:{rotation:0.7038,x:-113.25,y:-264.2,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-142.75,y:86.25,regX:25.9,regY:0}},{t:this.ikNode_2,p:{rotation:0,x:-146.7,y:-66.3,regY:2.2}},{t:this.ikNode_1,p:{rotation:0,x:-113.3,y:-264.2,regY:0,regX:33.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402.5,-276.1,335.3,499.40000000000003);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-113.2,-264.15,0.9998,0.9998,0,0,0,33.4,-0.1);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-146.6,-66.2,0.9998,0.9998,0,0,0,87,2.2);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-142.65,86.1,0.9998,0.9998,0,0,0,25.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-142.65,y:86.1,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:0,x:-146.6,y:-66.2,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:0,x:-113.2,y:-264.15,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]}).to({state:[{t:this.ikNode_4,p:{rotation:-1.2471,x:-135.85,y:86.6,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-1.2471,x:-143.1,y:-65.8,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-1.2471,x:-114.05,y:-264.4,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.4965,x:-128.9,y:86.75,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-2.4965,x:-139.45,y:-65.45,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-2.4965,x:-114.8,y:-264.55,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.7472,x:-121.95,y:86.75,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-3.7472,x:-135.85,y:-65.1,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-3.7472,x:-115.5,y:-264.75,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.9961,x:-115,y:86.6,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-4.9961,x:-132.2,y:-64.75,regY:2.3,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-4.9961,x:-116.2,y:-264.95,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.2456,x:-108.05,y:86.3,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-6.2456,x:-128.55,y:-64.75,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-6.2456,x:-116.95,y:-265.15,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.4955,x:-101.15,y:85.75,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-7.4955,x:-124.9,y:-64.75,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-7.4955,x:-117.65,y:-265.35,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.7455,x:-94.15,y:85.1,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-8.7455,x:-121.25,y:-64.85,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-8.7455,x:-118.35,y:-265.55,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.9953,x:-87.25,y:84.3,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-9.9953,x:-117.6,y:-65,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-9.9953,x:-119.05,y:-265.75,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-11.2444,x:-80.4,y:83.35,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-11.2444,x:-113.95,y:-65.25,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-11.2444,x:-119.8,y:-265.9,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.4946,x:-73.5,y:82.15,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-12.4946,x:-110.3,y:-65.6,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-12.4946,x:-120.5,y:-266.1,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-13.7438,x:-66.65,y:80.85,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-13.7438,x:-106.6,y:-66.05,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-13.7438,x:-121.2,y:-266.2,scaleX:0.9998,scaleY:0.9998,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-14.9939,x:-59.8,y:79.4,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-14.9939,x:-103.05,y:-66.65,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-14.9939,x:-122,y:-266.5,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-16.2434,x:-53,y:77.75,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-16.2434,x:-99.35,y:-67.35,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-16.2434,x:-122.7,y:-266.7,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-17.4936,x:-46.25,y:75.85,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-17.4936,x:-95.75,y:-68.05,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-17.4936,x:-123.4,y:-266.9,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-18.7433,x:-39.5,y:73.9,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-18.7433,x:-92.25,y:-68.8,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:86.9}},{t:this.ikNode_1,p:{rotation:-18.7433,x:-124.2,y:-267.1,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-19.9929,x:-32.75,y:71.75,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-19.9929,x:-88.5,y:-69.85,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-19.9929,x:-124.8,y:-267.25,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-21.2429,x:-26.15,y:69.5,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-21.2429,x:-85,y:-70.85,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:86.9}},{t:this.ikNode_1,p:{rotation:-21.2429,x:-125.55,y:-267.5,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-22.4924,x:-19.55,y:67.05,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-22.4924,x:-81.5,y:-71.95,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:86.9}},{t:this.ikNode_1,p:{rotation:-22.4924,x:-126.3,y:-267.65,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-23.7418,x:-13.05,y:64.4,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-23.7418,x:-77.85,y:-73.2,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-23.7418,x:-127,y:-267.85,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-24.9915,x:-6.55,y:61.6,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-24.9915,x:-74.3,y:-74.5,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-24.9915,x:-127.75,y:-268.05,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-26.2416,x:-0.15,y:58.65,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-26.2416,x:-70.9,y:-75.9,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-26.2416,x:-128.4,y:-268.25,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-27.4916,x:6.2,y:55.65,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-27.4916,x:-67.4,y:-77.35,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-27.4916,x:-129.2,y:-268.45,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-28.7412,x:12.6,y:52.35,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-28.7412,x:-63.9,y:-78.85,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-28.7412,x:-129.8,y:-268.65,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-29.9907,x:18.85,y:49,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-29.9907,x:-60.5,y:-80.6,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-29.9907,x:-130.55,y:-268.75,scaleX:0.9997,scaleY:0.9997,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-31.2406,x:24.85,y:45.45,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-31.2406,x:-57.2,y:-82.35,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-31.2406,x:-131.35,y:-269,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-32.4899,x:30.95,y:41.8,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-32.4899,x:-53.85,y:-84.25,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-32.4899,x:-132.05,y:-269.2,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.3}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-33.7391,x:37,y:37.9,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-33.7391,x:-50.55,y:-86.1,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-33.7391,x:-132.8,y:-269.4,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-34.9892,x:42.85,y:33.95,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-34.9892,x:-47.3,y:-88.15,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-34.9892,x:-133.6,y:-269.55,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.3}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-36.2395,x:48.8,y:29.8,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-36.2395,x:-44.05,y:-90.35,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-36.2395,x:-134.15,y:-269.8,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-35.0307,x:43.1,y:33.75,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-35.0307,x:-47.2,y:-88.3,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-35.0307,x:-133.45,y:-269.6,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-33.823,x:37.35,y:37.65,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-33.823,x:-50.35,y:-86.25,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-33.823,x:-132.8,y:-269.45,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-32.6146,x:31.5,y:41.4,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-32.6146,x:-53.55,y:-84.4,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:86.9}},{t:this.ikNode_1,p:{rotation:-32.6146,x:-132.05,y:-269.2,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-31.4074,x:25.7,y:44.95,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-31.4074,x:-56.7,y:-82.55,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-31.4074,x:-131.5,y:-269,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.3}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-30.1987,x:19.9,y:48.5,scaleX:0.9997,scaleY:0.9997,regY:0.1}},{t:this.ikNode_2,p:{rotation:-30.1987,x:-59.95,y:-80.8,regY:2.3,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-30.1987,x:-130.85,y:-268.85,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.3}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-28.9909,x:13.85,y:51.7,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-28.9909,x:-63.25,y:-79.3,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-28.9909,x:-130,y:-268.7,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-27.7822,x:7.75,y:54.85,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-27.7822,x:-66.55,y:-77.75,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-27.7822,x:-129.35,y:-268.5,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-26.5748,x:1.55,y:57.85,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-26.5748,x:-69.9,y:-76.3,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-26.5748,x:-128.6,y:-268.3,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-25.3667,x:-4.6,y:60.75,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-25.3667,x:-73.3,y:-74.9,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-25.3667,x:-127.95,y:-268.1,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-24.158,x:-10.8,y:63.45,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-24.158,x:-76.7,y:-73.6,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-24.158,x:-127.3,y:-267.9,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-22.9502,x:-17.15,y:66.1,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-22.9502,x:-80.1,y:-72.3,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-22.9502,x:-126.5,y:-267.7,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-21.7428,x:-23.55,y:68.55,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-21.7428,x:-83.55,y:-71.25,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-21.7428,x:-125.85,y:-267.55,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-20.5343,x:-29.9,y:70.75,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-20.5343,x:-87,y:-70.25,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-20.5343,x:-125.15,y:-267.35,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-19.326,x:-36.4,y:73,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-19.326,x:-90.45,y:-69.3,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-19.326,x:-124.5,y:-267.15,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-18.1183,x:-42.9,y:74.9,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-18.1183,x:-93.95,y:-68.45,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-18.1183,x:-123.75,y:-267,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-16.9105,x:-49.45,y:76.7,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-16.9105,x:-97.45,y:-67.7,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-16.9105,x:-123.1,y:-266.8,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-15.7023,x:-55.95,y:78.45,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-15.7023,x:-100.9,y:-67.05,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-15.7023,x:-122.3,y:-266.55,scaleX:0.9997,scaleY:0.9997,regY:0,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-14.4939,x:-62.5,y:79.95,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-14.4939,x:-104.55,y:-66.4,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:86.9}},{t:this.ikNode_1,p:{rotation:-14.4939,x:-121.7,y:-266.4,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-13.2867,x:-69.1,y:81.35,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-13.2867,x:-108,y:-65.9,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-13.2867,x:-121,y:-266.2,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-12.0784,x:-75.75,y:82.6,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-12.0784,x:-111.55,y:-65.55,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-12.0784,x:-120.25,y:-266.05,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.8702,x:-82.4,y:83.6,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-10.8702,x:-115.15,y:-65.2,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:86.9}},{t:this.ikNode_1,p:{rotation:-10.8702,x:-119.6,y:-265.85,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.6616,x:-89.1,y:84.6,scaleX:0.9997,scaleY:0.9997,regY:0}},{t:this.ikNode_2,p:{rotation:-9.6616,x:-118.6,y:-64.95,regY:2.2,scaleX:0.9997,scaleY:0.9997,regX:87}},{t:this.ikNode_1,p:{rotation:-9.6616,x:-118.9,y:-265.65,scaleX:0.9997,scaleY:0.9997,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.4545,x:-95.85,y:85.3,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-8.4545,x:-122.15,y:-64.8,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-8.4545,x:-118.2,y:-265.5,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.246,x:-102.45,y:85.95,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-7.246,x:-125.6,y:-64.6,regY:2.3,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-7.246,x:-117.5,y:-265.3,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.0372,x:-109.25,y:86.35,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-6.0372,x:-129.15,y:-64.75,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-6.0372,x:-116.85,y:-265.1,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.8293,x:-115.9,y:86.6,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-4.8293,x:-132.7,y:-64.75,regY:2.3,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-4.8293,x:-116.15,y:-264.9,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.6219,x:-122.65,y:86.75,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-3.6219,x:-136.2,y:-65.15,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-3.6219,x:-115.35,y:-264.7,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.4134,x:-129.4,y:86.75,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-2.4134,x:-139.75,y:-65.4,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-2.4134,x:-114.7,y:-264.55,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.2051,x:-136,y:86.55,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:-1.2051,x:-143.25,y:-65.8,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:-1.2051,x:-114.05,y:-264.35,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-142.65,y:86.2,scaleX:0.9998,scaleY:0.9998,regY:0}},{t:this.ikNode_2,p:{rotation:0,x:-146.6,y:-66.25,regY:2.2,scaleX:0.9998,scaleY:0.9998,regX:87}},{t:this.ikNode_1,p:{rotation:0,x:-113.25,y:-264.2,scaleX:0.9998,scaleY:0.9998,regY:-0.1,regX:33.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.6,-269.6,384.4,494.90000000000003);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_1 = new lib.吊繩();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-113.35,-264.2,1,1,0,0,0,33.4,0);

	this.ikNode_2 = new lib.燈本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-146.75,-66.35,1,1,0,0,0,87,2.2);

	this.ikNode_4 = new lib.燈下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-142.8,86.25,1,1,0,0,0,25.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-142.8,y:86.25,regX:25.9}},{t:this.ikNode_2,p:{rotation:0,x:-146.75,y:-66.35,regY:2.2}},{t:this.ikNode_1,p:{rotation:0,x:-113.35,y:-264.2,regX:33.4}}]}).to({state:[{t:this.ikNode_4,p:{rotation:1.0815,x:-149.7,y:85.85,regX:25.9}},{t:this.ikNode_2,p:{rotation:1.8302,x:-148.75,y:-66.65,regY:2.2}},{t:this.ikNode_1,p:{rotation:0.605,x:-113.25,y:-264.2,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.1643,x:-156.65,y:85.4,regX:25.9}},{t:this.ikNode_2,p:{rotation:3.6613,x:-150.85,y:-67.05,regY:2.2}},{t:this.ikNode_1,p:{rotation:1.211,x:-113.25,y:-264.2,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.2462,x:-163.6,y:84.65,regX:25.9}},{t:this.ikNode_2,p:{rotation:5.4918,x:-152.9,y:-67.4,regY:2.3}},{t:this.ikNode_1,p:{rotation:1.817,x:-113.25,y:-264.2,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.3282,x:-170.5,y:83.8,regX:25.9}},{t:this.ikNode_2,p:{rotation:7.3227,x:-155,y:-67.75,regY:2.3}},{t:this.ikNode_1,p:{rotation:2.4224,x:-113.25,y:-264.2,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.4111,x:-177.45,y:82.8,regX:25.9}},{t:this.ikNode_2,p:{rotation:9.1532,x:-157.05,y:-68.35,regY:2.2}},{t:this.ikNode_1,p:{rotation:3.0281,x:-113.25,y:-264.2,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.4931,x:-184.3,y:81.6,regX:25.9}},{t:this.ikNode_2,p:{rotation:10.9842,x:-159.1,y:-68.8,regY:2.2}},{t:this.ikNode_1,p:{rotation:3.6341,x:-113.25,y:-264.2,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.5749,x:-191.2,y:80.2,regX:25.9}},{t:this.ikNode_2,p:{rotation:12.815,x:-161.2,y:-69.3,regY:2.2}},{t:this.ikNode_1,p:{rotation:4.2397,x:-113.25,y:-264.2,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.6576,x:-198,y:78.65,regX:25.9}},{t:this.ikNode_2,p:{rotation:14.6457,x:-163.3,y:-69.7,regY:2.3}},{t:this.ikNode_1,p:{rotation:4.8458,x:-113.2,y:-264.2,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.7399,x:-204.7,y:76.95,regX:26}},{t:this.ikNode_2,p:{rotation:16.4763,x:-165.25,y:-70.4,regY:2.2}},{t:this.ikNode_1,p:{rotation:5.4514,x:-113.25,y:-264.2,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.8221,x:-211.5,y:75,regX:25.9}},{t:this.ikNode_2,p:{rotation:18.3069,x:-167.35,y:-70.8,regY:2.3}},{t:this.ikNode_1,p:{rotation:6.0577,x:-113.25,y:-264.15,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:11.9039,x:-218.2,y:72.95,regX:25.9}},{t:this.ikNode_2,p:{rotation:20.1374,x:-169.35,y:-71.5,regY:2.2}},{t:this.ikNode_1,p:{rotation:6.6629,x:-113.35,y:-264.15,regX:33.3}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:12.9864,x:-224.8,y:70.7,regX:25.9}},{t:this.ikNode_2,p:{rotation:21.9688,x:-171.35,y:-72.1,regY:2.2}},{t:this.ikNode_1,p:{rotation:7.2689,x:-113.2,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:14.0689,x:-231.4,y:68.3,regX:25.9}},{t:this.ikNode_2,p:{rotation:23.7997,x:-173.45,y:-72.75,regY:2.2}},{t:this.ikNode_1,p:{rotation:7.8749,x:-113.2,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:15.1506,x:-237.9,y:65.7,regX:25.9}},{t:this.ikNode_2,p:{rotation:25.6302,x:-175.4,y:-73.35,regY:2.2}},{t:this.ikNode_1,p:{rotation:8.4807,x:-113.2,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:16.2329,x:-244.3,y:63,regX:25.9}},{t:this.ikNode_2,p:{rotation:27.4608,x:-177.45,y:-74.05,regY:2.2}},{t:this.ikNode_1,p:{rotation:9.0868,x:-113.2,y:-264.15,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:17.3152,x:-250.6,y:60.1,regX:25.9}},{t:this.ikNode_2,p:{rotation:29.2913,x:-179.45,y:-74.75,regY:2.2}},{t:this.ikNode_1,p:{rotation:9.692,x:-113.3,y:-264.15,regX:33.3}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:18.3971,x:-256.9,y:57,regX:25.9}},{t:this.ikNode_2,p:{rotation:31.1221,x:-181.45,y:-75.45,regY:2.2}},{t:this.ikNode_1,p:{rotation:10.2983,x:-113.2,y:-264.15,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:19.4795,x:-263.1,y:53.85,regX:25.9}},{t:this.ikNode_2,p:{rotation:32.9529,x:-183.45,y:-76.2,regY:2.2}},{t:this.ikNode_1,p:{rotation:10.9041,x:-113.2,y:-264.15,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:20.5618,x:-269.2,y:50.45,regX:25.9}},{t:this.ikNode_2,p:{rotation:34.784,x:-185.45,y:-76.8,regY:2.3}},{t:this.ikNode_1,p:{rotation:11.51,x:-113.15,y:-264.15,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:19.0211,x:-256.45,y:56.85,regX:25.9}},{t:this.ikNode_2,p:{rotation:31.8061,x:-179.4,y:-74.7,regY:2.2}},{t:this.ikNode_1,p:{rotation:9.6831,x:-113.3,y:-264.15,regX:33.3}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:17.48,x:-243.45,y:62.7,regX:25.9}},{t:this.ikNode_2,p:{rotation:28.8291,x:-173.35,y:-72.65,regY:2.2}},{t:this.ikNode_1,p:{rotation:7.8564,x:-113.15,y:-264.15,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:15.939,x:-230.15,y:67.95,regX:25.9}},{t:this.ikNode_2,p:{rotation:25.8515,x:-167.2,y:-70.85,regY:2.2}},{t:this.ikNode_1,p:{rotation:6.0305,x:-113.2,y:-264.15,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:14.3982,x:-216.65,y:72.65,regX:25.9}},{t:this.ikNode_2,p:{rotation:22.8739,x:-161.05,y:-69.25,regY:2.2}},{t:this.ikNode_1,p:{rotation:4.2038,x:-113.2,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:12.8572,x:-203,y:76.75,regX:25.9}},{t:this.ikNode_2,p:{rotation:19.8962,x:-154.8,y:-67.85,regY:2.2}},{t:this.ikNode_1,p:{rotation:2.377,x:-113.2,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:11.3166,x:-189.1,y:80.35,regX:25.9}},{t:this.ikNode_2,p:{rotation:16.9181,x:-148.5,y:-66.6,regY:2.2}},{t:this.ikNode_1,p:{rotation:0.5508,x:-113.2,y:-264.15,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.7754,x:-175.15,y:83.25,regX:25.9}},{t:this.ikNode_2,p:{rotation:13.941,x:-142.2,y:-65.55,regY:2.2}},{t:this.ikNode_1,p:{rotation:-1.2748,x:-113.25,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.2342,x:-161,y:85.55,regX:25.9}},{t:this.ikNode_2,p:{rotation:10.9638,x:-135.85,y:-64.75,regY:2.2}},{t:this.ikNode_1,p:{rotation:-3.1017,x:-113.25,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.6929,x:-146.85,y:87.3,regX:25.9}},{t:this.ikNode_2,p:{rotation:7.9861,x:-129.55,y:-63.95,regY:2.3}},{t:this.ikNode_1,p:{rotation:-4.9274,x:-113.2,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.152,x:-132.55,y:88.45,regX:25.9}},{t:this.ikNode_2,p:{rotation:5.0081,x:-123.2,y:-63.65,regY:2.2}},{t:this.ikNode_1,p:{rotation:-6.7545,x:-113.25,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.6114,x:-118.25,y:88.9,regX:25.9}},{t:this.ikNode_2,p:{rotation:2.0305,x:-116.8,y:-63.45,regY:2.2}},{t:this.ikNode_1,p:{rotation:-8.5807,x:-113.25,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.0707,x:-103.9,y:88.8,regX:25.9}},{t:this.ikNode_2,p:{rotation:-0.946,x:-110.35,y:-63.45,regY:2.2}},{t:this.ikNode_1,p:{rotation:-10.4077,x:-113.25,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.5298,x:-89.6,y:88.05,regX:25.9}},{t:this.ikNode_2,p:{rotation:-3.9233,x:-104,y:-63.6,regY:2.2}},{t:this.ikNode_1,p:{rotation:-12.2338,x:-113.25,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.0107,x:-75.35,y:86.75,regX:25.9}},{t:this.ikNode_2,p:{rotation:-6.9015,x:-97.65,y:-63.95,regY:2.2}},{t:this.ikNode_1,p:{rotation:-14.06,x:-113.25,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.5511,x:-61.2,y:84.8,regX:25.9}},{t:this.ikNode_2,p:{rotation:-9.8791,x:-91.2,y:-64.65,regY:2.2}},{t:this.ikNode_1,p:{rotation:-15.8864,x:-113.3,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.0925,x:-47.1,y:82.2,regX:25.9}},{t:this.ikNode_2,p:{rotation:-12.8563,x:-84.9,y:-65.4,regY:2.2}},{t:this.ikNode_1,p:{rotation:-17.7131,x:-113.3,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.6333,x:-33.2,y:79.05,regX:25.9}},{t:this.ikNode_2,p:{rotation:-15.8336,x:-78.6,y:-66.45,regY:2.2}},{t:this.ikNode_1,p:{rotation:-19.5398,x:-113.25,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.1747,x:-19.4,y:75.25,regX:25.9}},{t:this.ikNode_2,p:{rotation:-18.8112,x:-72.25,y:-67.5,regY:2.3}},{t:this.ikNode_1,p:{rotation:-21.366,x:-113.25,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.7151,x:-5.8,y:70.95,regX:25.9}},{t:this.ikNode_2,p:{rotation:-21.7891,x:-66.05,y:-69,regY:2.2}},{t:this.ikNode_1,p:{rotation:-23.1924,x:-113.25,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-10.2566,x:7.6,y:66,regX:25.9}},{t:this.ikNode_2,p:{rotation:-24.7662,x:-59.9,y:-70.6,regY:2.2}},{t:this.ikNode_1,p:{rotation:-25.0189,x:-113.3,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.7435,x:0.45,y:68.55,regX:26}},{t:this.ikNode_2,p:{rotation:-23.5284,x:-64.1,y:-69.55,regY:2.2}},{t:this.ikNode_1,p:{rotation:-23.768,x:-113.3,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-9.2302,x:-6.9,y:70.95,regX:25.9}},{t:this.ikNode_2,p:{rotation:-22.2899,x:-68.35,y:-68.45,regY:2.2}},{t:this.ikNode_1,p:{rotation:-22.5169,x:-113.3,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.7178,x:-14.2,y:73.15,regX:25.9}},{t:this.ikNode_2,p:{rotation:-21.0518,x:-72.65,y:-67.55,regY:2.2}},{t:this.ikNode_1,p:{rotation:-21.2663,x:-113.3,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-8.205,x:-21.55,y:75.25,regX:25.9}},{t:this.ikNode_2,p:{rotation:-19.8136,x:-76.95,y:-66.75,regY:2.2}},{t:this.ikNode_1,p:{rotation:-20.0154,x:-113.25,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.6922,x:-28.95,y:77.2,regX:25.9}},{t:this.ikNode_2,p:{rotation:-18.5748,x:-81.3,y:-65.95,regY:2.2}},{t:this.ikNode_1,p:{rotation:-18.7642,x:-113.3,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-7.179,x:-36.4,y:78.9,regX:25.9}},{t:this.ikNode_2,p:{rotation:-17.3362,x:-85.6,y:-65.3,regY:2.2}},{t:this.ikNode_1,p:{rotation:-17.5129,x:-113.3,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.6665,x:-43.9,y:80.55,regX:25.9}},{t:this.ikNode_2,p:{rotation:-16.0982,x:-89.95,y:-64.75,regY:2.2}},{t:this.ikNode_1,p:{rotation:-16.2622,x:-113.3,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-6.1536,x:-51.4,y:81.9,regX:25.9}},{t:this.ikNode_2,p:{rotation:-14.8598,x:-94.3,y:-64.3,regY:2.2}},{t:this.ikNode_1,p:{rotation:-15.011,x:-113.3,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.6403,x:-58.95,y:83.2,regX:25.9}},{t:this.ikNode_2,p:{rotation:-13.6215,x:-98.7,y:-63.95,regY:2.2}},{t:this.ikNode_1,p:{rotation:-13.7602,x:-113.3,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-5.1283,x:-66.5,y:84.35,regX:25.9}},{t:this.ikNode_2,p:{rotation:-12.3832,x:-103.05,y:-63.7,regY:2.2}},{t:this.ikNode_1,p:{rotation:-12.5094,x:-113.3,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.615,x:-74.1,y:85.25,regX:25.9}},{t:this.ikNode_2,p:{rotation:-11.1445,x:-107.4,y:-63.5,regY:2.2}},{t:this.ikNode_1,p:{rotation:-11.2587,x:-113.3,y:-264.05,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-4.1021,x:-81.65,y:86.05,regX:25.9}},{t:this.ikNode_2,p:{rotation:-9.9067,x:-111.8,y:-63.45,regY:2.2}},{t:this.ikNode_1,p:{rotation:-10.0071,x:-113.3,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.5895,x:-89.3,y:86.65,regX:25.9}},{t:this.ikNode_2,p:{rotation:-8.6682,x:-116.2,y:-63.45,regY:2.2}},{t:this.ikNode_1,p:{rotation:-8.7566,x:-113.3,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-3.0763,x:-96.95,y:87.05,regX:25.9}},{t:this.ikNode_2,p:{rotation:-7.4294,x:-120.6,y:-63.55,regY:2.2}},{t:this.ikNode_1,p:{rotation:-7.5052,x:-113.3,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.5633,x:-104.6,y:87.35,regX:25.9}},{t:this.ikNode_2,p:{rotation:-6.1914,x:-124.95,y:-63.8,regY:2.2}},{t:this.ikNode_1,p:{rotation:-6.2547,x:-113.3,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-2.0506,x:-112.2,y:87.45,regX:25.9}},{t:this.ikNode_2,p:{rotation:-4.9528,x:-129.35,y:-64.05,regY:2.2}},{t:this.ikNode_1,p:{rotation:-5.0037,x:-113.35,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.538,x:-119.85,y:87.4,regX:25.9}},{t:this.ikNode_2,p:{rotation:-3.7147,x:-133.7,y:-64.5,regY:2.2}},{t:this.ikNode_1,p:{rotation:-3.7524,x:-113.3,y:-264.15,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-1.0256,x:-127.5,y:87.2,regX:25.9}},{t:this.ikNode_2,p:{rotation:-2.4758,x:-138.05,y:-65,regY:2.2}},{t:this.ikNode_1,p:{rotation:-2.5012,x:-113.35,y:-264.1,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:-0.5123,x:-135.15,y:86.75,regX:25.9}},{t:this.ikNode_2,p:{rotation:-1.2381,x:-142.35,y:-65.6,regY:2.2}},{t:this.ikNode_1,p:{rotation:-1.2503,x:-113.3,y:-264.15,regX:33.4}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-142.75,y:86.25,regX:25.9}},{t:this.ikNode_2,p:{rotation:0,x:-146.7,y:-66.3,regY:2.2}},{t:this.ikNode_1,p:{rotation:0,x:-113.3,y:-264.2,regX:33.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.1,-270.8,422.3,498.1);


// stage content:
(lib.B4B48骨架 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 斷春
	this.instance = new lib.CachedBmp_27();
	this.instance.setTransform(291.3,250.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 小燈籠
	this.instance_1 = new lib.小燈籠();
	this.instance_1.setTransform(372.75,151.2,0.4599,0.4663,-9.1991,0,0,-150.2,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 中燈籠
	this.instance_2 = new lib.中燈籠();
	this.instance_2.setTransform(121.55,189.05,0.6964,0.6386,-0.5203,0,0,-150.2,-20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 大燈籠
	this.instance_3 = new lib.大燈籠();
	this.instance_3.setTransform(263.95,243.55,1,1,0,0,0,-150.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 背景
	this.instance_4 = new lib.CachedBmp_28();
	this.instance_4.setTransform(0.7,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 底稿顏色
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape.setTransform(279.075,287.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(278.7,287.5,280.50000000000006,287.5);
// library properties:
lib.properties = {
	id: '7BCF5A7D3C5BBE489E1B5BE499473758',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/B4B48骨架_atlas_1.png?1639934453805", id:"B4B48骨架_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7BCF5A7D3C5BBE489E1B5BE499473758'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;