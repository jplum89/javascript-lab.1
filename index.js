let user = {
    health: 40,
    wins: 0,
}

let grant = {
    name: "Grant the Mighty Chicken",
    hp: 10,
    catlvs: 2,
}

let userName;
let attack;

function initialization() {
    let invite = prompt("Do you want to play?");
    if (invite === "yes") {
        userName = prompt("Enter your username", "Name here");
        battle();
    } else if (invite === "no") {
        null;
    }
}
initialization();

function battle() {
    while (user.health >= 0 && grant.health >= 0) {
        let attack = prompt("Do you want to attack?");
        if (user.health > 0 && user.wins < 3 && attack === "yes") {
            grant.health -= Math.floor((Math.random() * 2) + 1);
            user.health -= Math.floor((Math.random() * 2) + 1);
            console.log(`${userName} has ${user.health} health left.`);
            console.log(`${grant.name} has ${grant.health} health left.`);
            if (grant.health <= 0 && grant.revivals > 0) {
                grant.health += 10;
                console.log(`${userName} has defeated ${grant.name}, but he has respawned!`);
                user.wins++;
                grant.revivals--;
            } else if (grant.health <= 0 && grant.revivals <= 0) {
                console.log(`${userName} has defeated ${grant.name} for good! Great job!`);
                break;
            } else if (user.health <= 0 && user.wins <= 2) {
                console.log(`${grant.name} has defeated ${userName}. You lose.`);
                break;
            }
        } else if (attack !== "yes") {
            break;
        }
    }
}