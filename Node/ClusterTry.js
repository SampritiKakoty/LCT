var cluster=require('cluster');
if(cluster.isMaster){
    var numCpu=require('os').cpus().length;

    console.log("numCpu"+numCpu);

    for(var i=0;i<numCpu;i++){
        cluster.fork();
    }

    Object.keys(cluster.workers).forEach(function(id)
    {
        console.log(cluster.workers[id].process.pid);
    })

}


