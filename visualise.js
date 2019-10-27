
function connect_local_nodes(node1,node2,lineWidth,line_colour)
{
  graph_canva.context.beginPath();
  graph_canva.context.moveTo(node1.x,node1.y);
//End point (180,47)
 graph_canva.context.strokeStyle=line_colour;
 graph_canva.context.lineWidth=lineWidth;
 graph_canva.context.lineTo(node2.x,node2.y);
if(node2.x>node1.x){ i=15; }
else {  i=-15; }

  graph_canva.context.moveTo(node2.x,node2.y);
  graph_canva.context.lineTo(node2.x-i,node2.y-15);
  graph_canva.context.moveTo(node2.x,node2.y);
  graph_canva.context.lineTo(node2.x-i,node2.y+15);

// End point (180,47)
graph_canva.context.strokeStyle=line_colour;
graph_canva.context.lineWidth=lineWidth;

graph_canva.context.stroke();
// for(i=0;i<node_count;i++){
// 	 if(node_id==nodes[i].id)
// 	 {
//         return nodes[i];
// 	 }

// 	}
}



function my_sleep()
{ 
  me=this;
  me.stop="";
  me.result=demo_path;
  console.log(demo_path);
  console.log("path above");
  me.index=0;
  me.previous_node=get_node_by_id(me.result[0]); 
  me.previous_node.create_node(); 
  me.previous_most=null;
  this.init=function()  
  {
  me.index=me.index+1;
  current_node=get_node_by_id(me.result[me.index]);
  // if(me.previous_most!=null)
  // {
  //   me.previous_most.connections.forEach(i=> {
  //     n=get_node_by_id(i)
  //     connect_nodes(me.previous_most,n,2,'')
  //   });  
  // }


  // commented for now
  //  me.previous_node.connections.forEach(i=> {
  //   n=get_node_by_id(i)
  //   n.create_node();
  //   if(n!=current_node) { connect_nodes(me.previous_node,n,2,'pink') } 
  // });

  current_node.create_node();
  connect_local_nodes(me.previous_node,current_node,3,'green');
  me.previous_most=me.previous_node;
  me.previous_node=current_node;

  if(me.index===me.result.length-1)
  {
    console.log("got here");
    clearInterval(me.stop);

  }
  
}
}
function visualise_traversal()
{
  accept_json();
  clear_canvas();
 new Promise(function(resolve,reject){ 
  breadth_first_search(start_node,target_node);
  resolve();
}).then(function()
{
mm=new my_sleep();
mm.stop=setInterval(mm.init,2000);
}).catch(function()
{
  alert("error");
});
  //connect_nodes(previous_node,current_node,2,'black');
  //previous_node=current_node;  
}
