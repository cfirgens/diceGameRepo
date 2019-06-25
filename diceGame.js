


// function runGame(){
    // let userClass = "";
    // let selectedAbility;

    // // document.write("Lore.... click below to roll hp")
    
    // userClass = chooseClass(); 

    // let playerHP = getPlayerHP(userClass);
    // let playerDefense = getPlayerDefense(userClass);
    // let playerEvade = getPlayerEvade(userClass);
    // let player ={
    //     health: 50,
    //     defense: 30,
    //     evade: 20
    // }
    // player.health -= 30;
    // document.write(playerHP);

    // document.write("You fight the mighty griffon");

    // fightGriffon(userClass);

    // document.write(playerHP);

    // document.write("Lore... save the prince and defeat the red dragon!")

    // fightdragon(userClass);
// }


    function chooseClass(profession){
        let selectedClass = "";
        switch(profession) {
            case "knight":
                selectedClass = "knight";
                     break;
            case "wizard":
                selectedClass = "wizard"         
                     break;
        }
        return selectedClass;
    }

    function getPlayerHP(userClass){
        // declare variables
        if(userClass === "knight"){
            playerHP = rollDie(12)+20;
        }

        else if (userClass === "wizard"){
            playerHP = rollDie(12)+10;
        }

        else{
            playerHP = rollDie(12)+15;
        }
        return playerHP;
    }

    function getPlayerAttack(userClass){
        // declare variables
        if(userClass === "knight"){
            playerAttack = rollDie(6)+2;
        }

        else if (userClass === "wizard"){
            playerAttack = rollDie(12)+4;
        }

        else{
            playerAttack = rollDie(8)+3;
        }
        return playerAttack;
    }

    function getPlayerDefense(userClass){
        // declare variables
        if(userClass === "knight"){
            playerDefense = 8;
        }
        else if (userClass === "wizard"){
            playerDefense = 4;
        }
        else{
            playerDefense = 6;
        }
        return playerDefense;
    }

    function getPlayerEvade(userClass){
        // declare variables
        if(userClass === "knight"){
            playerEvade = 30;
        }
        else if (userClass === "wizard"){
            playerEvade = 40;
        }
        else{
            playerEvade = 50;
        }
        return playerEvade;
    }


    function userFightOptions(){
        let selectedAbility = "";
        let userFightOptionsPrompt = prompt("What action would you like to take? (ie: Attack, Defend, Evade)");
        switch(userFightOptionsPrompt){
            case "Attack":
                // selectedAbility = playerAttack + document.write('You attack and deal:'+ playerAttack);
                selectedAbility= "Attack";
                    break;
        
            case "Defend":
                //selectedAbility = playerDefense + document.write('You defend against the attack and take' + playerDefense +' less damage');
                selectedAbility = "Defend";
                    break;

            case "Evade":
                selectedAbility = "Evade";
                // selectedAbility = playerEvade + document.write('You attempt to evade against the next attack against you and recover some hp');
                    break;
            default:
                selectedAbility = "Fear";
                break;
        }
        return selectedAbility;
    }

    function rollDie(sidedDie){ // tested and works
        let total = Math.floor(Math.random()* sidedDie) +1;
        return total;
    }

    function fightGriffon(userClass){
        let critMultiplier = 1.5;
        let playerCrit = 0;
        let griffonHP = 20;
            while (griffonHP > 0){
                let griffonAttack = rollDie(8);
                    if (playerHP < 0){
                        document.write("The griffon has killed you. A hunter discovers your corpse or what's left of it.")
                        location.reload();

                            break;
                    }

                   let selectedAbility = userFightOptions();

                    if (selectedAbility === "Attack"){
                        let playerAttack = getPlayerAttack(userClass);
                        let playerCritDmg = playerAttack*critMultiplier;
                        playerCrit = rollDie(100);
                        if (playerCrit>80){
                            document.write("You have critically hit!")
                            document.write("The griffon took " + playerCritDmg + " damage.");
                            document.write("The griffon flinches and deals half damage.")
                            document.write("The griffon dealt: " + griffonAttack*.5 + " damage.");
                            griffonHP= griffonHP - playerCritDmg;
                            playerHP = playerHP - griffonAttack*(.5);
                                }
                    
                        else{
                            document.write("You hit the griffon for: " + playerAttack);
                            document.write("The griffon hits you for: " + griffonAttack);
                            griffonHP = (griffonHP - playerAttack);
                            playerHP = (playerHP - griffonAttack);
                        }
                    }
                    else if (selectedAbility === "Defend"){
                        playerHP = playerHP - (griffonAttack - playerDefense);
                        document.write("You defend for: " + playerDefense + " damage.")
                        document.write("The griffon hits you for: " + (griffonAttack - playerDefense)); 
                    }
                    else if (selectedAbility === "Evade"){
                        playerEvade= rollDie(70)+playerEvade;
                        if (playerEvade>80){
                            
                            document.write("You have evaded the griffons attack and regained 5 hp");
                            playerHP += 5;
                        }
                        else{
                            document.write("You tripped over a rock, and recieved a critical blow");
                            document.write("The griffon critically hits you for: " + (griffonAttack*critMultiplier));
                            playerHP = playerHP - (griffonAttack*critMultiplier);
                        }
                    }
                    else if(selectedAbility === "Fear"){
                        document.write("You froze in fear and took double damage.");
                        document.write("Griffon dealt: "+ griffonAttack*2 + " damage.");
                        playerHP= playerHP - (griffonAttack*2);
                        }

                    document.write("The griffons hp is: " + griffonHP);
                    document.write("Your hp is: " + playerHP);
                    }

                document.write("You defeated the mighty griffon and take his head back as a proof of this venerable exploit")
                
                return playerHP;
            }


    function fightDragon(){
        let critMultiplier = 1.5;
        let playerCrit = 0;
        let dragonHP = 30;
        let playerCritDmg = playerAttack*1.5;
            while (dragonHP>0){
                let dragonAttack = rollDie(10);

                    if (playerHP < 0){
                        document.write("The dragon has killed you and you have failed yourself, the princess and the kingdom")
                            break;
                    }

                    let selectedAbility = userFightOptions();

                    if (selectedAbility === "Attack"){
                        playerCrit = rollDie(100);
                        if (playerCrit>80){
                            document.write("You have critically hit!")
                            dragonHP= dragonHP - playerCritDmg;
                            playerHP = playerHP - dragonAttack;

                        }
                        else{
                            dragonHP = (dragonHP - playerAttack);
                            playerHP = (playerHP - dragonAttack);
                        }
                    }
                    else if (selectedAbility === "Defend"){
                        playerHP = playerHP - (dragonAttack - playerDefense);
                    }
                    else if (selectedAbility === "Evade"){
                        playerEvade= rollDie(70)+playerEvade;
                        if (playerEvade>80){
                            
                            document.write("You have evaded the dragons fireball attack!");
                        }
                        else{
                            document.write("You tripped over a rock, and recieved a critical blow");
                            playerHP = playerHP - (dragonAttack*1.5);
                        }
                    }
                    else if(selectedAbility === "Fear"){
                        document.write("You froze in fear and took double damage.");
                        playerHP= playerHP - (dragonAttack*2);
                        }

                playerHP =(playerHP - dragonAttack);
                dragonHP=(dragonHP - playerAttack);
                
                document.write('The dragons hp is:' + dragonHP);
                document.write('Your hp is:' + playerHP);
                    
            }
        document.write('You have defeated the mighty dragon. You have completed your quest!');
        return playerHP;

    }
