/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.tower');
 * mod.thing == 'a thing'; // true
 */
var structTower = {
     run: function() {
        var towerList = Game.rooms['SIMULATION ROOM'].find(FIND_MY_STRUCTURES,{filter:{structureType:STRUCTURE_TOWER}});
        if(towerList.length>0){
        
    }

};
module.exports = structTower;