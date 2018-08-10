(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Slide2KasseiPadiPod = function() {
	this.initialize(img.Slide2KasseiPadiPod);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);


(lib.Slide3iPhone6Plus_Bezahlen = function() {
	this.initialize(img.Slide3iPhone6Plus_Bezahlen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,320);


(lib.Slide4MacbookiPhoneChefzugang_Collage_DE = function() {
	this.initialize(img.Slide4MacbookiPhoneChefzugang_Collage_DE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,200);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.txtsticker03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfBMIg+hkIgBAAIAABkIgfAAIAAiXIAhAAIA+BlIABAAIAAhlIAfAAIAACXg");
	this.shape.setTransform(135.1,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4BMIAAiXIBvAAIAAAcIhOAAIAAAhIBIAAIAAAZIhIAAIAAAlIBQAAIAAAcg");
	this.shape_1.setTransform(121.1,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSBMIgxiXIAiAAIAhBqIAihqIAiAAIgyCXg");
	this.shape_2.setTransform(107.5,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgBMIgCgIIgCgJIgBgKIAAgJQgCgMgGgGQgFgFgNgBIggAAIAAA8IghAAIAAiXIBQAAQALAAAIADQAIAEAGAFQAFAHAEAHQADAHAAAJQAAAHgCAFIgEALQgGAKgMAEIAAABQAGABAEADQAEAEACAFIAEALIACALIAAAIIABAKIACAKQABAFACADgAgfgGIAjAAQAMgBAGgFQAFgEAAgMQAAgLgFgFQgDgCgFgBQgEgCgGAAIgjAAg");
	this.shape_3.setTransform(93.9,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag4BMIAAiXIBvAAIAAAcIhOAAIAAAhIBIAAIAAAZIhIAAIAAAlIBQAAIAAAcg");
	this.shape_4.setTransform(79.7,22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfBMIg+hkIgBAAIAABkIgfAAIAAiXIAhAAIA+BlIABAAIAAhlIAfAAIAACXg");
	this.shape_5.setTransform(64.9,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323435").s().p("An3CUIAAknIPvAAIAAEng");
	this.shape_6.setTransform(100.5,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtsticker03, new cjs.Rectangle(50.1,7.4,104.9,31), null);


(lib.txtsticker02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBMIAAh7IgtAAIAAgcIB7AAIAAAcIguAAIAAB7g");
	this.shape.setTransform(96.3,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBMIAAiXIAhAAIAACXg");
	this.shape_1.setTransform(87,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5BMIAAiXIBwAAIAAAcIhOAAIAAAhIBIAAIAAAZIhIAAIAAAlIBQAAIAAAcg");
	this.shape_2.setTransform(77.7,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BMIAAgbIBQhgIhJAAIAAgcIB1AAIAAAbIhQBgIBTAAIAAAcg");
	this.shape_3.setTransform(64,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323435").s().p("AkuCUIAAknIJdAAIAAEng");
	this.shape_4.setTransform(80.5,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtsticker02, new cjs.Rectangle(50.1,7.4,100.6,31), null);


(lib.txtsticker01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCBMIAAiXIBCAAIAMABIAOAEIALAGIAKAIQAFAFADAFIAHANQAFAOAAATQAAAQgEAOIgGAMIgHALQgJALgNAFQgGADgHACQgIABgHABgAghAwIAeAAQAGAAAHgDQAGgCAGgFQAFgGADgJQAEgJAAgMQAAgKgDgKQgCgIgFgHQgFgGgJgEQgHgDgMgBIgYAAg");
	this.shape.setTransform(106.6,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1BMIAAiXIAiAAIAAB7IBIAAIAAAcg");
	this.shape_1.setTransform(93.1,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BMIAAiXIBvAAIAAAcIhOAAIAAAhIBIAAIAAAZIhIAAIAAAlIBQAAIAAAcg");
	this.shape_2.setTransform(80.1,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBJQgHgDgGgEIgLgJQgJgLgFgOQgFgPAAgRQAAgHABgHQABgJADgHQAFgPAJgKIALgKQAGgEAHgDQAOgGAQAAQAMAAALADQALAEAIAGQAJAIAGAJQAGAKABANIggAAQgBgGgDgFQgDgFgEgDQgJgHgMABQgKgBgIAFQgIAFgFAGQgFAIgCAJQgCAKAAAIQAAAKACAJQACAJAFAHQAFAIAIAEQAIAEAKAAQAIAAAHgCQAGgCAEgEQAKgIABgRIghAAIAAgXIA/AAIAABRIgVAAIgDgRIgKAJQgFAEgFADQgLAEgLAAQgQAAgOgGg");
	this.shape_3.setTransform(64.9,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323435").s().p("AlkCUIAAknILJAAIAAEng");
	this.shape_4.setTransform(85.8,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtsticker01, new cjs.Rectangle(50.1,7.4,100.6,31), null);


(lib.txthead01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323435").s().p("AgXBpQgNgBgKgGQgLgFgHgKQgHgKgCgPIAzAAQACAKAGADQAHAEALAAQAJAAAFgEQAGgCADgGQACgFABgGIABgNIAAgQIgBAAQgHALgLAHQgLAFgLABIgRgCQgHgBgHgDQgNgHgIgKQgIgLgFgNQgEgNAAgRQAAgPAFgOQAEgOAJgLQAJgKANgGQAMgHARAAQANAAAKAHQALAGAGAMIABAAIAAgUIAxAAIAACIIgCAXQgCAMgIALQgDAGgGAFIgOAIQgIAFgKABQgLACgOAAQgMAAgNgCgAgMhAQgGADgDAGQgEAFgBAIIgCAOIACAOQACAGADAFQAEAEAFADQAGAEAHgBQAIAAAGgCQAGgEADgEQAEgEACgHQACgHAAgHIgCgOQgCgIgDgFQgEgGgGgDQgFgDgJAAQgHAAgGADg");
	this.shape.setTransform(202.3,41.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323435").s().p("AguBPQgKgCgHgGQgHgGgFgIQgDgKAAgLQAAgNAEgJQAEgIAIgFQAGgFAKgDIATgFIAVgCIARgDQAHgCADgDQAEgDAAgHQAAgFgDgDIgFgEIgIgEIgJAAQgUAAgEATIgwAAQABgPAGgKQAHgLAKgFQALgHANgCQAMgDANAAQANAAAOADQANABAKAHQAKAFAGAKQAHALAAAQIAABDIAAAUQABALAFAJIg0AAIgCgHIgBgHQgKAKgNAEQgNAEgOABQgMAAgJgEgAAKAKIgQADQgJACgGAFQgGAEAAAJQAAAKAGAEQAGAEAJAAQASAAAGgLQAHgLgBgYQgFAEgJABg");
	this.shape_1.setTransform(185.6,39.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323435").s().p("AgbBrIAAilIhAAAIAAgwIC3AAIAAAwIhAAAIAAClg");
	this.shape_2.setTransform(168.1,36.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323435").s().p("AAaBQIAAhLIAAgPQAAgHgCgGQgCgGgFgEQgGgEgKAAQgGAAgGADQgFADgDAEIgFALIgCAMIAABUIgzAAIAAiaIAyAAIAAAVIAAAAQAEgGAFgFQAGgFAGgDIANgFIAOgCQAUAAALAGQALAHAGAJQAFAJACAKIACATIAABjg");
	this.shape_3.setTransform(141.5,39);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323435").s().p("AgfBNQgQgGgLgLIgKgLIgHgPQgHgPAAgTIACgQQACgJADgHQAHgQALgKQAMgLAPgGQAPgHAQAAQAVAAAQAIQAQAHAKAOQAKANAFARQAEAXAAANIhyAAQABAQAJAKQAEAEAHADQAGACAHAAQAJAAAJgEQAIgEADgJIAwAAQgEANgHAKQgIAKgKAGQgLAGgMADQgNAEgMAAQgSgBgQgFgAAggPQgBgNgIgKQgFgEgFgCQgFgDgHAAQgMAAgJAJQgIAIgDAPIA/AAIAAAAg");
	this.shape_4.setTransform(124,39.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#323435").s().p("AgpBmQgOgHgIgMQgJgMgEgQQgEgPAAgRQAAgPAEgNQAEgOAJgLQAIgLAMgHQAGgDAIgCIAPgCQAcAAAPAWIABAAIAAhLIAzAAIAADVIgwAAIAAgSIgBAAQgPAWgbAAQgSAAgNgHgAgMgMQgGAEgEAGQgDAFgCAHIgCAPIACAQQACAIADAHQAEAGAGAEQAGAEAIAAQAJAAAGgEQAGgEADgGQADgGACgIIABgPIgCgQQgBgIgEgFQgEgGgFgEQgGgDgIAAQgIAAgGADg");
	this.shape_5.setTransform(105.9,36.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323435").s().p("AgfBNQgQgGgLgLIgKgLIgHgPQgHgPAAgTIACgQQACgJADgHQAHgQALgKQAMgLAPgGQAPgHAQAAQAVAAAQAIQAQAHAKAOQAKANAFARQAEAXAAANIhyAAQABAQAJAKQAEAEAHADQAGACAHAAQAJAAAJgEQAIgEADgJIAwAAQgEANgHAKQgIAKgKAGQgLAGgMADQgNAEgMAAQgSgBgQgFgAAggPQgBgNgIgKQgFgEgFgCQgFgDgHAAQgMAAgJAJQgIAIgDAPIA/AAIAAAAg");
	this.shape_6.setTransform(88.8,39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#323435").s().p("AgmCFIAAgpIAKAAQAIgBAEgDQAFgCAAgIIAAiYIAyAAIAACbQAAAPgDAKQgDAKgHAGQgGAGgKADQgJACgNAAgAgLhdIAAgnIAyAAIAAAng");
	this.shape_7.setTransform(74.8,39);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#323435").s().p("AgfBNQgQgGgLgKIgKgMIgHgOQgHgQAAgTIACgRQACgIADgIQAHgOALgLQAMgLAPgGQAPgGAQAAQAVAAAQAHQAQAIAKANQAKANAFAQQAEAYAAAMIhyAAQABARAJAJQAEAFAHADQAGACAHAAQAJAAAJgEQAIgEADgJIAwAAQgEAOgHAJQgIAKgKAGQgLAHgMADQgNACgMAAQgSAAgQgFgAAggPQgBgNgIgJQgFgFgFgCQgFgCgHAAQgMgBgJAJQgIAJgDAOIA/AAIAAAAg");
	this.shape_8.setTransform(146.3,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#323435").s().p("Ag1BPIAAiaIAxAAIAAAbIABAAQAEgPANgIQAMgHARAAIAFAAIAGABIAAAuIgJgCIgKgBQgKAAgHADQgHADgFAFQgFAFgBAHQgCAHAAAGIAABNg");
	this.shape_9.setTransform(132.7,6.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#323435").s().p("AguBQQgKgDgHgGQgHgGgEgJQgFgIAAgMQABgNAEgIQAEgJAIgGQAHgEAJgDIATgEIAUgEIASgCQAHgCADgDQAEgDAAgHQAAgFgDgDIgFgEIgIgDIgJgBQgVAAgEAUIgvAAQAAgQAIgKQAGgKALgHQAKgFAMgDQAOgDAMABQAOgBANADQANABAKAHQAKAFAGAKQAHALgBAQIAABDIABAUQABAKAFAKIg0AAIgCgHIgBgIQgKALgOAEQgMAEgOAAQgLAAgKgCgAAKAJIgRAEQgIADgGAEQgGAEAAAKQAAAJAGAEQAGAEAJAAQASAAAGgLQAHgKgBgZQgFADgJABg");
	this.shape_10.setTransform(117.4,6.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#323435").s().p("AhQBqIAAjOIAxAAIAAASIABAAQAHgMALgFQAKgGANAAQASAAAOAHQANAHAIANQAJAMAEAPQAEAPAAARQAAAPgEANQgEAOgJALQgIAMgMAGIgNAFIgQACQgOAAgLgGQgLgFgHgLIgBAAIAABFgAgKhAQgFACgFAFQgFAFgCAIQgDAIAAAMQgBAUAHAMQADAGAGADQAGADAJAAQAHAAAHgEQAFgEAEgHQADgFACgIIABgQIgBgPQgBgHgEgGQgDgGgGgEQgGgEgIAAQgEAAgGACg");
	this.shape_11.setTransform(100.5,8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#323435").s().p("AgjBsQgQgFgNgJIgLgLQgGgFgDgIQgIgOAAgVIA3AAQACATAKAHQALAIASgBIALgBIALgDQAGgDACgEQADgFAAgFQABgIgGgEQgFgFgJgDIgTgGIgWgGIgXgHQgLgFgJgGQgIgHgGgLQgGgKAAgOQAAgSAIgNQAIgMANgIQANgIAPgDQAQgEANAAQARAAAPAFQAPADAMAJQAMAIAIANQAEAHACAHQACAJAAAIIg4AAQAAgHgEgFQgCgFgFgDQgFgDgHgBIgLgCIgJABIgJAEQgEABgDAEQgCADAAAGQAAAGAFAEQAFAEAJADIATAFIAXAGIAXAIQALAFAIAGQAJAHAGAKQAFALAAAOQAAAKgCAIQgBAJgEAHQgJAOgNAIQgNAJgRADQgQADgSAAQgRAAgSgDg");
	this.shape_12.setTransform(81.7,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txthead01, new cjs.Rectangle(69.7,-9.3,239.9,67), null);


(lib.orderbirdlogoonline01whitesvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orderbird-logo-online-01-white.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxtNaQjZg3jTheQgWgKi8heIFbgKQDBgGCMgRQFugrFCiYQill5kdkiQiOiShuhHIDMAUQDuAcCqAtQhLjOg+h8Qgdg6hNiAQCcAeDNBwQGWDgEOGkIBIiLQBGhxBfhEQEgjLHyDNQBKgUCkgfQCbgeAAADQAvgJAHAaQAGAZgkAPQk0B+imCaQhBA8hCBUIhzCaQjNEFjKClQjmC8kEBeQlPCAlpAAQkSAAkfhJgAlUFhQgCiTgljEQgji2g0ieQhPgWkcgmQCOCJCHDJQCRDXBDC+IAAAAg");
	this.shape.setTransform(177.2,93.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2CEQgYgHgVgXQgPgPgPgeQgMgkAAgVQAAgjAMgYQAPgeAPgPQAOgPAfgPQAbgJAbAAQAaAAAbAJQAWAHAXAXQAWAWAIAXQAOAXAAAkQAAAkgLAYQgQAfgOAOQgOAPgfAPQgNAGgOACIgcABQggAAgXgMgAgnhuQgMAGgYATQgOAOgKAZQgJAWAAAYQAAAbAJASQAKAbALAMQAGAIAJAGIAUANQAVAJAXAAQAaAAAQgJQAKgFAagSQANgNALgYQAJgYAAgbQAAgYgJgWQgKgagOgNQgQgRgUgIQgSgJgYAAQgXAAgRAJgAAmBVIgphGIgYAAIADBFIgbAAIAAieIA7AAQAeAAAMAMQAPAKAAAaQAAAWgMAIQgSAMgMgBIAtBGgAgVgIIApAAQAJAAACgDIAKgGQADgCAAgMQAAgKgDgDIgFgEIgFgCQgDgDgIAAIgpAAg");
	this.shape_1.setTransform(1261.3,222.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjmMSQhrg0hAhQQhGhYgjhuQgkhwAAiAQAAh9AkhvQAjhtBGhZQBLhZBgguQBqgwB8AAQCHAABgAwQBoAyBDBVQAVAbAkA8IAAq+IBUAAIAAQZQAACBgkBvQgkBvhFBXQhKBThhAxQhgAwiHAAQiGAAhggwgAjCkYQhXAtg5BKQg2BIghBlQgeBfAABtQAABuAeBfQAhBmA2BHQA4BJBYAvQBWAtBsAAQBuAABVgtQBZgvA3hJQA3hJAghkQAehfAAhuQAAhtgehfQgZhcg+hRQg4hJhYguQhVguhuABQhsgBhWAug");
	this.shape_2.setTransform(1177.2,154.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkQJUIAAyeIBXAAIgCEFIAFAAQAUhAAogrQAyg4A3ggQA1ghBRgXQBNgTBPABIAABWQhMgJhTAZQhZAWhOBPIg5BDQgcAngLAhQgOAegKA4QgGAkgGBOIAAKIg");
	this.shape_3.setTransform(1095.3,176.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrJPIAAydIBXAAIAASdg");
	this.shape_4.setTransform(1035.4,176.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjmMQQhsgzg/hRQhGhYgjhuQgkhwAAh/IAAwXIBUAAIAAK+QATgmAmgwQBIhWBjgxQBqgxB8AAQCHAABgAxQBnAxBEBWQBGBXAjBuQAkBvAAB7QAAB/gkBwQgoB+hBBIQhLBUhgAwQhgAxiHgBQiGABhggxgAjCkXQhXAug5BJQg2BIghBlQgeBfAABtQAABuAeBfQAaBcA9BRQA4BJBYAvQBWAtBsAAQBtAABWgtQBZgvA3hJQA3hHAghmQAehfAAhuQAAhtgehfQghhlg2hIQg5hJhXguQhWguhtABQhsgBhWAug");
	this.shape_5.setTransform(957.6,154.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlbJfIAAy9ID2AAIAAC0IAXgcQAfgiAsgcQCLhaDUAAIAAD2QghgDgvACQhfAEg+AbQglATgWARQgUAQgXAZQgxA9gWA+QgYBEAABvIAAIug");
	this.shape_6.setTransform(848.1,175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjpJGQhlgqhShXQhIhMgqh6Qgoh+AAh+QAAiBAohuQAqh0BIhVQBKhTBqg3QBvgzCAAAQCIAAB0A8QBtA5BNBjQBHBeAlCAQAfCBgNCAItrAAQABBEAUA3QASBAAqAyQAlAtA+AhQBBAeBOAAQB0AABGgwQBEgvAlhkID5AAQgYBjgwBLQguBIhNA5QhAAwhfAeQhaAbhgAAQiMAAhsgtgAh6mQQgzATgtAuQgmAngZA8QgXA6gEBBIJiADQgEg9gXg7QgWg4gmgqQgkgpg5gdQg1gbhDAAQg/AAg9AZg");
	this.shape_7.setTransform(740.7,177);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Aj+MVQhsgrhRhWQhNhQgoh2QgnhsAAiQQAAiLAnhwQAoh0BNhSQBShWBrgqQBsgxCSAAQCGAAB5AxQA4AZAoAcIAAoKID5AAIAAQWQAACMgnBwQgoB1hNBRQhSBWhrArQhuAwiRAAQiHAAh3gwgAiYiwQg/AkgqA9QgqA7gSBLQgVBHAABSQAABDAVBWQASBKAqA9QAqA8A/AjQBEAkBUAAQBaAAA/gkQBAgkApg7QArg/ARhIQARhFAEhUQAAhAgVhZQgRhJgrg9Qgpg8hAglQhEgkhVAAQhZAAg/Akg");
	this.shape_8.setTransform(608.7,155.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AlbJfIAAy9ID2AAIAADYIAWgiQAggpAsghQCLhsDUAAIAAD2QgigDgvACQheAEg+AbQglATgWARQgUAQgXAZQgxA9gWA+QgYBEAABvIAAIug");
	this.shape_9.setTransform(512.4,175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Aj+JDQhsgrhRhWQhMhQgqh2QgmhvAAiNQAAiJAmhyQAqh1BMhRQBRhWBsgrQB4gwCGAAQCSAABtAwQBqArBTBWQBMBRApB1QAnBwAACLQAACQgnBsQgpB1hMBRQhRBWhsArQhtAwiSAAQiRAAhtgwgAiYl/QhAAlgpA7QgrA+gRBJQgVBaAAA+QAABSAVBHQARBKArA9QAqA8A/AkQBFAkBTAAQBTAABFgkQA/gjAqg9QArg8AShLQAUhWAAhDQAAhRgUhHQgShLgrg8Qgpg8hAgkQg+gkhaAAQhUAAhEAkg");
	this.shape_10.setTransform(401.4,176.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1275.6,239.7);


(lib.img03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.Slide4MacbookiPhoneChefzugang_Collage_DE();
	this.instance.parent = this;
	this.instance.setTransform(91,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img03, new cjs.Rectangle(91,74,380,200), null);


(lib.img02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.Slide3iPhone6Plus_Bezahlen();
	this.instance.parent = this;
	this.instance.setTransform(143,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img02, new cjs.Rectangle(143,64,240,320), null);


(lib.img01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.Slide2KasseiPadiPod();
	this.instance.parent = this;
	this.instance.setTransform(65,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img01, new cjs.Rectangle(65,73,400,300), null);


(lib.ctamore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBLIAAghIAfAAIAAAhgAgHAeIgIg/IAAgpIAeAAIAAApIgIA/g");
	this.shape.setTransform(181.8,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVA4IAAg9IgBgLQgBgFgDgEQgDgGgLAAQgMAAgFAHQgCAEgCAGQgCAFABAJIAAA4IgeAAIAAhsIAcAAIAAAPIABAAQAGgJAIgEQAIgFAKAAQAMAAAIADQAHAEAFAFQAEAGACAJQACAIAAAKIAABCg");
	this.shape_1.setTransform(173,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVA1QgKgEgHgIQgHgHgEgLQgEgKAAgNQAAgLAEgLQAEgKAHgIQAIgHAKgFQAKgEALAAQAOAAALAFIAJAGQAEAEADAEQAHAJADAMQADAMgBALIhNAAQAAAHACAGQACAFADADQAHAHALAAQAJAAAHgFQAGgEACgFIAaAAQgGATgNAJQgNAIgTAAQgMAAgKgEgAAYgLQgCgLgFgGQgDgDgEgBQgEgCgFAAQgHAAgEADQgFACgDAEQgDADgBAEIgBAHIAvAAIAAAAg");
	this.shape_2.setTransform(161,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBIQgJgDgFgJIgBAAIAAANIgcAAIAAiUIAeAAIAAA2IAAAAQAGgIAJgFQAJgDAKAAQAIAAAIADQAIADAGAIQAHAGAEAMQAEAOAAAKQgCASgCAIQgEALgHAGQgGAIgIADQgIADgIABQgLAAgKgFgAgLgMQgFADgDAFQgDAEgCAGQgBAHAAAGIABAOQACAFADAFQADAFAFADQAFADAGAAQAGAAAFgDQAFgDADgFQADgFABgFIACgOQAAgGgCgHQgBgGgDgEQgDgFgFgDQgFgCgGAAQgGAAgFACg");
	this.shape_3.setTransform(149,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVA1QgKgEgHgIQgHgHgEgLQgEgKAAgNQAAgLAEgLQAEgKAHgIQAIgHAKgFQAKgEALAAQAOAAALAFIAJAGQAEAEADAEQAHAJADAMQADAMgBALIhNAAQAAAHACAGQACAFADADQAHAHALAAQAJAAAHgFQAGgEACgFIAaAAQgGATgNAJQgNAIgTAAQgMAAgKgEgAAYgLQgCgLgFgGQgDgDgEgBQgEgCgFAAQgHAAgEADQgFACgDAEQgDADgBAEIgBAHIAvAAIAAAAg");
	this.shape_4.setTransform(136.7,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBLIAAiVIAdAAIAACVg");
	this.shape_5.setTransform(128.2,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiA4IAAhsIAcAAIAAAUIABAAIAFgJIAHgHQAFgEAFgBIAMgCIAGABIAAAcIgFgBIgGAAQgIAAgFADQgHACgDAFQgCAFgCAGQgCAGABAHIAAAxg");
	this.shape_6.setTransform(122.3,19.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVA1QgKgEgHgIQgHgHgEgLQgEgKAAgNQAAgLAEgLQAEgKAHgIQAIgHAKgFQAKgEALAAQAOAAALAFIAJAGQAEAEADAEQAHAJADAMQADAMgBALIhNAAQAAAHACAGQACAFADADQAHAHALAAQAJAAAHgFQAGgEACgFIAaAAQgGATgNAJQgNAIgTAAQgMAAgKgEgAAYgLQgCgLgFgGQgDgDgEgBQgEgCgFAAQgHAAgEADQgFACgDAEQgDADgBAEIgBAHIAvAAIAAAAg");
	this.shape_7.setTransform(111.9,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBLQgGgBgEgDQgJgFgGgHQgGgJgEgKQgCgLAAgLQAAgLACgJQAEgKAGgIQAGgHAJgFIAJgEIAMgBQAIAAAJAEQAJAEAFAIIAAAAIAAg2IAeAAIAACUIgcAAIAAgNIgBAAQgCAEgEADQgDADgFACQgIAFgKAAQgGgBgFgBgAgLgLQgFADgDAEQgDAEgBAGIgCANQAAAGACAHQABAGAEAFQADAFAFADQAFADAGAAQAHAAAFgDQAFgDADgFQADgFABgGIABgNIgBgNQgBgGgDgEQgDgEgFgDQgFgDgHAAQgHAAgFADg");
	this.shape_8.setTransform(94,17.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiA4IAAhsIAcAAIAAAUIABAAIAFgJIAHgHQAFgEAFgBIAMgCIAGABIAAAcIgFgBIgGAAQgIAAgFADQgHACgDAFQgCAFgCAGQgCAGABAHIAAAxg");
	this.shape_9.setTransform(84.6,19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOBLIAAhrIAdAAIAABrgAgOgyIAAgYIAdAAIAAAYg");
	this.shape_10.setTransform(77.5,17.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLBIQgJgDgFgJIgBAAIAAANIgcAAIAAiUIAeAAIAAA2IAAAAQAGgIAJgFQAJgDAKAAQAIAAAIADQAIADAGAIQAHAGAEAMQAEAOAAAKQgCASgCAIQgEALgHAGQgGAIgIADQgIADgIABQgLAAgKgFgAgLgMQgFADgDAFQgDAEgCAGQgBAHAAAGIABAOQACAFADAFQADAFAFADQAFADAGAAQAGAAAFgDQAFgDADgFQADgFABgFIACgOQAAgGgCgHQgBgGgDgEQgDgFgFgDQgFgCgGAAQgGAAgFACg");
	this.shape_11.setTransform(68.9,17.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiA4IAAhsIAcAAIAAAUIABAAIAFgJIAHgHQAFgEAGgBIALgCIAGABIAAAcIgFgBIgGAAQgIAAgFADQgHACgDAFQgCAFgCAGQgBAGAAAHIAAAxg");
	this.shape_12.setTransform(59.1,19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA1QgKgEgHgIQgHgHgEgLQgEgKAAgNQAAgLAEgLQAEgKAHgIQAIgHAKgFQAKgEALAAQAOAAALAFIAJAGQAEAEADAEQAHAJADAMQADAMgBALIhNAAQAAAHACAGQACAFADADQAHAHALAAQAJAAAHgFQAGgEACgFIAaAAQgGATgNAJQgNAIgTAAQgMAAgKgEgAAYgLQgCgLgFgGQgDgDgEgBQgEgCgFAAQgHAAgEADQgFACgDAEQgDADgBAEIgBAHIAvAAIAAAAg");
	this.shape_13.setTransform(48.6,19.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBLQgGgBgEgDQgJgFgGgHQgGgJgEgKQgCgLAAgLQAAgLACgJQAEgKAGgIQAGgHAJgFIAJgEIAMgBQAIAAAJAEQAJAEAFAIIAAAAIAAg2IAeAAIAACUIgcAAIAAgNIgBAAQgCAEgEADQgDADgFACQgIAFgKAAQgGgBgFgBgAgLgLQgFADgDAEQgDAEgBAGIgCANQAAAGACAHQABAGAEAFQADAFAFADQAFADAGAAQAHAAAFgDQAFgDADgFQADgFABgGIABgNIgBgNQgBgGgDgEQgDgEgFgDQgFgDgHAAQgHAAgFADg");
	this.shape_14.setTransform(36.3,17.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiA4IAAhsIAcAAIAAAUIAAAAIAGgJIAIgHQAEgEAGgBIAKgCIAHABIAAAcIgFgBIgGAAQgIAAgGADQgFACgEAFQgDAFgBAGQgBAGgBAHIAAAxg");
	this.shape_15.setTransform(26.9,19.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWA1QgLgEgHgHQgHgIgEgKQgEgLAAgNQAAgMAEgLQAEgKAHgIQAHgHALgEQAKgEAMAAQAIAAAPAEQAKAEAIAHQAHAIAEAKQAEAPAAAIQgBARgDAHQgEAKgHAIQgIAHgKAEQgPAEgIAAQgMAAgKgEgAgMgfQgFADgDAFQgDAFgBAGIgBAMIABANQABAGADAFQADAFAFADQAFADAHAAQAHAAAGgDQAFgDADgFQADgFABgGIABgNIgBgMQgBgGgDgFQgDgFgFgDQgGgDgHAAQgHAAgFADg");
	this.shape_16.setTransform(16.1,19.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FECC00").s().p("AvMCuIAAlbIeZAAIAAFbg");
	this.shape_17.setTransform(97.3,17.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2B82C").s().p("AvMCuIAAlbIeZAAIAAFbg");
	this.shape_18.setTransform(97.3,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_18},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194.6,34.9);


(lib.claim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAyIAAgPIAPAAIAAAPgAgCAYIgEgqIAAgfIAMAAIAAAfIgDAqg");
	this.shape.setTransform(210.3,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAlIgHgCQgGgDgEgFQgFgFgCgHQgCgHgBgIQABgHACgHQACgHAFgFQAEgFAHgDQAGgDAHAAIAJABIAHADQAGAEAEAGQADAHACAHIABANIg1AAIABAJQACAEACADQADAEAFABQAEACAFAAQAHAAAFgDIAEgEIADgHIALAAIgDALQgDAEgEAEQgEADgGABQgFACgFAAgAAVgGQgBgEgBgEIgFgGQgDgDgDgCIgIgBQgDAAgEABQgEACgDADQgDACgBAEIgCAIIApAAIAAAAg");
	this.shape_1.setTransform(205,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAyIAAhIIALAAIAABIgAgFgiIAAgPIALAAIAAAPg");
	this.shape_2.setTransform(199.7,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnAlIAAguIgBgHIgCgFIgEgEIgHgBQgJAAgFAGQgDACgBADQgBADAAAFIAAAsIgLAAIAAguIgBgHIgCgFIgEgEIgHgBQgFAAgEACQgDADgCACIgEAHIgBAFIAAAsIgMAAIAAhIIALAAIAAALIABAAQAEgGAGgDQAFgDAIAAQAHAAAFADIAEAEIADAFIAEgFIAGgEQAGgDAHAAIAKABIAHAEQADACACAEQACAEAAAGIAAA0g");
	this.shape_3.setTransform(192.3,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAlIgHgCQgHgDgEgFQgFgFgCgHQgCgHAAgIQAAgHACgHQACgHAFgFQAEgFAHgDIAHgCIAHgBQAIAAAHADQAHADAEAFQAFAFACAHQACAHAAAHQAAAIgCAHQgCAHgFAFQgEAFgHADQgHADgIAAgAgIgYQgEABgDAEQgDADgCAFQgCAGAAAFQAAAHACAFQACAFADADQADAEAEACQAEABAEAAQAFAAAEgBQAEgCADgEQADgDACgFQACgFAAgHIgCgLQgCgFgDgDQgDgEgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_4.setTransform(182.4,7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASAlIAAgwIgBgGIgDgEIgFgEIgGgBQgEABgEABIgHAFIgEAHIgBAJIAAAoIgMAAIAAhIIALAAIAAAMIABAAIADgFIAGgFQAGgDAHAAQAHAAAFACQAFACADAEQACADABAFQACAFAAAGIAAAug");
	this.shape_5.setTransform(174.7,7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAlIgHgCQgHgDgEgFQgFgFgCgHQgCgHAAgIQAAgHACgHQACgHAFgFQAEgFAHgDIAHgCIAHgBQAIAAAHADQAHADAEAFQAFAFACAHQACAHAAAHQAAAIgCAHQgCAHgFAFQgEAFgHADQgHADgIAAgAgIgYQgEABgDAEQgDADgCAFQgCAGAAAFQAAAHACAFQACAFADADQADAEAEACQAEABAEAAQAFAAAEgBQAEgCADgEQADgDACgFQACgFAAgHIgCgLQgCgFgDgDQgDgEgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_6.setTransform(166.9,7.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAlIAAhHIALAAIAAAPIAGgIIAEgFQAGgEAKAAIAAANQgHAAgFACQgFACgCAEQgEADgBAGQgBAFAAAGIAAAgg");
	this.shape_7.setTransform(161.1,7.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALAvIgIgBQgDAAgCgCQgCgBgBgEIgBgIIAAgtIgNAAIAAgLIANAAIAAgVIALAAIAAAVIAPAAIAAALIgPAAIAAAsIAAAEIABABIADABIAFAAIAGAAIAAALg");
	this.shape_8.setTransform(156.1,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAlQgFgCgEgDQgFgCgCgFQgDgFAAgHIAMAAQAAAFACACIAEAEQADACADABIAGAAIAGAAIAGgCQADgBABgCQACgCAAgDQAAgEgCgCIgFgEIgIgCIgIgCIgIgCIgIgDQgDgCgCgEQgCgDAAgFQAAgGACgEQADgEADgCIAJgEIAKgBIAKABQAFABAEADQAEACACAFQADAEAAAHIgMAAQAAgEgBgCIgEgEIgGgCIgEAAIgGAAIgFACIgDACQgBABAAAAQAAABAAAAQgBABAAABQAAAAAAABQAAADACACIAGAEIAIACIAHACIAJACQAEABADACIAGAGQACADAAAFQAAAHgDAEQgDAEgEADQgFADgFABIgLABIgLgBg");
	this.shape_9.setTransform(150.6,7.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASAjQgDgCABgGIgGAFIgGADQgFADgIAAIgJgBQgFgBgDgDQgDgCgCgEQgCgEAAgFQAAgGACgEQACgEADgDQAEgBAFgBIAIgDIAJgBIAIgBQADgBACgCQACgCAAgDQAAgEgBgDIgFgDIgEgCIgFAAQgIAAgFADQgFACAAAIIgMAAQAAgGADgFQACgFAFgCQAEgDAFgCIALgBIAJABIAJADQAEACADAEQABAEABAGIAAAkIAAAGQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAEAAIAAAJQgDACgFAAQgFAAgDgDgAAKABIgFABIgFABIgGABIgFABIgFACIgDAEQgBACAAAEQAAADABACIADADIAFACIAEAAQAHAAACgBQAFgCACgCQADgDACgDIABgFIAAgLIgFABg");
	this.shape_10.setTransform(143.6,7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIAzQgFgBgEgCIgIgEIgHgHQgGgHgEgJIgCgJIgBgKIABgJIACgLIAEgJIAFgIQAGgHAJgFQAJgEALAAQAIAAAHABQAHACAGAFQAGAEAEAGQADAGACAJIgNAAQgBgGgDgEQgDgEgEgDIgJgEIgKgBIgIABIgHADIgGADIgEAGQgFAGgBAHQgCAIAAAIQAAAHACAIQACAGAEAGQAFAGAGADQAHADAHAAQAIAAAGgDQAGgCAEgFQAEgDACgHQACgFAAgHIggAAIAAgLIAsAAIAAA0IgJAAIgDgMIgHAHIgIAEIgIACIgJACIgKgCg");
	this.shape_11.setTransform(134.4,6.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAlIgHgCQgGgDgFgFQgEgFgCgHQgCgHgBgIQABgHACgHQACgHAFgFQAFgFAGgDQAGgDAGAAIAJABIAIADQAGAEAEAGQAEAHABAHIACANIg2AAIABAJQABAEADADQADAEAEABQAFACAEAAQAIAAAFgDIAEgEIACgHIANAAIgFALQgCAEgEAEQgEADgGABQgEACgHAAgAAUgGQABgEgCgEIgEgGQgDgDgEgCIgIgBQgEAAgEABQgDACgDADQgDACgBAEIgCAIIAoAAIAAAAg");
	this.shape_12.setTransform(121.9,7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASAlIAAgwIgBgGIgDgEIgEgEIgHgBQgEABgEABIgHAFIgEAHIgBAJIAAAoIgMAAIAAhIIALAAIAAAMIAAAAIAFgFIAFgFQAGgDAHAAQAHAAAFACQAEACADAEQADADACAFQABAFAAAGIAAAug");
	this.shape_13.setTransform(114.3,7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAyIAAhIIALAAIAABIgAgFgiIAAgPIALAAIAAAPg");
	this.shape_14.setTransform(109,6.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGAlIgHgCQgGgDgEgFQgFgFgCgHQgCgHAAgIQAAgHACgHQADgHAEgFQAFgFAGgDQAGgDAGAAIAJABIAHADQAHAEAEAGQADAHACAHIABANIg1AAIABAJQABAEAEADQACAEAEABQAFACAFAAQAHAAAFgDIAEgEIADgHIALAAIgDALQgDAEgEAEQgEADgFABQgGACgFAAgAAVgGQAAgEgCgEIgFgGQgCgDgEgCIgIgBQgDAAgFABQgDACgDADQgCACgCAEIgCAIIApAAIAAAAg");
	this.shape_15.setTransform(103.9,7.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoAyIAAhjIAiAAQAKAAAKADQAIADAHAGQAGAFADAJQADAKAAALQAAAMgDAKIgDAJIgFAIQgGAGgJAEQgJADgMAAgAgbAnIAWAAIAFgBIAHgBQAEgBAEgDQAEgDACgEQADgFACgGQACgHAAgIQAAgJgCgGQgBgIgFgEQgEgGgGgCIgHgCIgIgBIgWAAg");
	this.shape_16.setTransform(95.5,6.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_17.setTransform(85.1,6.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGAlIgHgCQgGgDgFgFQgEgFgCgHQgCgHgBgIQABgHACgHQACgHAFgFQAEgFAHgDQAGgDAHAAIAJABIAHADQAGAEAEAGQAEAHABAHIACANIg2AAIABAJQABAEADADQADAEAFABQAEACAEAAQAIAAAFgDIAEgEIACgHIAMAAIgEALQgCAEgEAEQgEADgGABQgFACgGAAgAAUgGQABgEgCgEIgFgGQgDgDgDgCIgIgBQgEAAgDABQgEACgDADQgDACgBAEIgCAIIAoAAIAAAAg");
	this.shape_18.setTransform(80,7.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKAzIgJgEQgFgDgCgEQgDgEAAgGIAMAAQAAAEABACQACACADABIAGADIAFAAQAGAAAEgCQAEgCADgEQADgDABgFIABgLIAAgFIgEAGIgGAEIgGACIgGABQgIAAgGgDQgGgDgEgFQgEgFgCgGQgCgGAAgIIABgNQACgGAEgGQAEgGAGgDQAHgEAIAAQAHAAAGADQAGADADAGIAAgKIALAAIAABBQAAASgIAJQgEAEgGACQgHADgIAAIgKgBgAgIgmQgEACgDAEQgCADgBAFQgCAFAAAFIABAKQABAEADAEQACAEAEACQAEADAFAAQAGAAAEgDQAEgCADgEQACgEABgEIABgKIgBgKQgBgEgCgEQgDgEgEgCQgEgCgFAAQgFAAgEACg");
	this.shape_19.setTransform(72,9.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAwQgFgCgCgDQgDgDgCgFIgBgLIAAgvIAMAAIAAAwIABAGIACAFQAFAEAGAAQAFAAAEgCQAEgBACgDQADgEABgEQACgEAAgFIAAgoIAMAAIAABIIgLAAIAAgMQgFAHgFADQgHADgGAAQgHAAgFgCgAAGgjIAAgOIANAAIAAAOgAgTgjIAAgOIANAAIAAAOg");
	this.shape_20.setTransform(64.5,6.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_21.setTransform(59.1,6.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGAzIAAg9IgNAAIAAgLIANAAIAAgKIABgIQABgEACgCQACgDAEAAIAJgBIADAAIAEABIAAAKIgEgBIgCAAQgFAAgDACQgBACAAAEIAAAKIANAAIAAALIgNAAIAAA9g");
	this.shape_22.setTransform(55.7,6.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGAlIgHgCQgGgDgFgFQgEgFgCgHQgCgHgBgIQAAgHADgHQADgHAEgFQAFgFAGgDQAGgDAGAAIAJABIAIADQAGAEAEAGQAEAHABAHIACANIg2AAIABAJQABAEADADQADAEAEABQAFACAEAAQAIAAAFgDIAEgEIACgHIANAAIgFALQgCAEgEAEQgEADgGABQgEACgHAAgAAUgGQAAgEgBgEIgEgGQgEgDgDgCIgIgBQgEAAgEABQgDACgDADQgCACgCAEIgCAIIAoAAIAAAAg");
	this.shape_23.setTransform(50,7.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgmAyIAAhjIAkAAIAGAAIAHAAIAHABIAFADQAFADAEAFQADAFAAAIIgBAHIgDAGQgEAGgHADQAFABADACIAGAEQAFAHAAAJQAAAGgCAFQgCAFgDAEQgEAEgGADQgGACgHAAgAgZAnIAgAAQAJAAAFgFQADgCABgDQABgEAAgEQAAgFgCgEIgFgEIgGgDIgJgBIgdAAgAgZgGIAaAAQALAAAFgEIAEgFIABgHQAAgFgCgEQgBgDgDgBQgDgCgEgBIgIAAIgaAAg");
	this.shape_24.setTransform(41.7,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.claim, new cjs.Rectangle(34,-0.5,180,18), null);


(lib.bgyellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECC00").s().p("AmIHCIAAuDIMRAAIAAODg");
	this.shape.setTransform(21,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgyellow, new cjs.Rectangle(-18.3,0,78.7,90), null);


(lib.logosinglebird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.orderbirdlogoonline01whitesvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(50.6,19.9,0.098,0.098,0,0,0,637.6,119.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logosinglebird, new cjs.Rectangle(-12.2,8.1,125.7,23.6), null);


(lib.mcmain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_322 = function() {
		if(!this.alreadyExecuted){
		
		this.alreadyExecuted=true;
		
		this.loopNum=1;
		
		} else {
		
		this.loopNum++;
		
		if(this.loopNum==3){
		
		this.stop();
		
		}
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(322).call(this.frame_322).wait(1));

	// cta
	this.instance = new lib.ctamore();
	this.instance.parent = this;
	this.instance.setTransform(860.1,47.2,1,1,0,0,0,97.3,17.4);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.ctamore(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(232).to({_off:false},0).wait(1).to({x:819.3,alpha:0.142},0).wait(1).to({x:772,alpha:0.308},0).wait(1).to({x:738.1,alpha:0.426},0).wait(1).to({x:711.9,alpha:0.518},0).wait(1).to({x:691.1,alpha:0.591},0).wait(1).to({x:673.7,alpha:0.651},0).wait(1).to({x:658.3,alpha:0.705},0).wait(1).to({x:643.9,alpha:0.756},0).wait(1).to({x:629.3,alpha:0.807},0).wait(1).to({x:613.5,alpha:0.862},0).wait(1).to({x:595.5,alpha:0.925},0).wait(1).to({x:574,alpha:1},0).wait(79));

	// claim
	this.instance_1 = new lib.claim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(565.7,57,1,1,0,0,0,90,7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(232).to({_off:false},0).wait(1).to({regX:124.4,regY:7.8,x:567.4,y:57.8,alpha:0.125},0).wait(1).to({x:524.8,alpha:0.289},0).wait(1).to({x:491.3,alpha:0.417},0).wait(1).to({x:466.8,alpha:0.512},0).wait(1).to({x:446.4,alpha:0.59},0).wait(1).to({x:428.9,alpha:0.657},0).wait(1).to({x:413.4,alpha:0.716},0).wait(1).to({x:399,alpha:0.771},0).wait(1).to({x:385.1,alpha:0.825},0).wait(1).to({x:366.2,alpha:0.897},0).wait(1).to({x:345.3,alpha:0.978},0).wait(1).to({regX:90,regY:7,x:305.1,y:57,alpha:1},0).wait(79));

	// logo
	this.instance_2 = new lib.orderbirdlogoonline01whitesvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(332.6,10.6,1,1,0,0,0,637.8,119.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(226).to({_off:false},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:303.9,y:15.3,alpha:0.144},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:262.9,y:22.1,alpha:0.349},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:235.3,y:26.6,alpha:0.488},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:215.7,y:29.8,alpha:0.586},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:200.8,y:32.2,alpha:0.66},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:189.2,y:34.2,alpha:0.719},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:179.3,y:35.8,alpha:0.768},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:170.1,y:37.3,alpha:0.814},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:160.3,y:38.8,alpha:0.863},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:148.5,y:40.8,alpha:0.922},0).wait(1).to({regY:120,scaleX:0.16,scaleY:0.16,x:133,y:43.3,alpha:1},0).wait(86));

	// logo-single-bird
	this.instance_3 = new lib.logosinglebird();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.7,27.6,1,1,0,0,0,15,7.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:44.3,alpha:1},5).wait(212).to({scaleX:0.35,scaleY:0.35,x:42.5,y:31.3,alpha:0},8).wait(98));

	// img-3
	this.instance_4 = new lib.img03();
	this.instance_4.parent = this;
	this.instance_4.setTransform(490.1,49.8,0.9,0.9,0,0,0,227.5,189);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(164).to({_off:false},0).to({regX:227.6,regY:189.2,scaleX:0.42,scaleY:0.42,x:545.5,y:63.7,alpha:1},6).wait(1).to({regX:281,regY:174,scaleX:0.45,scaleY:0.45,x:563.9,y:54.6},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:561.3,y:52.6},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:559.5,y:51.2},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:558,y:50},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:556.5,y:48.9},0).wait(1).to({regX:227.8,regY:189.2,scaleX:0.53,scaleY:0.53,x:526.3,y:55.5},0).wait(41).to({x:806,alpha:0},8).wait(98));

	// txt-3
	this.instance_5 = new lib.txtsticker03();
	this.instance_5.parent = this;
	this.instance_5.setTransform(369.3,44.2,0.936,0.936,0,0,0,68.8,10.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(165).to({_off:false},0).wait(1).to({regX:100.5,regY:22.2,x:398.9,y:52.2,alpha:0.312},0).wait(1).to({y:51,alpha:0.441},0).wait(1).to({y:50.1,alpha:0.535},0).wait(1).to({y:49.3,alpha:0.621},0).wait(1).to({y:48.5,alpha:0.703},0).wait(1).to({y:47.7,alpha:0.789},0).wait(1).to({y:46.8,alpha:0.886},0).wait(1).to({regX:68.8,regY:10.6,x:369.3,y:34.9,alpha:1},0).wait(44).to({regX:100.5,regY:22.2,x:350.4,y:45.8,alpha:0.875},0).wait(1).to({x:301.8,alpha:0.75},0).wait(1).to({x:253.3,alpha:0.625},0).wait(1).to({x:204.8,alpha:0.5},0).wait(1).to({x:156.2,alpha:0.375},0).wait(1).to({x:107.7,alpha:0.25},0).wait(1).to({x:59.2,alpha:0.125},0).wait(1).to({regX:68.7,regY:10.6,x:-18.9,y:34.9,alpha:0},0).wait(99));

	// txt-3
	this.instance_6 = new lib.txthead01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(224.8,60.9,0.842,0.842,0,0,0,81.2,27.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(161).to({_off:false},0).wait(1).to({regX:140.6,regY:22.4,x:274.9,y:54.5,alpha:0.27},0).wait(1).to({y:53,alpha:0.453},0).wait(1).to({y:52,alpha:0.575},0).wait(1).to({y:51.2,alpha:0.665},0).wait(1).to({y:50.6,alpha:0.738},0).wait(1).to({y:50,alpha:0.81},0).wait(1).to({y:49.3,alpha:0.893},0).wait(1).to({regX:81.2,regY:27.2,x:224.8,y:52.5,alpha:1},0).wait(48).to({regX:140.6,regY:22.4,x:228.5,y:48.4,alpha:0.875},0).wait(1).to({x:182.1,alpha:0.75},0).wait(1).to({x:135.7,alpha:0.625},0).wait(1).to({x:89.3,alpha:0.5},0).wait(1).to({x:43,alpha:0.375},0).wait(1).to({x:-3.4,alpha:0.25},0).wait(1).to({x:-49.8,alpha:0.125},0).wait(1).to({regX:80.9,regY:27.2,x:-146.3,y:52.5,alpha:0},0).wait(99));

	// img-2
	this.instance_7 = new lib.img02();
	this.instance_7.parent = this;
	this.instance_7.setTransform(524.9,36.7,0.893,0.893,0,0,0,227.6,189);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82).to({_off:false},0).to({regX:227.8,regY:189.3,scaleX:0.41,scaleY:0.41,x:535.2,y:72.3,alpha:1},6).wait(1).to({regX:263,regY:224,scaleX:0.44,scaleY:0.44,x:548.8,y:86.1},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:548.2,y:85.8},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:547.8,y:85.5},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:547.5,y:85.3},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:547.1,y:85.1},0).wait(1).to({regX:227.9,regY:189,scaleX:0.53,scaleY:0.53,x:528.1,y:66.6},0).wait(41).to({regX:228,x:825.1,alpha:0},8).wait(180));

	// txt-2
	this.instance_8 = new lib.txtsticker02();
	this.instance_8.parent = this;
	this.instance_8.setTransform(349.3,44.2,0.936,0.936,0,0,0,68.8,10.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(83).to({_off:false},0).wait(1).to({regX:80.5,regY:22.2,x:360.2,y:52.2,alpha:0.312},0).wait(1).to({y:51,alpha:0.441},0).wait(1).to({y:50.1,alpha:0.535},0).wait(1).to({y:49.3,alpha:0.621},0).wait(1).to({y:48.5,alpha:0.703},0).wait(1).to({y:47.7,alpha:0.789},0).wait(1).to({y:46.8,alpha:0.886},0).wait(1).to({regX:68.8,regY:10.6,x:349.3,y:34.9,alpha:1},0).wait(44).to({regX:80.5,regY:22.2,x:311.7,y:45.8,alpha:0.875},0).wait(1).to({x:263.1,alpha:0.75},0).wait(1).to({x:214.6,alpha:0.625},0).wait(1).to({x:166.1,alpha:0.5},0).wait(1).to({x:117.5,alpha:0.375},0).wait(1).to({x:69.1,alpha:0.25},0).wait(1).to({x:20.5,alpha:0.125},0).wait(1).to({regX:68.7,regY:10.6,x:-38.9,y:34.9,alpha:0},0).wait(181));

	// txt-2
	this.instance_9 = new lib.txthead01();
	this.instance_9.parent = this;
	this.instance_9.setTransform(204.8,60.9,0.842,0.842,0,0,0,81.2,27.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(79).to({_off:false},0).wait(1).to({regX:140.6,regY:22.4,x:254.9,y:54.5,alpha:0.27},0).wait(1).to({y:53,alpha:0.453},0).wait(1).to({y:52,alpha:0.575},0).wait(1).to({y:51.2,alpha:0.665},0).wait(1).to({y:50.6,alpha:0.738},0).wait(1).to({y:50,alpha:0.81},0).wait(1).to({y:49.3,alpha:0.893},0).wait(1).to({regX:81.2,regY:27.2,x:204.8,y:52.5,alpha:1},0).wait(48).to({regX:140.6,regY:22.4,x:208.5,y:48.4,alpha:0.875},0).wait(1).to({x:162.1,alpha:0.75},0).wait(1).to({x:115.7,alpha:0.625},0).wait(1).to({x:69.3,alpha:0.5},0).wait(1).to({x:23,alpha:0.375},0).wait(1).to({x:-23.4,alpha:0.25},0).wait(1).to({x:-69.8,alpha:0.125},0).wait(1).to({regX:80.9,regY:27.2,x:-166.3,y:52.5,alpha:0},0).wait(181));

	// img-1
	this.instance_10 = new lib.img01();
	this.instance_10.parent = this;
	this.instance_10.setTransform(554.6,27.2,0.806,0.806,0,0,0,227.7,188.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({regX:227.8,regY:189.2,scaleX:0.31,scaleY:0.31,x:534.7,y:64.2,alpha:1},6).wait(1).to({regX:265,regY:223,scaleX:0.36,scaleY:0.36,x:547.5,y:74.7},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:548.4,y:74.6},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:549},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:549.5},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:550.1},0).wait(1).to({regX:228.2,regY:188.8,scaleX:0.48,scaleY:0.48,x:533.1,y:58.4},0).wait(42).to({regX:265,regY:223,x:591.3,y:74.7,alpha:0.875},0).wait(1).to({x:632,alpha:0.75},0).wait(1).to({x:672.7,alpha:0.625},0).wait(1).to({x:713.5,alpha:0.5},0).wait(1).to({x:754.2,alpha:0.375},0).wait(1).to({x:794.9,alpha:0.25},0).wait(1).to({x:835.6,alpha:0.125},0).wait(1).to({regX:228,regY:188.8,x:858.8,y:58.4,alpha:0},0).wait(256));

	// txt-1
	this.instance_11 = new lib.txtsticker01();
	this.instance_11.parent = this;
	this.instance_11.setTransform(349.3,44.2,0.936,0.936,0,0,0,68.8,10.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(8).to({_off:false},0).wait(1).to({regX:85.8,regY:22.2,x:365.2,y:52.2,alpha:0.312},0).wait(1).to({y:51,alpha:0.441},0).wait(1).to({y:50.1,alpha:0.535},0).wait(1).to({y:49.3,alpha:0.621},0).wait(1).to({y:48.5,alpha:0.703},0).wait(1).to({y:47.7,alpha:0.789},0).wait(1).to({y:46.8,alpha:0.886},0).wait(1).to({regX:68.8,regY:10.6,x:349.3,y:34.9,alpha:1},0).wait(44).to({regX:85.8,regY:22.2,x:316.6,y:45.8,alpha:0.875},0).wait(1).to({x:268.1,alpha:0.75},0).wait(1).to({x:219.6,alpha:0.625},0).wait(1).to({x:171,alpha:0.5},0).wait(1).to({x:122.5,alpha:0.375},0).wait(1).to({x:74,alpha:0.25},0).wait(1).to({x:25.5,alpha:0.125},0).wait(1).to({regX:68.7,regY:10.6,x:-38.9,y:34.9,alpha:0},0).wait(256));

	// txt-1
	this.instance_12 = new lib.txthead01();
	this.instance_12.parent = this;
	this.instance_12.setTransform(204.8,60.9,0.842,0.842,0,0,0,81.2,27.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).wait(1).to({regX:140.6,regY:22.4,x:254.9,y:54.5,alpha:0.27},0).wait(1).to({y:53,alpha:0.453},0).wait(1).to({y:52,alpha:0.575},0).wait(1).to({y:51.2,alpha:0.665},0).wait(1).to({y:50.6,alpha:0.738},0).wait(1).to({y:50,alpha:0.81},0).wait(1).to({y:49.3,alpha:0.893},0).wait(1).to({regX:81.2,regY:27.2,x:204.8,y:52.5,alpha:1},0).wait(48).to({regX:140.6,regY:22.4,x:208.5,y:48.4,alpha:0.875},0).wait(1).to({x:162.1,alpha:0.75},0).wait(1).to({x:115.7,alpha:0.625},0).wait(1).to({x:69.3,alpha:0.5},0).wait(1).to({x:23,alpha:0.375},0).wait(1).to({x:-23.4,alpha:0.25},0).wait(1).to({x:-69.8,alpha:0.125},0).wait(1).to({regX:80.9,regY:27.2,x:-166.3,y:52.5,alpha:0},0).wait(256));

	// bg-yellow
	this.instance_13 = new lib.bgyellow();
	this.instance_13.parent = this;
	this.instance_13.setTransform(804.1,125.1,1,1,0,0,0,50,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:21,regY:45,scaleX:1.46,x:730.2,y:45.1},0).wait(1).to({scaleX:1.72,x:705.8},0).wait(1).to({scaleX:1.85,x:693.1},0).wait(1).to({scaleX:1.96,x:682.5},0).wait(1).to({scaleX:2.06,x:672.4},0).wait(1).to({scaleX:2.17,x:661.8},0).wait(1).to({scaleX:2.29,x:649.8},0).wait(1).to({regX:50.1,regY:125,scaleX:2.45,x:706,y:125.1},0).wait(52).to({regX:21,regY:45,scaleX:4.09,x:569.8,y:45.1},0).wait(1).to({scaleX:5.48,x:514.5},0).wait(1).to({scaleX:6.12,x:489.3},0).wait(1).to({scaleX:6.37,x:479.5},0).wait(1).to({scaleX:6.51,x:473.7},0).wait(1).to({scaleX:6.76,x:464},0).wait(1).to({scaleX:7.68,x:427.5},0).wait(1).to({regX:50.1,regY:125,scaleX:9.27,x:634.2,y:125},0).wait(70).to({regX:21,regY:45,scaleX:8.1,x:318.7,y:45},0).wait(1).to({scaleX:6.87,x:270.2},0).wait(1).to({scaleX:5.96,x:234.6},0).wait(1).to({scaleX:5.51,x:216.8},0).wait(1).to({scaleX:5.01,x:197},0).wait(1).to({scaleX:3.71,x:145.8},0).wait(1).to({regX:50.2,regY:125,scaleX:2.11,x:144.3,y:125},0).wait(70).to({scaleX:2.11,x:144.2},0).to({regX:50,scaleX:1.5,x:-21},8).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,0.1,847.4,90);


// stage content:
(lib._728x90BlueFunnelDE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mc-main
	this.instance = new lib.mcmain();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(331,45.1,847.4,90);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#00A3E0",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Slide2KasseiPadiPod.png", id:"Slide2KasseiPadiPod"},
		{src:"images/Slide3iPhone6Plus_Bezahlen.png", id:"Slide3iPhone6Plus_Bezahlen"},
		{src:"images/Slide4MacbookiPhoneChefzugang_Collage_DE.png", id:"Slide4MacbookiPhoneChefzugang_Collage_DE"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;