// You are given a list of projects and a list of dependencies (which is a list of pairs of
//     projects, where the second project is dependent on the first project ). All of a project's dependencies
//     must be built before the project is . Find a build order that will allow the projects to be built. If there
//     is no valid build order, return an error.

let Graph = require('./Graph');

Graph.prototype.findNodeWithNoChildren = function(){
    for (let node in this.nodes){
        if (Object.keys(this.nodes[node]).length === 0){
            return node;
        }
    }
    return undefined;
};

let buildOrder = function(projects, dependencies){
    let graph = new Graph();
    projects.forEach(project =>{
        graph.addNode(project);
    });
    dependencies.forEach(dependency=>{
        graph.addEdge(dependency[1], dependency[0]);
    });

    let answer = [];
    let currNode = graph.findNodeWithNoChildren();
    while(currNode !== undefined){
        answer.push(currNode);
        graph.removeNode(currNode);
        currNode = graph.findNodeWithNoChildren();
    }

    if (answer.length === projects.length){
        return answer;
    }
    else{
        throw Error;
    }
};

var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

console.log(buildOrder(projects, dependencies));
