var roleClaimer = {
    /** @param {Creep}creep */
    run: function(creep){
        if(creep.room.name!='W4N49'){
            var target = creep.room.findExitTo('W4N49');
            creep.moveTo(creep.pos.findClosestByPath(target));
        }
        else{
            /*
            if(creep.room.controller.owner!= 'LOSKI' && creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller);
            }
            else{
                */
                if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE){
                    creep.moveTo(creep.room.controller);
                }
            //}
        }
    }
}

module.exports = roleClaimer;