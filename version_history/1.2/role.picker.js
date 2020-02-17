var rolePicker = {

    /**@param {Creep}creep */
    run: function(creep){
        var target = creep.room.find(FIND_DROPPED_RESOURCES);
        if(creep.store.getFreeCapacity() == 0 || target == null){

            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return  structure.structureType == STRUCTURE_STORAGE &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else if(creep.pickup(target[0]) == ERR_NOT_IN_RANGE){
            creep.moveTo(target[0]);
        }
    }
}

module.exports = rolePicker;