
// Add Parameters for animate and draw routines.

NUM_OBJECTS = 100;
var curX = 30;
var curY = 40;
var dCurX = 10;
var dCurY= 9;
var objects = new Array(NUM_OBJECTS);

var canDraw = null;

function animateObjectsBLOBS()
{
    caught = 0;
    for(var i =0; i < NUM_OBJECTS; i++)
    {
        var o = objects[i];
        var dcx, dcy;
        
        dcx = curX - o.x;
        dcy = curY - o.y;
        
        dist2 = (dcx*dcx + dcy*dcy);
        
        o.r = 3; // THings far away are small
        
        // Move far things close to the cur pos
        if (dist2 < 2000.0)
        {
            o.dx = dcx/30.0;
            o.dy = dcy/30.0;
            o.r = 6;
        }
        // As you get close move randomly
        if(dist2 < 300)
        {
            o.dx = Math.random()*3.0-1.5;
            o.dy = Math.random()*3.0-1.5;
            o.r = 7;
            caught ++;
        }
        // Push away when too close
        if(dist2 < 5)
        {
            o.dx = -dcx/60.0;
            o.dy = -dcy/60.0;
            o.r = 10;
        }
        
        // Move 
        o.x = o.x + o.dx;
        o.y = o.y + o.dy;
       
       // Wrap 'em
        o.x += canDraw.getXSize()*( (o.x < 0.0 ) - (o.x > canDraw.getXSize()) );
        o.y += canDraw.getYSize()*( (o.y < 0.0 ) - (o.y > canDraw.getYSize()) );

       }
       
       if (caught > NUM_OBJECTS /2.0)
       {
            curX = canDraw.getXSize() * Math.random();
            curY = canDraw.getYSize() * Math.random();
       }
}

function drawObjectsCELLS()
{
    canDraw.setLineWidth(8);
    canDraw.setFillRGBA(255,0,0,0.3);
    canDraw.setStrokeRGBA(150, 200, 0, 0.3);
    
    for(var i =0; i < NUM_OBJECTS; i++)
    {
        o = objects[i];
        canDraw.circle(o.x,o.y, o.r, true, true);
    }
}