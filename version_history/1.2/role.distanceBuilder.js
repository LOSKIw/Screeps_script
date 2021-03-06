var roleDisBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.building = false;
        }
        else if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0){
            creep.memory.building = true;
        }

        if(creep.memory.building == true){
            if(creep.room.name!='W4N49'){
                var target = creep.room.findExitTo('W4N49');
                creep.moveTo(creep.pos.findClosestByPath(target));
            }
            else{
                var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                if(targets.length > 0) {
                    if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
                else{
                    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
            
            }
        }
        else{
            if(creep.room.name == 'W4N49'){
                var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
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
};

module.exports = roleDisBuilder;