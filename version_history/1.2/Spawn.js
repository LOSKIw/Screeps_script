var SpawnFunction = {

    run: function(target){
        var spawn = target;

        var roleList = ['harvester','transferer','builder','upgrader'];
        
        //生产creeps
        for(let roles of roleList){
            if(Game.spawns['Spawn1'].spawning != null){
                break;
            }
            let creep_roles = _.filter(Game.creeps, (creep) => creep.memory.role == roles);
            if( Game.spawns['Spawn1'].room.energyAvailable >= 500){
                //scv
                let newName = roles + Game.time;
                if(roles == 'harvester'){
                    if(creep_roles.length < 2 && Game.spawns['Spawn1'].room.energyAvailable >= 900){
                        var Loc = 0;
                        let places = _.filter(Game.creeps, (creep) => (creep.memory.role == 'harvester' && creep.memory.workloc == 0));
                        if(places == null || places.length < 1){
                            Loc = 0;
                        }
                        else{
                            Loc =1;
                        }
                        console.log('Spawning new ' + roles + ': ' + newName);
                        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, 
                            {memory: {role: roles ,workloc: Loc}});
                        break;
                    }
                }
                else if(roles == 'transferer'){
                    if(creep_roles.length < 2 && Game.spawns['Spawn1'].room.energyAvailable >= 900){
                        var Loc = 0;
                        let places = _.filter(Game.creeps, (creep) => (creep.memory.role == 'transferer' && creep.memory.workloc == 0));
                        if(places == null || places.length < 1){
                            Loc = 0;
                        }
                        else{
                            Loc = 1;
                        }
                        console.log('Spawning new ' + roles + ': ' + newName);
                        Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], newName, 
                            {memory: {role: roles ,workloc: Loc}});
                        break;
                    }
                }
                else if(roles == 'builder'){
                    if(creep_roles.length < 1 && Game.spawns['Spawn1'].room.energyAvailable >= 900){
                        console.log('Spawning new ' + roles + ': ' + newName);
                        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
                            {memory: {role: roles}});
                        break;
                    }
                }
                else if(roles == 'upgrader'){
                    if(creep_roles.length < 2 && Game.spawns['Spawn1'].room.energyAvailable >= 900){
                        console.log('Spawning new ' + roles + ': ' + newName);
                        Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
                            {memory: {role: roles}});
                        break;
                    }
                }
            }
        }


        if(Game.spawns['Spawn1'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1, 
                Game.spawns['Spawn1'].pos.y, 
                {align: 'left', opacity: 0.8});
        }
    }
}

module.exports = SpawnFunction;