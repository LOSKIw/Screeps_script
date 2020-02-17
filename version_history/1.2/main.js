var roleHarvester = require('role.harvester');
var roleTransferer = require('role.transferer');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleAttacker = require('role.attacker');
var roleClaimer = require('role.claimer');
var rolePicker = require('role.picker');
var roleDisBuilder = require('role.distanceBuilder');
var roleDisUpgrader = require('role.distanceUpgrader');
var SpawnFuntion = require('Spawn');
var Tower = require('tower')

var visualizer = require('Visualizer');


module.exports.loop = function () {
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    visualizer.Visualizer.visuals();

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
        else if(creep.memory.role == 'upgrader'){
            roleUpgrader.run(creep);
        }
        else if(creep.memory.role == 'transferer'){
            roleTransferer.run(creep);
        }
        else if(creep.memory.role == 'attacker'){
            roleAttacker.run(creep);
        }
        else if(creep.memory.role == 'claimer'){
            roleClaimer.run(creep);
        }
        else if(creep.memory.role == 'picker'){
            rolePicker.run(creep);
        }
        else if(creep.memory.role == 'disbuilder'){
            roleDisBuilder.run(creep);
        }
        else if(creep.memory.role == 'disupgrader'){
            roleDisUpgrader.run(creep);
        }
    }
    var towerList = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
    for(var tower of towerList){
        Tower.run(tower);
    }
}