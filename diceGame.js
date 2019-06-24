
runGame()

function runGame(){
    let playerHP = 0;
    let playerAttack = 0;
    let playerDefense = 0;
    let playerEvade = 0;
    let wizardHP = 30;
    let griffonHP = 20;
    let userClass = "";
    // let peasent, wizard, knight;
    let playerCritDmg = playerAttack*1.5;
    let selectedAbility;

    console.log("Lore.... click below to roll hp")
    
    userClass = chooseClass(); 
    getStats(userClass);

    console.log(playerHP);

    console.log("You fight the mighty griffon");

    fightGriffon();

    console.log(playerHP);

    console.log("Lore... save the prince and defeat the red wizard!")

    fightWizard();

}


    function chooseClass(){
        let classLore;
        let userClassPrompt = prompt("As a child what were you more inclined towards? Wrestling with the other children or reading books under the oak tree that overlooks the village?");
        let selectedClass = "";
        switch(userClassPrompt) {
            case "Wrestling":
                classLore= "You were the best of the best, no other child your age could pin you and your unique understanding of using leverage served you well when you went through training to become a knight!";
                selectedClass = "knight";
                     break;
            case "Reading":
                classLore= "You read every book your small village had to offer, whenever a peddler came you would do everything you could to get more reading material, one time you stumbled upon a wizards old spellbook, you practiced the fireball spell until you became profecieint becoming an acolyte of the kingdoms wizard tower.";
                selectedClass = "wizard"         
                     break;
            default:
                classLore="You were like every other child, a jack of all trades yet a master of none.";
                selectedClass = "peasant"; 
                     break;
        }
        console.log(classLore);
        return selectedClass;
    }

    function getStats(userClass){\
        // declare variables
        if(userClass === "knight"){
            playerHP = rollDie(12)+20;
            playerAttack = rollDie(6)+2;
            playerDefense = 8;
            playerEvade = 30;
        }
        else if (userClass === "wizard"){
            playerHP = rollDie(12)+10;
            playerAttack = rollDie(12)+4;
            playerDefense = 4;
            playerEvade = 40;
        }
        else{
            playerHP = rollDie(12)+15;
            playerAttack = rollDie(8)+3;
            playerDefense = 6;
            playerEvade = 50;
        }
    }

    function userFightOptions(){
        let selectedAbility = "";
        let userFightOptionsPrompt = prompt("What action would you like to take? (ie: Attack, Defend, Evade)");
        switch(userFightOptionsPrompt){
            case "Attack":
                // selectedAbility = playerAttack + console.log('You attack and deal:'+ playerAttack);
                selectedAbility= "Attack";
                    break;
        
            case "Defend":
                //selectedAbility = playerDefense + console.log('You defend against the attack and take' + playerDefense +' less damage');
                selectedAbility = "Defend";
                    break;

            case "Evade":
                selectedAbility = "Evade";
                // selectedAbility = playerEvade + console.log('You attempt to evade against the next attack against you');
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

    function fightGriffon(){
        let griffonAttack = rollDie(8);
            while (griffonHP > 0){
                    if (playerHP < 0){
                        console.log("The griffon has killed you. A hunter discovers your corpse or what's left of it. The wizard has won.")
                            break;
                    }
                    if (griffonAttack >=8){
                        console.log("The griffon has critically hit you.");
                        griffonAttack = griffonCrit;
                    }

                   let selectedAbility = userFightOptions();

                    if (selectedAbility = Attack){
                        if (playerCrit>80){
                            playerCrit = rollDie(100);
                            console.log("You have critically hit!")
                            griffonHP= griffonHP - playerCritDmg;
                            playerHP = playerHP - griffonAttack;

                        }
                        else{
                            griffonHP = (griffonHP - playerAttack);
                            playerHP = (playerHP - griffonAttack);
                        }
                    }
                    else if (selectedAbility = Defend){
                        playerHP = playerHP - (griffonAttack - playerDefense);
                    }
                    else if (selectedAbility = Evade){
                        playerEvade= rollDie(70)+playerEvade;
                        if (playerEvade>80){
                            
                            console.log("You have evaded the griffons attack!");
                        }
                        else{
                            console.log("You tripped over a rock, and recieved a critical blow");
                            playerHP = playerHP - (griffonAttack*1.5);
                        }
                    }
                    else if(selectedAbility ="Fear"){
                        console.log("You froze in fear and took double damage.");
                        playerHP= playerHP - (griffonAttack*2);
                        }

                    }

        

                console.log('The griffons hp is:' + griffonHP);
                console.log('Your hp is:' + playerHP);
            }
        console.log("You defeated the mighty griffon and take his head back as a proof of this venerable exploit")
        return playerHP;
    }

    function fightWizard(){
            while (wizardHP>0){
                let wizardAttack = rollDie(10);

                    if (playerHP < 0){
                        console.log("The wizard has killed you and you have failed yourself, the princess and the kingdom")
                            break;
                    }
                    if (wizardAttack >=10){
                        console.log("The wizard has critically hit you.");
                        wizardAttack = 15;
                    
                    }

                playerHP =(playerHP - wizardAttack);
                wizardHP=(wizardHP - playerAttack);
                
                console.log('The wizards hp is:' + wizardHP);
                console.log('Your hp is:' + playerHP);
                    
            }
        console.log('You have defeated the mighty wizard. Finding the princess in the dungeon you unshackle her and bring her back to her rightful place in the castle, you have completed your quest!');
        return playerHP;

    }
