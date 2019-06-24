
runGame()

function runGame(){
    let playerHP = rollDie(12)+200; // works
    let playerAttack = rollDie(8)+4;
    let wizardHP = 30;
    let griffonHP = 20;
    let userClass;

    console.log("Lore.... click below to roll hp")
    
    // chooseClass(); 

    console.log(playerHP);

    console.log("You fight the mighty griffon");

    fightGriffon();

    console.log(playerHP);

    console.log("Lore... save the prince and defeat the red wizard!")

    fightWizard();



    // function chooseClass(){
    //     let classLore;
    //     let userClass = prompt("As a child what were you more inclined towards? Wrestling with the other children or reading books under the oak tree that overlooks the village?");
    //     switch(userClass) {
    //         case "Wrestling":
    //             classLore= "You were the best of the best, no other child your age could pin you and your unique understanding of using leverage served you well when you went through training to become a knight!";
    //             userClass = knight;
    //                  break;
    //         case "Reading":
    //             classLore= "You read every book your small village had to offer, whenever a peddler came you would do everything you could to get more reading material, one time you stumbled upon a wizards old spellbook, you practiced the fireball spell until you became profecieint becoming an acolyte of the kingdoms wizard tower.";
    //              userClass = wizard;             
    //                  break;
    //         default:
    //             classLore="You were like every other child, a jack of all trades yet a master of none.";
    //              userClass = peasent; 
    //                  break;
    //     }
    //     console.log(classLore);
    // }

    function userFightOptions(){

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
                        griffonAttack = 12;
                            continue;
                    }
                playerHP = (playerHP - griffonAttack);
                griffonHP= (griffonHP - playerAttack);
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
                            continue;
                    }

                playerHP =(playerHP - wizardAttack);
                wizardHP=(wizardHP - playerAttack);
                
                console.log('The wizards hp is:' + wizardHP);
                console.log('Your hp is:' + playerHP);
                    
            }
        console.log('You have defeated the mighty wizard. Finding the princess in the dungeon you unshackle her and bring her back to her rightful place in the castle, you have completed your quest!');
        return playerHP;

    }








}