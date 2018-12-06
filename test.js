var tape = require('tape')
var iterate = require('./')

tape('iterates all', function (t) {

    var groupSize = 5, startIndex = 3, endIndex = 9

    var ite = iterate( startIndex, endIndex, groupSize)    //start index = 2, end index = 9 (total 8 elements), group size = 2 (total 5 groups)
    var found = {}

    var currentGroup = Math.floor( startIndex / groupSize )
    var elemCount = startIndex % groupSize;

    for (var i = startIndex; i <= endIndex; i++) {
        var idx = ite()

        t.ok(!!idx, 'not null')

        if (found[idx]) t.ok(false, 'duplicate')
        found[idx] = true

        var groupNum = Math.floor(idx/groupSize);
        if ( groupNum == currentGroup ){
            elemCount++;
            t.ok( elemCount<=groupSize ,"overflow");
        }
        else{   // new group

            if (elemCount!==groupSize)
                t.ok( false, "not counted element" );

            elemCount=1;

            if ( groupNum!==(currentGroup+1) )
                t.ok(false, "not the next group's element" );

            currentGroup = groupNum;
        }

    }

    t.ok(!ite(), 'no more')
    t.end()
})
