let csv = require("fast-csv"),
    path = require("path");

let players = [];

module.exports.get = () => {
    return new Promise((resolve, reject) => {
        csv.fromPath(path.resolve(__dirname, "../data/players.csv"))
            .on("data", function(data) {
                let namePieces = data[1].trim().split(" ");
                let positionPieces = data[3].trim().split(",");
                let primaryPosition = positionPieces.shift();
                let isPitcher = primaryPosition === "S" || primaryPosition === "R";
                let isBatter = !isPitcher;

                let player = {
                    rank: data[0],
                    firstName: namePieces[0].trim(),
                    lastName: namePieces[1].trim(),
                    fullName: data[1].trim(),
                    team: data[2].trim(),
                    fullPosition: data[3],
                    primaryPosition: primaryPosition,
                    additionalPositions: positionPieces,
                    value4: data[4],
                    value5: data[5],
                    adp: data[6],
                    age: data[7],
                    isHitter: !isPitcher,
                    isPitcher: isPitcher
                };

                if (isPitcher) {
                    player = {
                        ...player,
                        ip: data[8],
                        w: data[9],
                        sv: data[10],
                        hld: data[11],
                        qs: data[12],
                        k: data[13],
                        bb: data[14],
                        era: data[15],
                        whip: data[16],
                        tur: data[17]
                    };
                } else if (isBatter) {
                    player = {
                        ...player,
                        ab: data[8],
                        h: data[9],
                        avg: data[10],
                        hr: data[11],
                        r: data[12],
                        rbi: data[13],
                        sb: data[14],
                        so: data[15],
                        obp: data[16],
                        slg: data[17],
                        tb: data[18],
                        ops: data[19],
                        tur: data[20]
                    };
                }

                players.push(player);
            })
            .on("end", function(){
                resolve(players);
            })
            .on("error", function(err) {
                reject(err);
            });
    });
};