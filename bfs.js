node_queue=[];
function breadth_first_search(start_id,end_id,nodes)
{
start=get_node_by_id(start_id);
node_queue.push(start);
node_queue.forEach(n=>{

    n.connections.forEach(connection =>{

        node_queue.push(connection)   
       });
});

}