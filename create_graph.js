var node_count=0;
var start_node;
var target_node;
var json_nodes=[];
var nodes=[];
var custom_nodes=[];
var custom_node_count=0;
function clear_canvas()
{
graph_canva.canva.height=graph_canva.canva.height+Math.floor(node_count/10)*300;
graph_canva.context.beginPath();
graph_canva.context.rect(0,0, graph_canva.canva.width, graph_canva.canva.height);
//graph_canva.context.fillStyle = "gray";
graph_canva.context.fillStyle = "#8A2BE2";
graph_canva.context.fill();
}

function accept_json()
{
var obj=JSON.parse(document.getElementById('json_area').value);
alert(obj);
node_count=obj.count;
start_node=obj.start;
target_node=obj.end;
json_nodes=obj.nodes;
draw_graph_from_json();
visualise_connections();
}

function get_node_by_id(node_id)
{
for(i=0;i<node_count;i++){
	 if(node_id==nodes[i].id)
	 {
        return nodes[i];
	 }

	}
}

function draw_graph_from_json()
{
x=50;
y=50;
nodes=[];
graph_canva.canva.height=graph_canva.canva.height+Math.floor(node_count/10)*300;
graph_canva.context.beginPath();
graph_canva.context.rect(0,0, graph_canva.canva.width, graph_canva.canva.height);
//graph_canva.context.fillStyle = "gray";
graph_canva.context.fillStyle = "#8A2BE2";
graph_canva.context.fill();


j=0;
while(j<node_count)
{
i=0;
while(i<10 && j<node_count)
{
node=new Node(x,y);
node.id=json_nodes[j].id;
node.connections=json_nodes[j].connections;	
console.log(node.connections)
node.create_node();
nodes.push(node);
//  graph_canva.context.fillStyle="white";
//  graph_canva.context.textAlign = "center";
//  graph_canva.context.font = "15px Arial";
//  graph_canva.context.fillText("N"+node.id,node.x,node.y-25);
x=x+120;
if(i%4==0){ y=y+120; }
else if(i%4==1){ y=y+120; }
else if(i%4==2){ y=y+120; }
else if(i%4==3) { y=y-320; x=x-170;}
i++;
j++;
}
y=y+140;
x=50
}

}

function visualise_connections()
{
	nodes.forEach(n=> {
		(n.connections).forEach(connection_id=>{
			node_id=get_node_by_id(connection_id);
			//console.log(node_id);
			//console.log(node_id.id);
			connect_nodes(n,node_id,1,'yellow');
		});	
	});
	
}



function mn()
{
/*img=new Image();
img.src='http://localhost:8003/circle2.png'; */
node_count=document.getElementById("cnt").value;
x=50;
y=50;
 graph_canva.context.fillStyle = "gray";
j=0;
while(j<node_count)
{
i=0;
while(i<16 && j<node_count)
{
node=new Node(x,y);	
node.create_node();
nodes.push(node);
    /*   if(j==0)
	{
		previous_node=node;
	}
	else
	{
          connect_nodes(previous_node,node);
          previous_node=node;
	} */
//  graph_canva.context.fillStyle="red";
//  graph_canva.context.textAlign = "center";
//  graph_canva.context.font = "15px Arial";
//  graph_canva.context.fillText("N"+j,node.x,node.y);
x=x+120;
if(i%2==0){ y=y+120; }
else { y=y-120; }
i++;
j++;
}
y=y+240;
x=50
if(j<node_count) 
{
console.log(j);
 graph_canva.canva.height=canva.height+50;
 graph_canva.context.clearRect(0,0,canva.width,canva.height);
//redraw_canvas();
}

}
}

// for custom graph
function drawR(event)
{
x=event.pageX- graph_canva.canva.offsetLeft;  // event.clientX will also work.
y=event.pageY- graph_canva.canva.offsetTop;
/*  node=Node(x,y);
  if(node in custom_nodes)
	{

	}
  //node.create_node();
  if(sqrt(pow(x-x1,2)+pow(y-y1,2))<60)
	{
		send_error_message();
		return;
	}
   else
	{

          node.create_node();
	} */
//console.log("draw");
/* console.log(Math.PI);
 graph_canva.context.beginPath();
 graph_canva.context.fillStyle = "gray";
 graph_canva.context.arc(x, y,25,0, 2*Math.PI);
 graph_canva.context.fill();
 graph_canva.context.stroke();*/
//context.fillRect(x,y,30,30);
//context.fillRect(event.X,event.Y,15,15); Didn't work
}
function connect_nodes(node1,node2,w,line_colour)
{
	console.log("called");
  // Reset the current path
   graph_canva.context.beginPath(); 
	// Staring point (10,45)
	graph_canva.context.fillStyle = 'green';
	graph_canva.context.arc(node1.x,node1.y-20, 5, 0, 2*Math.PI);
	graph_canva.context.fill();

	graph_canva.context.beginPath();
    graph_canva.context.moveTo(node1.x,node1.y-20);
	// End point (180,47)
	 graph_canva.context.strokeStyle=line_colour;
	 graph_canva.context.lineWidth=w;
	 //m=30;
   //graph_canva.context.bezierCurveTo(node1.x+m,node1.y+m,node2.x-m,node2.y-m,node2.x,node2.y);
	 //graph_canva.context.quadraticCurveTo(node2.x-30,node2.y-30,node2.x,node2.y);
	 
		graph_canva.context.lineTo(node2.x,node2.y+20);
		graph_canva.context.stroke();
		
		



		
 		graph_canva.context.beginPath();
    graph_canva.context.fillStyle = 'red';
    graph_canva.context.arc(node2.x,node2.y+20, 5, 0, 2 * Math.PI);
    graph_canva.context.fill();
  // Make the line visible  
}


function Node(x,y)
{
	var me=this;
	this.connections=[]; 
	this.id=null;  	
	this.x=x;
	this.y=y;
	this.create_node=function()
	{
         graph_canva.context.fillStyle="black";
         graph_canva.context.beginPath();
          graph_canva.context.arc(this.x, this.y,25, 0, 2*Math.PI);
          graph_canva.context.fill();
          graph_canva.context.stroke();
			
			
					graph_canva.context.fillStyle="white";
					graph_canva.context.textAlign = "center";
					graph_canva.context.font = "15px Arial";
					graph_canva.context.fillText("N"+this.id,this.x,this.y-25);
	//context.drawImage(img,me.x,me.y,60,60);
        //console.log("call hua");
	}
}

// function redraw_canvas()
// {
//       i=0;
// for(i=0;i<node_count;i++)
// 	{
// 	 n=nodes[i];
//          console.log(i);
//          n.create_node();
// 	}
// }

function draw_canvas()
{
this.canva= document.getElementById('canvasInAPerfectWorld');
alert(canva);
//canva.addEventListener("mousedown",drawR,false); //works 
this.canva.addEventListener("click",drawR,false); //works
this.context=canva.getContext("2d");
this.context.fillStyle = "black";
this.canva.style.left = "200px";
this.canva.style.top = "10px";
this.canva.style.position = "absolute";


	return this;
}

var graph_canva;
window.onload=function() {
alert("loaded");
graph_canva=draw_canvas();
}
/*context.beginPath();
context.arc(95, 50, 40, 0, 2 * Math.PI);
context.stroke();*/
/*let i=0;
while(i < 5)
{
context.fillRect(25+20*i, 25, 15,15);
i=i+1;
} */
