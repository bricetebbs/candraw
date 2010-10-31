function runMaker(cd)
{
    return function() { cd.renderFrame(); }
}

function CanDraw(id)
{
    this.dom_item =  document.getElementById(id);
    this.ctx = this.dom_item.getContext('2d');
    
    this.animateObjects = function() {}
    this.drawObjects = function() {}
    
    this.xSize = this.dom_item.width;
    this.ySize = this.dom_item.height;
    
    this.debug = false;
    
    this.runner = runMaker(this)
}

CanDraw.prototype.beginFrame = function()
{
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0,0,this.xSize, this.ySize);
}

CanDraw.prototype.endFrame = function()
{
}

CanDraw.prototype.renderFrame = function()
{
    this.animateObjects();
    this.beginFrame();
    this.drawObjects();
    this.endFrame();
}

CanDraw.prototype.run = function()
{
    window.setInterval(this.runner, 0);
}

CanDraw.prototype.circle = function(x, y, rad, stroke, fill)
{
    this.ctx.beginPath();
    this.ctx.arc(x, y, rad, 0, Math.PI * 2, false);
    if (fill) this.ctx.fill();
    if (stroke) this.ctx.stroke();
}

CanDraw.prototype.line = function (x1, y1, x2, y2)
{
    this.ctx.beginPath();
    this.ctx.moveTo(x1,y1);
    this.ctx.lineTo(x2,y2);
    this.ctx.stroke();
}
CanDraw.prototype.setLineWidth = function(w)
{
    this.ctx.lineWidth = w;
}

CanDraw.prototype.setLineCap = function(c)
{
    this.ctx.lineCap = c;
}

CanDraw.prototype.setLineJoin = function(j)
{
    this.ctx.lineJoin = j;
}

CanDraw.prototype.rectangle = function(x, y, w, h, stroke, fill)
{
    if (stroke) this.ctx.strokeRect(x, y, w, h);
    if (fill) this.ctx.fillRect(x,y,w,h)
}

CanDraw.prototype.setFillRGBA = function(r,g,b,a)
{
    canDraw.ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

CanDraw.prototype.setStrokeRGBA = function(r,g,b,a)
{
    canDraw.ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

CanDraw.prototype.getDomItem = function() { return this.dom_item; }
CanDraw.prototype.getXSize = function() { return this.xSize;}
CanDraw.prototype.getYSize = function() { return this.ySize;}