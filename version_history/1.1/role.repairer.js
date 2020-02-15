var roleRepairer = {
    /** @param {Creep}creep */
    run: function(creep){
        if(creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.repairing = false;
        }
        else if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0){
            creep.memory.repairing = true;
        }
        if(creep.memory.repairing == true){
            var target = creep.room.find(FIND_STRUCTURES,{
                filter:(structure) => {
                    return structure.hits < structure.hitsMax && structure.structureType != STRUCTURE_WALL;
                }
            });
            if(target.length > 0){
                if(creep.repair(target[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else{
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else{
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_STORAGE &&
                        structure.store.getUsedCapacity(RESOURCE_ENERGY) > 0);
                }
            });
            if(targets.length > 0){
                if(creep.withdraw(targets[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
}

module.exports = roleRepairer;