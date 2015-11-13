var d = 0.35; //Greed
var min = 60000; //Minimum for reap
var fmin = 2 * min; //Minimum for free reap
var recentDates = []; //Recent reap times
Reaper.socket.on("reap", onReap); //Calculate minimums when someone reaps
 
function onReap(name, delta, special) {
    Reaper.flyout('<div style="font-weight: normal; font-size: 1.5em; color: #666; text-align: center; margin-bottom: 0.5em">forthegreatergoodBot</div>Minimum: ' + min + '<br>Free Minimum: ' + fmin + '<br>Greed: ' + d);
    if (Reaper.timeTilNextReap === 0 && delta > 20) //Lower greed over time
        d -= d >= 0 ? 0.05 : 0;
    recentDates.splice(0, 0, new Date()).splice(8, 1); //Update recent dates
    var recent = []; //Recent reaps
    var average = 0; //Average recent reap
    for (var i = 0; i < recentDates.length - 1; i++) { //Calculate average
        if (recentDates[i] - recentDates[i + 1] > 20000) {
            recent.push(recentDates[i] - recentDates[i + 1]);
            average += recentDates[i] - recentDates[i + 1];
        }
    }
    average /= recent.length;
    var sDeviation = 0; //Standard deviation, Credit to AIME15
    for (var i = 0; i < recent.length; i++) { //Calculate standard deviation
        sDeviation += Math.pow(recent[i] - average, 2);
    }
    sDeviation /= average;
    sDeviation = Math.pow(sDeviation, 0.5);
    min = average + sDeviation * d; //Calculate minmum time for reap
    fmin = min * (1800 - Reaper.timeTilNextReap) / 900;//Calculate minimum time for free reap
}
 
function asfBot() {
    Reaper.flyout('<div style="font-weight:normal;font-size:1.5em;color:#666;text-align:center;margin-bottom:0.5em">forthegreatergoodBot</div>Minimum: ' + min + '<br>Free Minimum: '+ fmin + '<br>Greed: ' + d);
    if (Reaper.freeReaps > 0 && 1000 * Reaper.timeTilNextReap > fmin) { //Free Reaps
        var reaped = 1000 * Reaper.secondsSinceLastReap;
        if (reaped >= fmin) { //Free reap
            Reaper.socket.emit("freereap");
            console.log(Math.round(reaped / 100) / 10 + ' (F)');
            setTimeout(asfBot, Math.max(Math.min(fmin - reaped, 2+ 1000 * Reaper.timeTilNextReap), 4));
        } else { //Wait until time on clock should exceed minimum
            setTimeout(asfBot, Math.max(Math.min(fmin - reaped, 2+ 1000 * Reaper.timeTilNextReap), 4));
        }
    } else if (Reaper.timeTilNextReap === 0) { //Normal Reaps
        var reaped = 1000 * Reaper.secondsSinceLastReap;
        if (reaped >= min) { //Reap
            Reaper.socket.emit("reap");
            console.log(Math.round(reaped / 100) / 10);
            d = 0.35;
            setTimeout(asfBot, 1 + fmin);
        } else { //Wait until time on clock should exceed minimum
            setTimeout(asfBot, 1 + min - reaped);
        }
    } else { //Wait until cooldown ends
        setTimeout(asfBot, 1000 * Reaper.timeTilNextReap);
    }
}
asfBot(); //Start the program

