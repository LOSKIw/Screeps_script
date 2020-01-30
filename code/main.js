var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var SpawnFuntion = require('Spawn');
var Tower = require('tower')

module.exports.loop = function () {
    var creepsNumList = [0,0];
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
            continue;
        }
        creepsNumList[Memory.creeps[name].workloc] = creepsNumList[Memory.creeps[name].workloc] + 1;
    }
    
    //console.log(creepsNumList);

    var spawn1 = Game.spawns['Spawn1'];
    creepsNumList = SpawnFuntion.run(spawn1,creepsNumList);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer'){
            roleRepairer.run(creep);
        }
    }

    var towerList = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
    for(var tower of towerList){
        Tower.run(tower);
    }
}