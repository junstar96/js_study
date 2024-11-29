function solution(park, routes) {
    let player_point = []
    let object_point = []
    const limit_s = park.length;
    const limit_e = park[0].length;
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[0].length; j++) {
            if (park[i][j] === 'S') {
                player_point = [i, j]
            }
            else if(park[i][j] === 'X')
            {
                object_point.push([i, j]);
            }
            
        }
    }

    console.log(limit_s, limit_e);

    routes.forEach(element => {
        let [code, move] = element.split(' ');
        console.log(code, move);
        console.log(player_point)

        switch (code) {
            case 'E':
                var ob_check = object_point.filter(x=>{
                    if(x[0] === player_point[0] && x[1] > player_point[1] && x[1] <= player_point[1] + (+move))
                    {
                        return 1;
                    }
                })
                

                

                if (player_point[1] + (+move) < limit_e && ob_check.length === 0) {
                    player_point[1] += (+move);
                }
                break
            case 'W':
                var ob_check = object_point.filter(x=>{
                    if(x[0] === player_point[0] && x[1] < player_point[1] && x[1] >= player_point[1] - (+move))
                    {
                        return 1;
                    }
                })
                if (player_point[1] - (+move) >= 0 && ob_check.length === 0) {
                    player_point[1] -= (+move);
                }
                break;
            case 'S':
                var ob_check = object_point.filter(x=>{
                    if(x[1] === player_point[1] && x[0] > player_point[0] && x[0] <= player_point[0] + (+move))
                    {
                        return 1;
                    }
                })


                if (player_point[0] + (+move) < limit_s && ob_check.length === 0) {
                    player_point[0] += (+move);
                }
                break;
            case 'N':
                var ob_check = object_point.filter(x=>{
                    if(x[1] === player_point[1] && x[0] < player_point[0] && x[0] >= player_point[0] - (+move))
                    {
                        return 1;
                    }
                })


                if (player_point[0] - (+move) >= 0 && ob_check.length === 0) {
                    player_point[0] -= (+move);
                }
                break;
        }
    });


    return player_point;
}

console.log(solution(["SOO","OXX","OOO"],["E 2","S 2","W 1"]	))