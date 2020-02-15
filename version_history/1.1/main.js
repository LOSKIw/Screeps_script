var roleHarvester = require('role.harvester');
var roleTransferer = require('role.transferer');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');
var SpawnFuntion = require('Spawn');
var Tower = require('tower')

module.exports.loop = function () {
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var spawn1 = Game.spawns['Spawn1'];
    SpawnFuntion.run(spawn1);
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        else if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        else if(creep.memory.role == 'repairer'){
            roleRepairer.run(creep);
        }
        else if(creep.memory.role == 'transferer'){
            roleTransferer.run(creep);
        }
    }
    var towerList = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
    for(var tower of towerList){
        Tower.run(tower);
    }
}