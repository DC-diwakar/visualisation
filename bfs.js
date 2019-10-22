demo_path=[];
function breadth_first_search(start_id,end_id)
{
alert(end_id);
start=get_node_by_id(start_id);
node_queue=[];
node_queue.push(start);
start.visited=1;
pr=new Promise(function(resolve,reject){
    while(node_queue.length!=0){
node_in_queue=node_queue[0];
connections_of_node_in_queue=node_in_queue.connections;
node_queue.shift();
for (let index = 0; index < connections_of_node_in_queue.length; index++) {
    const connected_node_id = connections_of_node_in_queue[index];
connected_node=get_node_by_id(connected_node_id);
console.log(connected_node.id+" "+end_id);
console.log(connected_node.id===end_id);
if(connected_node.id===end_id) {
    connected_node.current_parent_id=node_in_queue.id;
    resolve();
    return;
}
else if(connected_node.visited!=1)
{
connected_node.visited=1; 
connected_node.current_parent_id=node_in_queue.id;	
node_queue.push(connected_node);    
}
}
}
}).then(function(){
    alert("chali");
    demo_path.push(end_id);
    parent_id=end_id;
    while(parent_id!=start_id)
    {
        nx=get_node_by_id(parent_id).current_parent_id;
        parent_id=nx;
        demo_path.unshift(parent_id);
        console.log(parent_id);
    }
    console.log(demo_path.toString());

}).catch(function()
{
alert("failed");
});

return "NOT_FOUND";
}
