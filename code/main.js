var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var createCreeps = require('role.create');

module.exports.loop = function () {

    createCreeps.run();
    var workList=new Array(0,0,0,0);
    
    var tower = _.filter(Game.structures,struct=>struct.toString=='Tower');
    
    
    
    for(var name in Game.creeps) {
        for(var i=0;i<4;i++){
            if( i == 2 )
                continue;
            if( i == 3 &&workList[i] < 1){
                workList[i]++;
                break;
            }
            else if(i != 3 && workList[i] < 3){
                workList[i]++;
                break;
            }
        }
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep,i);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep,i);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep,i);
        }
    }
}