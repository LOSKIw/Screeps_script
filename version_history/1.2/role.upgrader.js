var roleUpgrader = {
    /** @param {Creep}creep */
    run: function(creep){
        if(creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.upgrading = false;
        }
        else if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0){
            creep.memory.upgrading = true;
        }
        if(creep.memory.upgrading == true){
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
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
            else{
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
    }
}

module.exports = roleUpgrader;