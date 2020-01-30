/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.create');
 * mod.thing == 'a thing'; // true
 */

var createCreeps = {
    run: function() {
        var harv = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgr = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var buil = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        if(Game.spawns['LOSKI_1'].energy < 300 || Game.spawns['LOSKI_1'].spawning){
            return ;
        }
        if(harv.length<3){
            let newName = 'Harvester' + Game.time;
            console.log('New Harvester:' + newName)
            Game.spawns['LOSKI_1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
            {memory:{role:'harvester'}});
        }
        else if(upgr.length<3){
            let newName = 'Upgrader'+ Game.time;
            console.log('New Upgrader:' + newName);
            Game.spawns['LOSKI_1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
            {memory:{role:'upgrader'}});
        }
        else if(buil.length<3){
            let newName = 'Builder'+ Game.time;
            console.log('New Builder:' + newName);
            Game.spawns['LOSKI_1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
            {memory:{role:'builder'}});
        }
    }
};

module.exports = createCreeps;